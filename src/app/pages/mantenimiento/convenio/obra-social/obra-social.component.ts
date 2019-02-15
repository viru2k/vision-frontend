import { Component, OnInit, PipeTransform } from '@angular/core';

import { ObraSocialService } from './../../../../services/obra-social.service';
import {ObraSocial} from '../../../../models/obra-social.model';
import { calendarioIdioma } from '../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';
import { EditObraSocialComponent } from '../../convenio/obra-social/edit-obra-social/edit-obra-social.component';



@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.css'],
  providers: [MessageService,DialogService]
})
export class ObraSocialComponent implements OnInit {

  cols: any[];
  selectedItem: ObraSocial;
  displayDialog: boolean;
  popItem:ObraSocial;
  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  updateDataForm: FormGroup;
  elemento:ObraSocial = null;
  elementos:ObraSocial[] = null;
  resultSave:boolean;
  _id:number = 0;

  constructor(private miServico:ObraSocialService,private messageService: MessageService ,public dialogService: DialogService ) {
  
    this.cols = [
    { field: 'nombre', header: 'Nombre' },
        {field: 'descripcion', header: 'Descripcion' },
        { field: 'es_habilitada', header: 'Habilitada' },
        { field: 'entidad_nombre', header: 'Entidad factura' },
     ];
    }

ngOnInit() {


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
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
}

showDialogToAdd() {
    this.popItem = new ObraSocial("","","","","","");
      let data:any; 
      const ref = this.dialogService.open(EditObraSocialComponent, {
      data,
       header: 'Crear /Modificar registro', 
       width: '70%'
   });

   ref.onClose.subscribe((EditObraSocialComponent:ObraSocial) => {
       if (EditObraSocialComponent) {
       console.log(EditObraSocialComponent);    
            this.popItem = EditObraSocialComponent;
       if( this.nuevoItem()){
          this.throwAlert("success","Se creo el registro con éxito","","");
         } 
       }
   });

}



showDialogToUpdate(event) {
    console.log(event);
    this.popItem = new ObraSocial(event.data.id,event.data.nombre, event.data.descripcion, event.data.es_habilitada,event.data.entidad_id,event.data.entidad_nombre);
    let data:any; 
    data = this.popItem;
    const ref = this.dialogService.open(EditObraSocialComponent, {
     data,
      header: 'Crear /Modificar registro', 
      width: '70%'
  });

  ref.onClose.subscribe((EditObraSocialComponent:ObraSocial) => {
      if (EditObraSocialComponent) {
      console.log(EditObraSocialComponent);
      this.popItem = EditObraSocialComponent;
      this.popItem.id = EditObraSocialComponent.id;
     if( this.actualizarDatos()){
      this.throwAlert("success","Se modifico el registro con éxito","","");
     }
      }
  });
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
          
    try { 
        console.log(this.popItem);
      //  console.log(this.popItem.id);
        this.miServico.putItem(this.popItem, this.popItem.id)
        .subscribe(resp => {
        this.elemento = resp;
        console.log(this.elemento);    
        this.loading = false;
        this.loadList();
        this.resultSave = true;
        },   
        error => { // error path
            console.log(error.message);
       //     console.log(error.status);
            this.throwAlert("error","Error: "+error.status,"  Error al insertar los registros",error.status);
            this.resultSave = false;
 });    
    } catch (error) {
        this.throwAlert("error","Error al cargar los registros",error,error.status);
    }
    return this.resultSave;
}

nuevoItem(){ 
   
    try { 
        this.miServico.postItem(this.popItem)
        .subscribe(resp => {
        this.elemento = resp;
        console.log(this.elemento);    
        this.loading = false;                  
        this.loadList();
        this.resultSave = true;
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status,  "Error al cargar los registros",error.status);
            this.resultSave = false;
          });    
    } catch (error) {
        this.throwAlert("error","Error al cargar los registros",error,error.status);
    }
    return this.resultSave;
        
}

/** ACCIONES */

imprimirTodos(){

}





throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
    let tipoerror:string;

    if(estado== "success"){
        swal({
            type: 'success',
            title: 'Exito',
            text: mensaje
          })
    }
    if(estado== "error"){
      if(errorNumero =="422"){
          mensaje ="Los datos que esta tratando de guardar son iguales a los que ya poseia";
      }
      if(errorNumero =="400 "){
          mensaje ="Bad Request ";
      }
      if(errorNumero =="404"){
          mensaje ="No encontrado ";
      }
      if(errorNumero =="401"){
          mensaje ="Sin autorización";
      }
      if(errorNumero =="403"){
          mensaje =" Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ";
      }
      if(errorNumero =="405"){
          mensaje ="Método no permitido";
      }
      if(errorNumero =="500"){
          mensaje ="Error interno en el servidor";
      }
      if(errorNumero =="503"){
          mensaje ="Servidor no disponible";
      }
      if(errorNumero =="502"){
          mensaje ="Bad gateway";
      }
      
        swal({   
            type: 'error',
            title: 'Oops...',
            text: mensaje,
            footer: motivo
          })
    }
}
}

