import { PacienteService } from './../../../../services/paciente.service';

import { Component, OnInit, PipeTransform ,EventEmitter, Output} from '@angular/core';

import { Paciente } from './../../../../models/paciente.model';
import { calendarioIdioma } from '../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-popup-paciente',
  templateUrl: './popup-paciente.component.html',
  styleUrls: ['./popup-paciente.component.css']
})
export class PopupPacienteComponent implements OnInit {

  
  cols: any[];
  selectedItem: Paciente;
  displayDialog: boolean;
  popItem:Paciente;
  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  elemento:Paciente = null;
  elementos:Paciente[] = null;

  constructor(private miServico:PacienteService, public ref: DynamicDialogRef, public config: DynamicDialogConfig ) {
   console.log("loading");
    this.cols = [
      { field: 'apellido', header: 'Apellido' },
      {field: 'nombre', header: 'Nombre' },
      { field: 'dni', header: 'DNI' },
      { field: 'fecha_nacimiento', header: 'Fecha Nacimiento' },
      { field: 'domicilio', header: 'Domicilio' },
      { field: 'telefono_cel', header: 'Telefono celular' },
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
        },
        error => { // error path
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message);
         });    
    } catch (error) {
          this.throwAlert("error","Error al cargar los registros",error);
    }  
}


onRowSelect(event) {  
    this.selectedItem = event.data;   
    this.ref.close(this.selectedItem);
}


/** ACCIONES */


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

