import { calendarioIdioma,logo_clinica } from './../../../../config/config';
import { Paciente } from './../../../../models/paciente.model';
import { AgendaTurno } from './../../../../models/agenda-turno.model';
import { AgendaService } from './../../../../services/agenda.service';
import { PopupMedicoComponent } from './../../../../shared/components/popups/popup-medico/popup-medico.component';
import { Agenda } from './../../../../models/agenda.model';
import { DialogService, MessageService } from 'primeng/api';
import { MedicoObraSocial } from 'src/app/models/medico-obrasocial.model';
import { formatDate, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import swal from 'sweetalert2';
import {OverlayPanelModule, OverlayPanel} from 'primeng/overlaypanel';
import { ActivatedRoute, Route, Router } from '@angular/router';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
import { Document } from 'src/app/models/document';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { DocumentService } from './../../../../services/document-service.service';
import { PopupOperacionCobroDetalleComponent } from '../../../../shared/components/popups/popup-operacion-cobro-detalle/popup-operacion-cobro-detalle.component';
import { Liquidacion } from '../../../../models/liquidacion.model';

@Component({
  selector: 'app-agenda-atencion-medico',
  templateUrl: './agenda-atencion-medico.component.html',
  styleUrls: ['./agenda-atencion-medico.component.css'],
  providers: [MessageService,DialogService,DatePipe]
})
export class AgendaAtencionMedicoComponent implements OnInit {

  cols: any[];
  selectedItem: Agenda;
  es:any;
  display:boolean;
  observacion:string;
  // LOADING
  DateForm:FormGroup;
  loading: boolean;
  elemento:AgendaTurno = null;
  elementos:Agenda[] = null;
  elementosFiltrados:AgendaTurno[] = [];
  elementosFiltradosImpresion:AgendaTurno[] = [];
  fechaHoy:Date;
  _fechaHoy:string;
  fecha:Date;
  selecteditems:AgendaTurno[] = [];
  usuario_id:string;
  busqueda: any[];
  pacienteForm: FormGroup;
  colsAgenda:any;
  popItemAgenda:AgendaTurno;
  elementosTurnos:AgendaTurno[] = null;
  popItemMedicoObraSocial:MedicoObraSocial;
  agendaTurno:AgendaTurno[] = [];
  agendaTurnos:AgendaTurno[] =[];
  selectedagendaTurno:AgendaTurno= null;
  columns:any;
  userData:any;
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;
  document: Document;
  motivo:string;

  constructor(private documentService: DocumentService, private miServico:AgendaService, private messageService: MessageService ,public dialogService: DialogService,  private route: ActivatedRoute,     private router: Router ) {
   
    this.cols = [
        {field: 'operacion_cobro_id', header: 'OC', width: '5%' }, 
        {field: 'paciente_apellido', header: 'Apellido', width: '8%' }, 
        {field: 'paciente_nombre', header: 'Nombre', width: '8%' },         
        {field: 'paciente_obra_social_nombre', header: 'Obra social', width: '16%' },
        {field: 'hora_desde', header: 'Turno', width: '10%' },
        {field: 'presente', header: 'Presente', width: '7%' },
        {field: 'llegada', header: 'Llegada', width: '7%' },
        {field: 'atendido', header: 'Ingresado' , width: '7%'},
        {field: 'estado', header: 'Estado', width: '8%' },        
        {field: 'dia_nombre', header: 'Dia', width: '8%' },
        {field: 'usuario_alta', header: 'Generó', width: '8%' },

        {field: 'es_alerta', header: '' , width: '4%'},
        {field: 'boton', header: '' , width: '4%'},
        {field: 'boton', header: '', width: '8%' },
        {field: 'boton', header: '', width: '10%' },
        {field: 'boton', header: '', width: '10%' },
        ];
     this.busqueda = [
        {label:'Seleccione una busqueda', value:null},
        {label:'Fecha', value:{id:1, name: 'New York', code: 'FE'}},
        {label:'Médico', value:{id:2, name: 'Rome', code: 'MD'}}
        
    ];
 
        
    this.columns = [
      {title: 'Apellido', dataKey: 'paciente_apellido'},
      {title: 'Nombre', dataKey: 'paciente_nombre'},
      {title: 'DNI', dataKey: 'paciente_dni'},
      {title: 'Celular', dataKey: 'telefono_cel'},
      {title: 'Obra social', dataKey: 'paciente_obra_social_nombre'},       
      {title: 'Medico', dataKey: 'nombreyapellido'},
      {title: 'Turno', dataKey: 'hora_desde'},
      {title: 'Estado', dataKey: 'estado'},
      {title: 'Dia', dataKey: 'dia_nombre'}, 
      {title: 'Generó', dataKey: 'usuario_alta'}
    ];
    this.DateForm = new FormGroup({
        'fechaHoy': new FormControl('', Validators.required), 
        'medico_nombre': new FormControl('')
        });
  this.popItemAgenda = new AgendaTurno('',new Date(),new Date(), new Date(), '','', '', '', '','','','','','','','','','','','','','','','','','','','','',new Date(),'','','', '', '', '','','','','','');
  
  }

  ngOnInit() {
    // timer para llamar
    console.log('iniciando timer');
    let timer = Observable.timer(180000,180000);//180000 -- 3 minutos inicia y en 3 minutos vuelve a llamar
    timer.subscribe(t=> {
      console.log('bucando turnos');
      this.loadListTodosTurnos();
  });
  //fin timer

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.es = calendarioIdioma;
    this.fechaHoy = new Date();
    this.fecha = new Date();
    this.pacienteForm = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'dni': new FormControl('', Validators.required),     
  });
  this.DateForm.patchValue({fechaHoy: this.fechaHoy});
  this.loadListByMedico();
  this.documents = this.documentService.documents;
  this._docSub = this.documentService.currentDocument.pipe(
    startWith({ id: 'VISION123456787890', doc: '',usuario_id:'', data: []})
  ).subscribe(document => {
    this.document = document;
    console.log(this.document);
    if((document.doc === 'ingresado')&&(document.usuario_id ===  this.userData['id'])){
    this.loadListByMedico();
    }
  });
  this.newDoc();
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    if(this.document.doc){
    console.log('load doc '+this.document.doc);
    this.documentService.getDocument(id);
    }
  }

  newDoc() {
    this.documentService.newDocument();
  }

  editDoc() {
    console.log('edit doc '+this.document.doc);
    //if()
    this.documentService.editDocument(this.document);
  }

  actualizarFecha(event){
    console.log(event);
    this.fechaHoy = event;
    console.log(new Date(this.fechaHoy));
  }

  actualizarBusqueda(event){
      console.log(event);
  }
  
  loadTurno(){
    this.loadListByMedico();
  }


  

verDetalle(agendaTurno:any){

  console.log(agendaTurno);
let liquidacion:Liquidacion;
liquidacion = new Liquidacion(agendaTurno['operacion_cobro_id'],'','','','','','',0,0,'','',[],'','','');
  let data:any; 
  data = liquidacion;
  const ref = this.dialogService.open(PopupOperacionCobroDetalleComponent, {
  data,
   header: 'Ver detalle de presentación', 
   width: '98%',
   height: '100%'
  });

  ref.onClose.subscribe((PopupOperacionCobroDetalleComponent:any) => {
     
  });

}
  
colorEsSobreturno(sobreturno:string, estado:string){
  
  if((estado === 'SOBRETURNO')) {

  }else{
    if((sobreturno === 'SI')) {
      return {'text-danger-bold'  :'null' };
  }
}
}

  loadTurnoTodosLosEstados(){}

  buscarUsuarioObraSocial(){
    
  let data:any; 
  const ref = this.dialogService.open(PopupMedicoComponent, {
  data,
   header: 'Buscar médico por obra social', 
   width: '60%',
   height: '90%'
  });
  ref.onClose.subscribe((PopupMedicoComponent:MedicoObraSocial) => {
    if (PopupMedicoComponent) {
      console.log(PopupMedicoComponent);
      this.usuario_id = PopupMedicoComponent.usuario_id;
      this.popItemMedicoObraSocial = PopupMedicoComponent;
      this.DateForm.patchValue({medico_nombre: PopupMedicoComponent.apellido +' '+  PopupMedicoComponent.nombre});
      this.popItemAgenda.usuario_id = this.popItemMedicoObraSocial.usuario_id;
      this.loadListByMedico();
    }
});

  }

  
  verMotivo(evt:any,overlaypanel:OverlayPanel,event:AgendaTurno){    
    if(event){
      this.selectedagendaTurno = event;
        this.motivo = event.es_observacion;
        this.observacion = event.observacion;        
    }
    this.display = true;
  }
  pacienteIngresado(event:AgendaTurno){
   // console.log(event);
    this.popItemAgenda = event;
    this._fechaHoy = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');        
    this.popItemAgenda.atendido = this._fechaHoy;
    
    this.popItemAgenda.agenda_estado_id = '3';
    console.log(this.popItemAgenda);
    this.document.doc = 'llamando';
    this.document.usuario_id = this.userData['id'];
    console.log(this.document.doc);
      this.editDoc();
    this.actualizarTurno();
  }

  pacienteDerivado(event:AgendaTurno){
    // console.log(event);
     this.popItemAgenda = event;              
     this.popItemAgenda.agenda_estado_id = '11';
     console.log(this.popItemAgenda);
     this.document.doc = 'llamando';
     this.document.usuario_id = this.userData['id'];
     console.log(this.document.doc);
       this.editDoc();
    
  console.log(this.popItemAgenda);  
  this.es = calendarioIdioma;
  this.loading = true;

  console.log(this.popItemAgenda);  
  try {
      this.miServico.pacienteDerivado(this.popItemAgenda, this.popItemAgenda.agenda_dia_horario_atencion_id)
      .subscribe(resp => {
     // this.agendaTurno = resp;
          console.log(resp);    
          this.loading = false;
          this.loadListByMedico(); 
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          console.log(error);
          this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
       });    
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error);
  }  
   }

  

  pacienteAtendido(event:AgendaTurno){
    console.log(event);
    this.popItemAgenda = event;
    this._fechaHoy = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');    
    swal({
      title: '¿Desea dar atendido al paciente?',
      text: 'Va a dar por atendido al paciente',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#A5D6A7',
      cancelButtonColor: '#F9A825',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.popItemAgenda.agenda_estado_id = '4';
        this.document.doc = 'atendido';
        this.document.usuario_id = this.userData['id'];
        console.log(this.document.doc);
          this.editDoc();
        this.actualizarTurno();
      }
    });

  }

 

    
  accion(evt:any,overlaypanel:OverlayPanel,event:AgendaTurno){
    if(event){
      this.selectedagendaTurno = event;
      this.observacion = event.observacion;
    }
    console.log(event);

    overlaypanel.toggle(evt);
  }
  
  filtered(event){
    console.log(event.filteredValue);
    this.elementosFiltrados  = event.filteredValue;      
}

async editarRegistro(cond:string,selecteditems:AgendaTurno){
  console.log(cond);
  this.popItemAgenda = this.selectedagendaTurno;
    if(cond == 'historia'){
    // navegar a historia clinica
    this.router.navigate(['/medico/historiaclinica'], { state: { paciente: this.popItemAgenda } });
    }
    if(cond == 'turno'){
      this.popItemAgenda.agenda_estado_id = '7';
     //await  this.actualizarTurno();
     this.router.navigate(['/recepcion/turnos'], { state: { paciente: this.popItemAgenda } });
    }    

    if(cond == 'observacion'){
      console.log('observacion');
      this.display = true;
      
    } 
  
    this._fechaHoy = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    this.popItemAgenda.atendido = this._fechaHoy;
   
    console.log(this.popItemAgenda);
   // this.actualizarTurno();
}



guardarObservacion(){
  console.log(this.observacion);
  if(this.observacion ===undefined){    
    this.popItemAgenda.observacion = '-';
  }
 this.popItemAgenda.observacion = this.observacion; 
  this.actualizarTurno();
  this.display = false;
}

darSobreTurno(){
  this.router.navigate(['/recepcion/turnos'],{ state: { paciente: this.popItemAgenda } });
}

loadListByMedico(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  this.es = calendarioIdioma;
  this.loading = true;
  this._fechaHoy = formatDate(this.fechaHoy, 'yyyy-MM-dd', 'en');
 console.log(userData['id']);
if(this._fechaHoy!=''){
  this.popItemAgenda.fecha_turno = this._fechaHoy;     
  this.popItemAgenda.usuario_id = userData['id']; 
  try {
      this.miServico.getHorarioTurnoMedico(this.popItemAgenda)
      .subscribe(resp => {
      //  console.log(resp);
      
      if (resp[0]) {
          this.agendaTurno = resp;
          console.log(this.agendaTurno);
            }else{
              this.agendaTurno =null;
            }
          this.document.doc='llamando';
          this.documentService.editDocument(this.document);
          this.loading = false;
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
       });    
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error);
  }  
} 

}


loadListTodosTurnos(){
  this.es = calendarioIdioma;
  this.loading = true;
  this._fechaHoy = formatDate(this.fechaHoy, 'yyyy-MM-dd', 'en');
// console.log(this.popItemAgenda);
if(this._fechaHoy!=''){
  this.popItemAgenda.fecha_turno = this._fechaHoy;    
  try {
      this.miServico.getHorarioTurnoMedicoSinEstado(this.popItemAgenda)    
      .subscribe(resp => {
        if (resp[0]) {
          this.agendaTurno = resp;
          console.log(this.agendaTurno);
            }else{
              this.agendaTurno =null;
            }
            this.newDoc();
            this.loadDoc('');
      
          this.loading = false;
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.loading = false;
          this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
       });    
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error);
  }  
} 

}



 actualizarTurno(){
  this.es = calendarioIdioma;
  this.loading = true;

  console.log(this.popItemAgenda);  
  try {
      this.miServico.putItem(this.popItemAgenda, this.popItemAgenda.agenda_dia_horario_atencion_id)
      .subscribe(resp => {
     // this.agendaTurno = resp;
          console.log(resp);    
          this.loading = false;
          this.loadListByMedico(); 
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          console.log(error);
          this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
       });    
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error);
  }  
} 



generarPdf(){
  
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  console.log(this.elementos);
  if(!this.elementosFiltrados){
    this.elementosFiltradosImpresion = this.agendaTurno;
  }else{
    this.elementosFiltradosImpresion = this.elementosFiltrados;
  }
  let fecha = formatDate(this.fechaHoy, 'dd/MM/yyyy', 'en');
  var doc = new jsPDF('landscape');
  
  /** valores de la pagina**/
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.line(10, 30, pageWidth - 10, 30);
  doc.setFontSize(12);
  doc.text('Agenda de pacientes', pageWidth/2, 20, null, null, 'center');
  doc.text('Emitido : '+_fechaEmision, pageWidth/2, 24, null, null, 'center');
  doc.setFontSize(8);
  doc.text(pageWidth-60, 20, 'Agenda del dia :' + fecha);


   doc.autoTable(this.columns, this.elementosFiltradosImpresion,
      {
        margin: {horizontal: 5, vertical: 35},    
        bodyStyles: {valign: 'top'},
        styles: {fontSize: 7,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify'},
        columnStyles: {text: {cellWidth: 'auto'}}
      }
      );
      window.open(doc.output('bloburl'));
}



/** ACCIONES */

colorRow(estado:string){
 
    
  if(estado == 'ATENDIDO') {
    return {'es-atendido'  :'null' };
  }
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
  if(estado == 'PRESENTE') {
    return {'es-presente'  :'null' };
}
  if(estado == 'SOBRETURNO') {
    return {'es-sobreturno'  :'null' };
  }
  if(estado == 'TURNO') {
    return {'es-turno'  :'null' };
  }

  if(estado == 'DERIVADO') {
    return {'es-turno'  :'null' };
  }

  if(estado == 'CANCELADO') {  
    return {'es-cancelado'  :'null' };
  }  
 
  if(estado == 'LLAMANDO') {
    return {'es-llamando'  :'null' };
  }

}


colorString(estado:string){
  
  if((estado === '0')||(estado === null)) {
    return {'es-transferencia'  :'null' };
  }else{
    return {'es-tarjeta-debito'  :'null' };
  }

}

throwAlert(estado:string, mensaje:string, motivo:string){
  if(estado== 'success'){
      swal({
          type: 'success',
          title: 'Exito',
          text: mensaje
        })
  }
  if(estado== 'error'){
      swal({
          type: 'error',
          title: 'Oops...',
          text: mensaje,
          footer: motivo
        })
  }
}
}





