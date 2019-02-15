import { Component, OnInit, PipeTransform } from '@angular/core';

import { PacienteService } from '../../services/paciente.service';
import {Paciente} from '../../models/paciente.model';
import { calendarioIdioma } from '../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable'; 
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})



export class PacienteComponent implements OnInit {

cols: any[];
selectedItem: Paciente;
displayDialog: boolean;
popItem:Paciente;
newPopItem: boolean;
es:any;
// LOADING
loading: boolean;
updateDataForm: FormGroup;
elemento:Paciente = null;
elementos:Paciente[] = null;
_id:number = 0;

columns: any[];
rows: any[];

  constructor(private pacienteService:PacienteService ) {

        this.cols = [
            { field: 'apellido', header: 'Apellido' },
            {field: 'nombre', header: 'Nombre' },
            { field: 'dni', header: 'DNI' },
            { field: 'fecha_nacimiento', header: 'Fecha Nacimiento' },
            { field: 'domicilio', header: 'Domicilio' },
            { field: 'telefono_cel', header: 'Telefono celular' },
            
         ];

         
    this.columns = [
        {title: "Nombre", dataKey: "nombre"},
        {title: "Apellido", dataKey: "apellido"}, 
        {title: "DNI", dataKey: "dni"},
        {title: "Fecha nacimiento", dataKey: "fecha_nacimiento"},
        {title: "Domicilio", dataKey: "domicilio"},
        {title: "Celular", dataKey: "telefono_cel"}
    ];
 
        }

  ngOnInit() {

    this.updateDataForm = new FormGroup({
        'nombre': new FormControl("", Validators.required),
        'apellido': new FormControl("", Validators.required),
        'apellido_m': new FormControl("Sin otro apellido", Validators.required),
         'dni': new FormControl("", [ Validators.required, Validators.maxLength(8)]),
        'domicilio': new FormControl("San Juan", Validators.required),
        'sexo': new FormControl("", Validators.required),
        'email': new FormControl("sin_correo@delavision.com.ar", [Validators.required, Validators.email]),
        'fecha_nacimiento': new FormControl("", Validators.required),
        'ciudad': new FormControl("San Juan", Validators.required),
        'telefono_cel': new FormControl("0", Validators.required),
        'telefono_fijo': new FormControl("0", Validators.required)

        /*const numberPatern = '^[0-9.,]+$';
        unitPrice: ['', [Validators.required, Validators.pattern(numberPatern)]]  -> validador de numeros*/

    });
    
    this.loadList();



  }


  /** CARGA LA LISTA **/

  loadList(){
        this.es = calendarioIdioma;
        this.loading = true;
        try {
            this.pacienteService.getItems()    
            .subscribe(resp => {
            this.elementos = resp;
                console.log(this.elementos);    
                this.loading = false;
            },
            error => { // error path
                console.log(error.message);
                console.log(error.status);
                this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message);
             });    
        } catch (error) {
        this.throwAlert("error","Error al cargar los registros",error);
        }  
  }
 
   showDialogToAdd() {
        this.newPopItem = true;
        this.updateDataForm.reset();
        this.displayDialog = true;
    }

   onRowSelect(event) {
        
        this.newPopItem = false;
        this.popItem = event.data;
        this._id = event.data.id;
        console.log(this.popItem);
        this.popItem.fecha_nacimiento = new  Date (this.popItem.fecha_nacimiento);
        this.updateDataForm.patchValue(this.popItem);
        this.displayDialog = true;
    }

    actualizarDatos(){

            this.popItem.fecha_nacimiento =   new  Date (formatDate(this.popItem.fecha_nacimiento,'yyyy-MM-dd hh:mm:ss','es-Ar'));
            console.log( this.updateDataForm.value);
            try { 
                this.pacienteService.putItem(this.updateDataForm.value, this.popItem.id)
                .subscribe(resp => {
                this.elemento = resp;
                console.log(this.elemento);    
                this.loading = false;
                this.throwAlert("success","Los datos fueron modificados","");
                this.displayDialog = false;
                this.loadList();
                },
                
                error => { // error path
                    console.log(error.message);
                    console.log(error.status);
                    this.throwAlert("error","Error: "+error.status+"  Error al insertar los registros",error.message);
				 });    
            } catch (error) {
                this.throwAlert("error","Error al cargar los registros",error);
            }
    }

    nuevoItem(){ 
       
            this.popItem =  this.updateDataForm.value;
            this.popItem.fecha_nacimiento =   new  Date (formatDate(this.popItem.fecha_nacimiento,'yyyy-MM-dd hh:mm:ss','es-Ar'));
            try { 
                this.pacienteService.postItem(this.updateDataForm.value)
                .subscribe(resp => {
                this.elemento = resp;
                console.log(this.elemento);    
                this.loading = false;
                this.throwAlert("success","Se creo el registro con éxito","");
                this.displayDialog = false;
                this.loadList();
                },
                
                error => { // error path
                    console.log(error.message);
                    console.log(error.status);
                    this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message);
				 });    
            } catch (error) {
                this.throwAlert("error","Error al cargar los registros",error);
            }
            
    }

    /** ACCIONES */

    imprimirTodos(){

    }

    imprimirRenglon(){
        this.throwAlert("success","Se creo el registro con éxito","");
    }

    throwAlert(estado:string, mensaje:string, motivo:string){
        if(estado== "success"){
            swal({
                type: 'success',
                title: 'Exito',
                text: mensaje
              })
        }
        if(estado== "error"){
            swal({
                type: 'error',
                title: 'Oops...',
                text: mensaje,
                footer: motivo
              })
        }
    }

    
     

    generarPdf(){
        var a:any;
        var doc = new jsPDF('l', 'pt');
        
        doc.autoTable(this.columns, this.elementos,
            {
                margin: {horizontal: 7},
                bodyStyles: {valign: 'top'},
                styles: {overflow: 'linebreak', columnWidth: 'wrap'},
                columnStyles: {text: {columnWidth: 'auto'}}
            }
            );
        doc.save("table.pdf");    
    }

   
}
