import { PopupCombinadaItemComponent } from './popup-combinada-item/popup-combinada-item.component';
import { CirugiaCombinadaRegistro } from '../../../../models/cirugia-combinada-registro';

import { AgendaService } from './../../../../services/agenda.service';
import { Component, OnInit} from '@angular/core';
import { calendarioIdioma } from '../../../../config/config';

import { PracticaDistribucion } from '../../../../models/practica-distribucion.model';
import { DynamicDialogConfig, DynamicDialogRef, DialogService, MessageService } from 'primeng/api';
import { CirugiaCombinadaDatos } from '../../../../models/cirugia-combinada-datos';
import { PracticaDistribucionService } from '../../../../services/practica-distribucion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-popup-combinada',
  templateUrl: './popup-combinada.component.html',
  styleUrls: ['./popup-combinada.component.css'],
  providers: [MessageService,DialogService]
})
export class PopupCombinadaComponent implements OnInit {

  totalFacturado:number =  0;
  cols: any[];
  es:any;
  popItem:PracticaDistribucion;
  resultSave:boolean;
  // LOADING
  loading: boolean = false;
  elemento:PracticaDistribucion = null;
  elementos:PracticaDistribucion[] = [];
  elementoRegistro:CirugiaCombinadaRegistro = null;
  elementoDato:CirugiaCombinadaDatos = null;
  elementosDato:CirugiaCombinadaDatos[] = null;
  _id:string;
  constructor(private miServico:PracticaDistribucionService, public ref: DynamicDialogRef,private messageService: MessageService ,public dialogService: DialogService, public config: DynamicDialogConfig) { 

    this.cols = [
      { field: 'obra_social_nombre', header: 'Obra social' },
      { field: 'codigo', header: 'Codigo' },
      { field: 'pmo_descripcion', header: 'Descripcion' },
      {field: 'porcentaje', header: '%' },
      { field: 'total', header: 'Total' },      

   ];
  }

  ngOnInit() {
    console.log(this.config.data);
    this._id = this.config.data;
    this.loadList();
  }

  agregarRegistro(){
    let data:any; 
    const ref = this.dialogService.open(PopupCombinadaItemComponent, {
    data,
     header: 'Buscar practica a combinar', 
     width: '98%',
     height: '90%'
    });
    ref.onClose.subscribe((PopupCombinadaItemComponent:CirugiaCombinadaRegistro) => {
      if (PopupCombinadaItemComponent) {
        this.elementoRegistro = PopupCombinadaItemComponent;
        console.log(this.elementoRegistro);
     //   this.elementos.push(this.elementoRegistro);
        this.calcularTotal();
       
      }
  });
    
  }

  calcularTotal(){
    this.totalFacturado = this.totalFacturado + this.elemento.practica_distribucion_total;

  }

  guardarRegistros(){
    this.ref.close(this.elementos);
  }


  loadList(){
    this.es = calendarioIdioma;
    this.loading = true;
    console.log(this._id);
    try {
        this.miServico.getItem(this._id)    
        .subscribe(resp => {
       // this.elementos = resp;                 
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
}

 actualizarLista(){
     this.loadList();
 }

  actualizarDatos(){
    
          try { 
              this.miServico.putItem(this.popItem, this.popItem.id)
              .subscribe(resp => {
              this.elemento = resp;
              console.log(this.elemento);    
              this.loading = false;
            //  this.loadList();
              this.resultSave = true;
              },   
              error => { // error path
                  console.log(error.message);
                  console.log(error.status);
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


  throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
    let tipoerror:string;

    if(estado== "success"){
        swal({
            type: 'success',
            title: 'Exito',
            text: mensaje
          })
    }

    if(errorNumero =="422"){
      mensaje ="Los datos que esta tratando de guardar son iguales a los que ya poseia";
      swal({   
          type: 'warning',
          title: 'Atención..',
          text: mensaje,
          footer: motivo
        })
  }
    
    if((estado== "error")&&(errorNumero!="422")){
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
