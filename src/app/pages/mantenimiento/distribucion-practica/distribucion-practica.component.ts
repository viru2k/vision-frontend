
import { Component, OnInit, PipeTransform } from '@angular/core';

import { ObraSocialService } from './../../../services/obra-social.service';
import {ObraSocial} from '../../../models/obra-social.model';
import { calendarioIdioma } from '../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  formatDate } from '@angular/common';
import swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';
import { EditObraSocialComponent } from '../convenio/obra-social/edit-obra-social/edit-obra-social.component';
import { Convenio } from '../../../models/convenio.model';
import { ConvenioService } from '../../../services/convenio.service';
import { PopupCombinadaComponent } from '../../facturacion/operacion-cobro/popup-combinada/popup-combinada.component';


@Component({
  selector: 'app-distribucion-practica',
  templateUrl: './distribucion-practica.component.html',
  styleUrls: ['./distribucion-practica.component.css'],
  providers: [MessageService,DialogService]
})
export class DistribucionPracticaComponent implements OnInit {

  cols: any[];

  displayDialog: boolean;

  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  updateDataForm: FormGroup;
  elemento:Convenio = null;
  elementos:Convenio[] = null;
  resultSave:boolean;
  _id:number = 0;

  constructor(private miServico:ConvenioService,private messageService: MessageService ,public dialogService: DialogService ) {
  
    this.cols = [
    { field: 'obra_social_nombre', header: 'Obra social' },
        {field: 'codigo', header: 'Codigo' },
        { field: 'pmo_descripcion', header: 'Descripción' },
        { field: 'complejidad', header: 'Nivel' }, 
        { field: 'valor', header: 'Valor' }, 
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

showDialog(event) {    
     console.log(event);
      const ref = this.dialogService.open(PopupCombinadaComponent, {
        data: {
            id: event.data.id
        },
       header: 'Crear /Modificar registro', 
       width: '70%'
   });

 

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
