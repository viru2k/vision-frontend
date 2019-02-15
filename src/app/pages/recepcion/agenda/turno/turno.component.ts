import { calendarioIdioma } from './../../../../config/config';
import { AgendaService } from './../../../../services/agenda.service';
import { ObraSocial } from './../../../../models/obra-social.model';
import { Medico } from './../../../../models/medico.model';
import { Paciente } from './../../../../models/paciente.model';
import { Agenda } from './../../../../models/agenda.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


import swal from 'sweetalert2';



@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  
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
      
        {field: 'paciente_nombre', header: 'Nombre' },
        { field: 'paciente_apellido', header: 'Apellido' },
      

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
