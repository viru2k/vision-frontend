import { AgendaService } from './../../../services/agenda.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Paciente } from './../../../models/paciente.model';
import { calendarioIdioma } from '../../../config/config';
import { Agenda } from '../../../models/agenda.model';

import swal from 'sweetalert2';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    cols: any[];
  selectedItem: Agenda;
  es:any;
  // LOADING
  loading: boolean;
  elemento:Agenda = null;
  elementos:Agenda[] = null;
  cities: any[];

  pacienteForm: FormGroup;
  constructor(private miServico:AgendaService ) {
    this.cols = [
        { field: 'fecha_turno', header: 'Turno',  width: '15%' },
        { field: 'grupo_nombre', header: 'Medico',  width: '17%' },
        { field: 'agenda_estado', header: 'Estado',  width: '10%' },
        {field: 'paciente_nombre', header: 'Nombre',  width: '20%' },
        { field: 'paciente_apellido', header: 'Apellido',  width: '20%' },
        { field: 'paciente_dni', header: 'Dni',  width: '10%' },
        { field: 'accion', header: 'Acción',  width: '8%' },
     ];
    
    

    this.cities = [
      {name: '17:00 a 17:15', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  
 
  }

  ngOnInit() {
    this.es = calendarioIdioma;
    this.pacienteForm = new FormGroup({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'dni': new FormControl("", Validators.required),
     
  });
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





