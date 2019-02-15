

import { Component, OnInit, PipeTransform } from '@angular/core';

import { GrupoMedicoService } from './../../../../services/grupo-medico.service';
import { GrupoMedico } from './../../../../models/grupo-medico.model';
import { calendarioIdioma } from '../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-grupo-medico',
  templateUrl: './grupo-medico.component.html',
  styleUrls: ['./grupo-medico.component.css']
})
export class GrupoMedicoComponent implements OnInit {

  cols: any[];
  selectedItem: GrupoMedico;
  displayDialog: boolean;
  popItem:GrupoMedico;
  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  updateDataForm: FormGroup;
  elemento:GrupoMedico = null;
  elementos:GrupoMedico[] = null;
  _id:number = 0;
  columns: any[];
  
    constructor(private miServico:GrupoMedicoService ) {
  
          this.cols = [
          { field: 'cirugia_grupo_nombre', header: 'Grupo' },
          {field: 'codigo', header: 'Codigo' },
          { field: 'apellido', header: 'Apellido' },
          { field: 'nombre', header: 'Nombre' },
          { field: 'porcentaje_distribucion', header: 'Porcentaje' },
           ];

          }
  
    ngOnInit() {
  
      this.updateDataForm = new FormGroup({
          'cirugia_grupo_nombre': new FormControl("", Validators.required),
          'codigo': new FormControl("", Validators.required),
          'apellido': new FormControl("", Validators.required),
          'nombre': new FormControl("", Validators.required),
          'porcentaje_distribucion': new FormControl("", Validators.required),
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
  