
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Medico } from './../../models/medico.model';
import { MedicoService } from './../../services/medico.service';
import { calendarioIdioma } from '../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable'; 


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  
cols: any[];
selectedItem: Medico;
displayDialog: boolean;
popItem:Medico;
newPopItem: boolean;
es:any;
// LOADING
loading: boolean;
updateDataForm: FormGroup;
elemento:Medico = null;
elementos:Medico[] = null;
_id:number = 0;

columns: any[];
rows: any[];

  constructor(private medicoService:MedicoService ) {

        this.cols = [
            { field: 'apellido', header: 'Apellido' },
            {field: 'nombre', header: 'Nombre' },            
            { field: 'domicilio', header: 'Domicilio' },
            { field: 'telefono', header: 'Telefono' },
            { field: 'telefono_cel', header: 'Telefono celular' },
            { field: 'email', header: 'E-mail' },
            { field: 'email_laboral', header: 'E-mail laboral' },
            { field: 'fecha_matricula', header: 'Fecha Matricual' },
            { field: 'cuit', header: 'CUIT' },
            { field: 'ing_brutos', header: 'Ing. brutos' },
            
         ];

         
    this.columns = [
        {title: "Nombre", dataKey: "nombre"},
        {title: "Apellido", dataKey: "apellido"}, 
        {title: "Domicilio", dataKey: "domicilio"},
        {title: "Celular", dataKey: "telefono_cel"},
        {title: "Fecha Matricual", dataKey: "fecha_matricula"},
        {title: "CUIT", dataKey: "cuit"},
        {title: "Ing. brutos", dataKey: "ing_brutos"}
    ];
 
        }

  ngOnInit() {


    this.updateDataForm = new FormGroup({
        'nombre': new FormControl("", Validators.required),
        'apellido': new FormControl("", Validators.required),
        'domicilio': new FormControl("Sin domicilio", Validators.required),
         'fecha_matricula': new FormControl("",Validators.required),
        'telefono_cel': new FormControl("1", Validators.required),
        'email': new FormControl("sin_correo@delavision.com.ar", [Validators.required, Validators.email]),
        'email_laboral': new FormControl("sin_correo@delavision.com.ar", [Validators.required, Validators.email]),
        'cuit': new FormControl("0", Validators.required),
        'ing_brutos': new FormControl("0", Validators.required)
    });
    
    this.loadList();



  }


  /** CARGA LA LISTA **/

  loadList(){
        this.es = calendarioIdioma;
        this.loading = true;
        try {
            this.medicoService.getItems()    
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
        this.popItem.fecha_matricula = new  Date (this.popItem.fecha_matricula);
        this.updateDataForm.patchValue(this.popItem);
        this.displayDialog = true;
    }

    actualizarDatos(){

            this.popItem.fecha_matricula =   new  Date (formatDate(this.popItem.fecha_matricula,'yyyy-MM-dd hh:mm:ss','es-Ar'));
            console.log( this.updateDataForm.value);
            try { 
                this.medicoService.putItem(this.updateDataForm.value, this.popItem.id)
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
            this.popItem.fecha_matricula =   new  Date (formatDate(this.popItem.fecha_matricula,'yyyy-MM-dd hh:mm:ss','es-Ar'));
            try { 
                this.medicoService.postItem(this.updateDataForm.value)
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
                bodyStyles: {valign: 'top'}
            }
            );
            doc.output('dataurlnewwindow');
        //doc.save("table.pdf");    
    }

   
}


