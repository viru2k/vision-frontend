import { Agenda } from './../../../../models/agenda.model';
import { AgendaService } from './../../../../services/agenda.service';
import { Component, OnInit} from '@angular/core';
import { calendarioIdioma } from '../../../../config/config';
import swal from 'sweetalert2';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';


@Component({
  selector: 'app-popup-agenda',
  templateUrl: './popup-agenda.component.html',
  styleUrls: ['./popup-agenda.component.css']
})
export class PopupAgendaComponent implements OnInit {

  
  cols: any[];
  selectedItem: Agenda;
  es:any;
  // LOADING
  loading: boolean;
  elemento:Agenda = null;
  elementos:Agenda[] = null;


  constructor(private miServico:AgendaService, public ref: DynamicDialogRef, public config: DynamicDialogConfig ) {
    this.cols = [
        { field: 'fecha_turno', header: 'Turno' },
        { field: 'grupo_nombre', header: 'Medico' },
        { field: 'agenda_estado', header: 'Estado' },
        {field: 'paciente_nombre', header: 'Nombre' },
        { field: 'paciente_apellido', header: 'Apellido' },
        { field: 'paciente_dni', header: 'Nombre' },

     ];
    } 

ngOnInit() {

this.loadList();
}



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


onRowSelect(event) {  
    this.selectedItem = event.data;
    console.log(this.selectedItem);
    this.ref.close(this.selectedItem);
}


/** ACCIONES */

colorRow(estado:string){
 
    if(estado == 'ATENDIDO') {  
        return {'es-atendido'  :'null' };
    }
    
    if(estado == 'PENDIENTE') {  
        return {'es-pendiente'  :'null' };
    }

    if(estado == 'AUSENTE') {  
        return {'es-ausente'  :'null' };
    }
    
    if(estado == 'INGRESADO') {  
        return {'es-ingresado'  :'null' };
    }

    if(estado == 'ESPERA') {  
        return {'es-espera'  :'null' };
    }

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

