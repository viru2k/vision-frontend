
import { Component, OnInit, PipeTransform } from '@angular/core';

import { GrupoService } from './../../../../services/grupo.service';
import {Grupo} from '../../../../models/grupo.model';
import { calendarioIdioma } from '../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  cols: any[];
  selectedItem: Grupo;
  displayDialog: boolean;
  popItem:Grupo;
  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  updateDataForm: FormGroup;
  elemento:Grupo = null;
  elementos:Grupo[] = null;
  _id:number = 0;
  columns: any[];
  
    constructor(private miServico:GrupoService ) {
  
          this.cols = [
          { field: 'nombre', header: 'Grupo' },
            
           ];

           this.columns = [
            {title: "Codigo", dataKey: "codigo"},
            {title: "Descripción", dataKey: "descripcion"}, 
            {title: "Complejidad", dataKey: "complejidad"}
        ];
          }
  
    ngOnInit() {
  
      this.updateDataForm = new FormGroup({
          'nombre': new FormControl("", Validators.required),
         
      });
      
      this.loadList();
    }
  
  
    /** CARGA LA LISTA **/
  
    loadList(){
          this.es = calendarioIdioma;
          this.loading = true;
          try {
              this.miServico.getItems()    
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
          this.updateDataForm.patchValue(this.popItem);
          this.displayDialog = true;
      }
  
      actualizarDatos(){
                
              console.log( this.updateDataForm.value);
              try { 
                  this.miServico.putItem(this.updateDataForm.value, this.popItem.id)
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
              try { 
                  this.miServico.postItem(this.updateDataForm.value)
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

  }
  
