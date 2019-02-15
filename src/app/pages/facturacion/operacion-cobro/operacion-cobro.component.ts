import { CirugiaCombinadaDatos } from './../../../models/cirugia-combinada-datos';
import { PopupCombinadaComponent } from './popup-combinada/popup-combinada.component';


import { PracticaService } from './../../../services/practica.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef, MessageService } from 'primeng/api';
import { calendarioIdioma } from '../../../config/config';
import swal from 'sweetalert2';
import { DialogService } from 'primeng/components/common/api';
import { Convenio } from './../../../models/convenio.model';
import { GrupoMedico } from './../../../models/grupo-medico.model';
import { PopupGrupoMedicoComponent } from './../../../shared/components/popups/popup-grupo-medico/popup-grupo-medico.component';
import { PopupPacienteComponent } from './../../../shared/components/popups/popup-paciente/popup-paciente.component';
import { PopupAgendaComponent } from './../../../shared/components/popups/popup-agenda/popup-agenda.component';
import { PopupConvenioComponent } from './../../../shared/components/popups/popup-convenio/popup-convenio.component';
import { Agenda } from './../../../models/agenda.model';
import { Practica } from './../../../models/practica.model';
import { Paciente } from '../../../models/paciente.model';
import { CirugiaCombinadaRegistro } from '../../../models/cirugia-combinada-registro';



@Component({
  selector: 'app-operacion-cobro',
  templateUrl: './operacion-cobro.component.html',
  styleUrls: ['./operacion-cobro.component.css'],
  providers: [MessageService,DialogService]
})
export class OperacionCobroComponent implements OnInit {


  cols: any[];
  tipoPago: any[];
  newPopItem: boolean;
  es:any;
  // LOADING
  loading: boolean;
  elemento:Practica = null;
  elementos:Practica[] = null;
  popItemAgenda:Agenda ;
  popItemPaciente:Paciente;
  popItemGrupoMedico:GrupoMedico;
  popItemConvenio:Convenio;
  popItemConvenioCoseguro:Convenio;
  popItemCirugiaCombinadaDatos:CirugiaCombinadaDatos;
  tmpCirugiaCombinadaRegistros:CirugiaCombinadaRegistro[] = [];;
  formFormaDepago:FormGroup;
  formAgenda: FormGroup;
  formMedico: FormGroup;
  formPaciente: FormGroup;
  formDatosObraSocial: FormGroup;

  formObraSocial: FormGroup;
  tmpdate:Date;

  valTotalFinal:number = 0;
  valvalor:number;
  valvalorCoseguro:number;
  valCantidad:number;

  newItem:boolean;
  constructor(private miServico:PracticaService,private messageService: MessageService ,public dialogService: DialogService ) { }

  ngOnInit() {
    
    //INICIALIZAR OBJETOS
    this.tmpdate = new Date();
    this.popItemAgenda = new Agenda('',this.tmpdate,this.tmpdate,this.tmpdate,'','','','','','','','','','','','','','',this.tmpdate,'','');
    this.popItemConvenio =  new Convenio('',0,0,'','','','',0,'','','','','');

    this.tipoPago = [
    /*  {label:'Transferencia', value:null},
      {label:'Transferencia bancaria', value:{id:1, name: 'Transferencia bancaria', code: 'T'}},
      {label:'Contado', value:{id:2, name: 'Contado', code: 'C'}},
      {label:'Contado', value:{id:3, name: 'Contado', code: 'T'}},*/
      {name: 'Contado', code: 'CO'},
      {name: 'Tarjeta', code: 'TA'},
      {name: 'Transferencia', code: 'TB'},
  
     
  ];

    this.formAgenda = new FormGroup({
      'agenda': new FormControl("", Validators.required)
  });

    this.formMedico = new FormGroup({
      'apellido': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'cirugia_grupo_nombre': new FormControl("", Validators.required)
      
  });

    this.formPaciente = new FormGroup({
      'paciente_nombre': new FormControl("", Validators.required),
      'paciente_apellido': new FormControl("", Validators.required),
      'paciente_dni': new FormControl("", Validators.required),
      'paciente_fecha_nacimiento': new FormControl("", Validators.required)
  });

  this.formFormaDepago = new FormGroup({
    'forma_pago_obra_social': new FormControl("", Validators.required),
    'forma_pago_coseguro': new FormControl("", Validators.required),
});

  this.formDatosObraSocial = new FormGroup({
    'codigo': new FormControl("", Validators.required),
    'bono': new FormControl("", Validators.required),
    'barra': new FormControl("", Validators.required)
  }); 

  this.formObraSocial = new FormGroup({
    'obra_social_nombre': new FormControl("", Validators.required),
    'coseguro_nombre': new FormControl("Sin coseguro"),
    'valor': new FormControl(0),
    'coseguro_valor': new FormControl(0),
    'pmo_descripcion': new FormControl(""),
    'codigo': new FormControl(""),
    'complejidad': new FormControl(""),
    'total_practica_coseguro': new FormControl(0),
    'total_practica': new FormControl(0), 
  });

  



 this.loadList();
  }

  loadList(){

    this.es = calendarioIdioma;
    this.loading = true;
    try {
        this.miServico.getItemByAgendaId('1')  
        .subscribe(resp => {
        this.elemento = resp;
            console.log(this.elemento);    
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


  buscarAgenda(){
    let data:any; 
    const ref = this.dialogService.open(PopupAgendaComponent, {
    data,
     header: 'Buscar registro en agenda', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupAgendaComponent:Agenda) => {
        if (PopupAgendaComponent) {
          console.log(PopupAgendaComponent.agenda_estado);    
          this.popItemAgenda = PopupAgendaComponent;
          this.formPaciente.patchValue(this.popItemAgenda);
        }
    });
  }

  buscarGrupoMedico(){
    let data:any; 
    const ref = this.dialogService.open(PopupGrupoMedicoComponent, {
    data,
     header: 'Buscar médico', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupGrupoMedicoComponent:GrupoMedico) => {
        if (PopupGrupoMedicoComponent) {
          console.log(PopupGrupoMedicoComponent.nombre);    
          this.popItemGrupoMedico = PopupGrupoMedicoComponent;
          this.formMedico.patchValue(this.popItemGrupoMedico);
        }
    });
  }

  buscarPaciente(){
    let data:any; 
    const ref = this.dialogService.open(PopupPacienteComponent, {
    data,
     header: 'Buscar paciente', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupPacienteComponent:Paciente) => {
        if (PopupPacienteComponent) {
          console.log(PopupPacienteComponent.nombre);    
          //this.popItemPaciente = PopupPacienteComponent;
         this.popItemAgenda.paciente_nombre = PopupPacienteComponent.nombre;
         this.popItemAgenda.paciente_apellido = PopupPacienteComponent.apellido;
         this.popItemAgenda.paciente_dni = PopupPacienteComponent.dni;
         this.popItemAgenda.paciente_fecha_nacimiento = PopupPacienteComponent.fecha_nacimiento;
         this.popItemAgenda.paciente_domicilio = PopupPacienteComponent.domicilio;
          this.formPaciente.patchValue(this.popItemAgenda);
        }
    });
  }

  buscarObraSocial(){
    let data:any; 
    const ref = this.dialogService.open(PopupConvenioComponent, {
    data,
     header: 'Buscar Practica', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupConvenioComponent:Convenio) => {
        if (PopupConvenioComponent) {
          console.log(PopupConvenioComponent);    
          this.popItemConvenio = PopupConvenioComponent;
          
          this.formObraSocial.patchValue(this.popItemConvenio);
          this.sumar(); // ACTUALIZO LOS VALORES EN LOS COMPONENTES PARA MOSTRAR
        }
    });

  }

  buscarObraSocialCoseguro(){
    let data:any; 
    const ref = this.dialogService.open(PopupConvenioComponent, {
    data,
     header: 'Buscar coseguro', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupConvenioComponent:Convenio) => {
        if (PopupConvenioComponent) {
          console.log(PopupConvenioComponent);    
        //  this.popItemConvenioCoseguro = PopupConvenioComponent;
          this.popItemConvenio.coseguro_id = PopupConvenioComponent.obra_social_id;
          this.popItemConvenio.coseguro_nombre = PopupConvenioComponent.obra_social_nombre;
          this.popItemConvenio.coseguro_valor = PopupConvenioComponent.valor;

          this.formObraSocial.patchValue(this.popItemConvenio);
          this.sumar(); // ACTUALIZO LOS VALORES EN LOS COMPONENTES PARA MOSTRAR
        }
    });
  }

  buscarCirugiaCombinada(){
    let data:any; 
    const ref = this.dialogService.open(PopupCombinadaComponent, {
      data: {
        cirugiaCombinadaRegistro: this.tmpCirugiaCombinadaRegistros
    },
     header: 'Buscar combinación', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupCombinadaComponent:CirugiaCombinadaRegistro) => {
        if (PopupCombinadaComponent) {
          console.log(PopupCombinadaComponent);   
          data = PopupCombinadaComponent;
          this.tmpCirugiaCombinadaRegistros.push(PopupCombinadaComponent);
          console.log(this.tmpCirugiaCombinadaRegistros); 
     //     this.CirugiaCombinadaRegistro = PopupCombinadaComponent;
          //this.formPaciente.patchValue(this.popItemCirugiaCombinadaDatos);
        }
    });
  }



  sumar(){
   this.valvalor = this.formObraSocial.value.valor ;
    this.valvalorCoseguro =  this.formObraSocial.value.coseguro_valor;
  //  this.valTotalFinal = this.valvalor  + this.valvalorCoseguro;
  this.valTotalFinal = +this.valvalor + +this.valvalorCoseguro ;
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

confirmarOperacion(){

  swal({
    title: 'Va a generar una operacion de cobro',
    text: "Desea proseguir",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, guardar!'
  }).then((result) => {
    if (result.value) {
      swal(
        'Guardado!',
        'La operación se a guardado con exito.',
        'success'
      )
    }
  })
}

}


