import { PopupOperacionCobroRegistroEditarComponent } from '../../../../../shared/components/popups/popup-operacion-cobro-registro-editar/popup-operacion-cobro-registro-editar.component';
import { ObraSocial } from 'src/app/models/obra-social.model';

import { ObraSocialService } from '../../../../../services/obra-social.service';
import { Component, OnInit,Output, EventEmitter,ViewChild, PipeTransform, ElementRef, OnDestroy } from '@angular/core';
import { ConvenioService } from '../../../../../services/convenio.service';
import {Convenio} from   '../../../../../models/convenio.model';


import { calendarioIdioma, logo_clinica } from '../../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable'; 

import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';
import { PracticaService } from 'src/app/services/practica.service';
import { OperacionCobroDetalle } from 'src/app/models/operacion-cobro-detalle.model';
import { formatDate, CurrencyPipe } from '@angular/common';
import {OverlayPanelModule, OverlayPanel} from 'primeng/overlaypanel';
import { PopupObraSocialComponent } from 'src/app/shared/components/popups/popup-obra-social/popup-obra-social.component';
import { config } from 'rxjs';
import { Liquidacion } from '../../../../../models/liquidacion.model';
import { PopupMedicoComponent } from '../../../../../shared/components/popups/popup-medico/popup-medico.component';
import { MedicoObraSocial } from '../../../../../models/medico-obrasocial.model';
import { PopupOperacionCobroEditarComponent } from '../../../../../shared/components/popups/popup-operacion-cobro-editar/popup-operacion-cobro-editar.component';
import { PopupOperacionCobroRegistroBuscarComponent } from '../../../../../shared/components/popups/popup-operacion-cobro-registro-buscar/popup-operacion-cobro-registro-buscar.component';

@Component({
  selector: 'app-operacion-cobro-afectar',
  templateUrl: './operacion-cobro-afectar.component.html',
  styleUrls: ['./operacion-cobro-afectar.component.css'], 
  providers: [MessageService,DialogService]
})
export class OperacionCobroAfectarComponent implements OnInit {

    
  cantidad_practica:number=0;
  total_facturado:number=0;
  total_original:number=0;
  cols: any[];
  selectedItem: OperacionCobroDetalle;
  popItem:OperacionCobroDetalle;
  newPopItem: boolean;
  resultSave:boolean;
  es:any;
  displayDialog: boolean;
  // LOADING
  loading: boolean;
  updateDataForm: FormGroup;
  formObraSocial: FormGroup;
  elemento:OperacionCobroDetalle = null;
  elementos:OperacionCobroDetalle[] = null;
  elementosFiltrados:OperacionCobroDetalle[] = null;
  selecteditems:OperacionCobroDetalle[] = [];
  selecteditemRegistro:OperacionCobroDetalle= null;
  popItemOperacionCobro:OperacionCobroDetalle =null;
  popItemMedico:MedicoObraSocial= null;
  _id:number = 0;
  columns: any[];
  fechaDesde:Date;
  _fechaDesde:string;
  fechaHasta:Date;
  _fechaHasta:string;
  fechaPeriodo:Date;
  _fechaPeriodo:string;
  DateForm:FormGroup;
  popItemObraSocial:ObraSocial;
  liquidacion:Liquidacion;
  formasPago:any[];
  nivel:any[];
  internacion_tipo:string = 'A';

    constructor(private miServicio:PracticaService,private messageService: MessageService ,public dialogService: DialogService,private cp: CurrencyPipe  ) {
  

      this.formasPago = [
        {label: 'TRANSFERENCIA',value: 'TRANSFERENCIA'},
        {label: 'EFECTIVO',value: 'EFECTIVO'},
        {label: 'TARJETA - CREDITO',value: 'TARJETA - CREDITO'},
        {label: 'TARJETA - DEBITO',value:'TARJETA - DEBITO'},
        {label: 'CHEQUE',value:'CHEQUE'},
        {label: 'VARIOS',value:'VARIOS'}
        
    ];

    this.nivel = [
      {label: '1',value: 1},
      {label: '2',value: 2},
      {label: '3',value:3},
      {label: '4',value:4},
      
  ];
          this.cols = [
              
            { field: 'accion', header: 'Accion' , width: '6%'} ,
            { field: 'operacion_cobro_id', header: 'Nº',  width: '5%' },
            { field: 'apellido', header: 'Apellido',  width: '10%' },
            {field: 'nombre', header: 'Nombre' , width: '10%' },
            { field: 'dni', header: 'DNI/afil.',  width: '7%' },
            { field: 'gravado_adherente', header: 'G/A',  width: '4%' },
            { field: 'obra_social_nombre', header: 'O.S',  width: '15%' },            
            { field: 'descripcion', header: 'Descrpición',  width: '20%' },
            { field: 'complejidad', header: 'nivel' , width: '4%'}, 
            { field: 'codigo', header: 'Codigo' , width: '8%'},
            { field: 'internacion_tipo', header: 'Int' , width: '4%'} ,
            { field: 'medico_nombre', header: 'Médico' , width: '10%'},
            { field: 'usuario_cobro_nombre', header: 'Usuario' , width: '8%'},
            { field: 'fecha_cobro' , header: 'Fecha' , width: '8%'},
            { field: 'cantidad', header: 'Cant.' , width: '6%'},
            { field: 'valor_facturado', header: 'Fact.' , width: '6%'},
            { field: 'distribucion', header: 'dist' , width: '6%'},
            { field: 'forma_pago', header: 'Medio' , width: '10%'} 
              
           ];         

           
           this.columns = [
            {title: 'Nº', dataKey: 'operacion_cobro_id'},
            {title: 'Apellido', dataKey: 'apellido'},
            {title: 'Nombre', dataKey: 'nombre'},
            {title: 'DNI', dataKey: 'dni'},
            {title: 'Obra social', dataKey: 'obra_social_nombre'},
            {title: 'Código', dataKey: 'codigo'},
            {title: 'Descripción', dataKey: 'descripcion'},
            {title: 'Nivel', dataKey: 'complejidad'},
            {title: 'Cobro', dataKey: 'fecha_cobro'},
            {title: 'Cant', dataKey: 'cantidad'},
            {title: 'Nivel', dataKey: 'complejidad'},            
            {title: 'Valor F.', dataKey: 'valor_facturado'}
        ];
          

        this.DateForm = new FormGroup({
            'fecha_desde': new FormControl('', Validators.required), 
            'fecha_hasta': new FormControl('', Validators.required), 
            'numero': new FormControl(''), 
            'nivel': new FormControl(''), 
            'obra_social_id': new FormControl('0'), 
            'obra_social_nombre': new FormControl('') ,
            'medico_id': new FormControl('0'), 
            'medico_nombre': new FormControl('') 
            });

        
 

          }
  
    ngOnInit() {
        this.es = calendarioIdioma;
        this.fechaDesde = new Date();
        this.fechaHasta = new Date();
        this.DateForm.patchValue({fecha_desde: this.fechaDesde});
        this.DateForm.patchValue({fecha_hasta: this.fechaHasta});
        this.popItemOperacionCobro =  new OperacionCobroDetalle('','',0,0,0,'','','','','','','','','','','',0,0,0,'','','');
       this.liquidacion = new Liquidacion('','','','','','','',0,0,'','',[],'','','');
    }
  
    actualizarFechaDesde(event){
        console.log(event);
        this.fechaDesde = event;
        console.log(new Date(this.fechaDesde));
      }

      actualizarFechaHasta(event){
        console.log(event);
        this.fechaHasta = event;
        console.log(new Date(this.fechaHasta));
      }
      actualizarFechaPeriodo(event){
        console.log(event);
        this.fechaPeriodo = event;
        console.log(new Date(this.fechaPeriodo));
      }

    /** CARGA LA LISTA **/

      editRow(row){
        console.log(row.data);
        this.popItem = row.data;
            /* if( this.actualizarDatos()){
            this.showToast('exito','Registro modificado','Exito al modificar');
        }*/
    }


    accion(event:OperacionCobroDetalle,overlaypanel: OverlayPanel,elementos:OperacionCobroDetalle){
      if(elementos){
        this.selecteditemRegistro = elementos;
      }

        console.log(this.selecteditemRegistro);
        overlaypanel.toggle(event);
      }


      actualizarPrestacion(){
        try {
          
          this.miServicio.updatePrestacion(this.internacion_tipo,this.selecteditems)
          .subscribe(resp => {
            console.log(resp);    
            this.loadRegistro();
              this.loading = false;
          },
          error => { // error path
              console.log(error.message);
              console.log(error.status);
              
           });    
      } catch (error) {
          this.throwAlert('error','error','Error: '+error.status+'  Error al cargar los registros',error.message);
      }  
      }

  sumarValores(vals:any){
    let i:number;
    //console.log(vals[1]['valor_facturado']);
    console.log(vals !== undefined);
    this.total_facturado = 0;
    this.total_original = 0;
    this.cantidad_practica = 0;
    for(i=0;i<vals.length;i++){
        this.total_original = this.total_original+ Number(vals[i]['valor_original']);
        this.total_facturado = this.total_facturado+ Number(vals[i]['valor_facturado']);
    }
    this.cantidad_practica = vals.length;
    console.log(this.total_facturado);
  }


  filtered(event){
      console.log(event.filteredValue);
      this.elementosFiltrados  = event.filteredValue;  
      this.sumarValores(this.elementosFiltrados);
  }
    
      
  editarRegistro(){
    let data:any; 
    data = this.selecteditemRegistro;
    const ref = this.dialogService.open(PopupOperacionCobroRegistroEditarComponent, {
    data,
     header: 'Editar registro', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupOperacionCobroRegistroEditarComponent:OperacionCobroDetalle) => {
        if (PopupOperacionCobroRegistroEditarComponent) {
          console.log(PopupOperacionCobroRegistroEditarComponent);    
          this.popItemOperacionCobro = PopupOperacionCobroRegistroEditarComponent;
        //  this.formObraSocial.patchValue({id: this.popItemObraSocial.id});
         // this.formObraSocial.patchValue({nombre: this.popItemObraSocial.nombre});
         
        }
    });
  }


  
  editarOperacionCobro(){
    let data:any; 
    data = this.selecteditemRegistro;
    const ref = this.dialogService.open(PopupOperacionCobroEditarComponent, {
    data,
     header: 'Editar registro', 
     width: '98%',
     height: '90%'
    });
    ref.onClose.subscribe((PopupOperacionCobroEditarComponent:OperacionCobroDetalle) => {
      this.loadRegistro();
        if (PopupOperacionCobroEditarComponent) {
          console.log(PopupOperacionCobroEditarComponent);    
        //  this.popItemOperacionCobro = PopupOperacionCobroEditarComponent;
         
        //  this.formObraSocial.patchValue({id: this.popItemObraSocial.id});
         // this.formObraSocial.patchValue({nombre: this.popItemObraSocial.nombre});
         
        }
    });
  }

  eliminarRegistro(){
    swal({
      title: '¿Desea eliminar el registro?',
      text: 'Va a eliminar un registro',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar!'
    }).then((result) => {
      if (result.value) {
        this.deleteRegistro(this.selecteditemRegistro.id);        
      }
    })
}

  afectarRegistros(){      
      console.log(this.DateForm.value);
    let td = formatDate(this.fechaDesde, 'dd/MM/yyyy HH:mm', 'en');
    let th = formatDate(this.fechaHasta, 'dd/MM/yyyy HH:mm', 'en');
    let tp = formatDate(this.fechaPeriodo, 'dd-MM-yyyy', 'en');
    if(this.selecteditems !== undefined){
        console.log(this.selecteditems);
      
    }
    swal({
        title: '¿Desea afectar estos  registros?',
        text: 'Va a afectar una liquidacion con fecha desde '+td+' y fecha hasta '+th+' para la obra social '+ this.DateForm.value.obra_social_nombre,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar!'
      }).then((result) => {
        if (result.value) {
          this.afectarOperacionCobro();
          
        }

      })
  }


  
  buscarPractica(){
    let data:any; 
    const ref = this.dialogService.open(PopupOperacionCobroRegistroBuscarComponent, {
    data,
     header: 'Buscar Practica', 
     width: '100%',
     height: '100%'
    });

    ref.onClose.subscribe((PopupOperacionCobroRegistroBuscarComponent:any) => {
        if (PopupOperacionCobroRegistroBuscarComponent) {
         // console.log(PopupOperacionCobroRegistroBuscarComponent);    
          this.buscarPractica();
        }
    });

  }
  
  buscarMedico(){
    let data:any; 
    const ref = this.dialogService.open(PopupMedicoComponent, {
    data,
     header: 'Buscar Médico', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupMedicoComponent:MedicoObraSocial) => {
        if (PopupMedicoComponent) {
          console.log(PopupMedicoComponent);    
          this.popItemMedico = PopupMedicoComponent;
          this.DateForm.patchValue({medico_id: this.popItemMedico.usuario_id});
          this.DateForm.patchValue({medico_nombre: this.popItemMedico.apellido+" "+this.popItemMedico.nombre});
         console.log(this.DateForm.value);
        }
    });

  }
 


  buscarObraSocial(){
    let data:any; 
    const ref = this.dialogService.open(PopupObraSocialComponent, {
    data,
     header: 'Buscar Obra social', 
     width: '98%',
     height: '90%'
    });

    ref.onClose.subscribe((PopupObraSocialComponent:ObraSocial) => {
        if (PopupObraSocialComponent) {
          console.log(PopupObraSocialComponent);    
          this.popItemObraSocial = PopupObraSocialComponent;
          this.DateForm.patchValue({obra_social_id: this.popItemObraSocial.id});
          this.DateForm.patchValue({obra_social_nombre: this.popItemObraSocial.nombre});
         console.log(this.DateForm.value);
        }
    });

  }
 

  loadRegistro(){
    this.es = calendarioIdioma;
    this.loading = true;
    this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd HH:mm', 'en');
    this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd HH:mm', 'en');
    console.log(this._fechaDesde+' ' +this._fechaHasta);
    try {
        this.miServicio.getOperacionCobroRegistrosBetweenDates(this._fechaDesde, this._fechaHasta, 'AUD')
        .subscribe(resp => {
          if (resp[0]) {
            let i:number = 0;
            let resultado = resp;
            resultado.forEach(element => {
              resp[i]['dni'] = resp[i]['dni'] +' - '+resp[i]['numero_afiliado'] +' / '+resp[i]['barra_afiliado'] ;
          //    let t = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          
              i++;
            });
            this.elementos = resp;
            console.log(this.elementos);
              }else{
                this.elementos =null;
              }
                   
            this.loading = false;
            console.log(resp);
            this.sumarValores(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert('error','Error al cargar los registros',error,error.status);
    }  
}



afectarOperacionCobro(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  this.es = calendarioIdioma;
  this.loading = true;
  this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd HH:mm', 'en');
  this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd HH:mm', 'en');  
  this._fechaPeriodo = formatDate(this.fechaPeriodo, 'dd-MM-yyyy', 'en');  
  this.liquidacion.fecha_desde = this._fechaDesde;
  this.liquidacion.fecha_hasta = this._fechaHasta;
  this.liquidacion.nivel = this.DateForm.value.nivel;
  this.liquidacion.numero = this._fechaPeriodo;
  this.liquidacion.medico_id = String(this.DateForm.value.medico_id);
  this.liquidacion.obra_social_id =  String(this.DateForm.value.obra_social_id);
  
  this.liquidacion.estado = 'AFE';
  
  this.liquidacion.usuario_audito = userData["id"];

  /***calculo los totales y los sumo */
for(let i=0;i<this.selecteditems.length;i++){
  
  this.liquidacion.total = Number(this.liquidacion.total)+Number(this.selecteditems[i]['valor_facturado']);
  this.liquidacion.cant_orden =Number(this.liquidacion.cant_orden)+Number(this.selecteditems[i]['cantidad']);
  this.sumarValores(this.liquidacion.total);
}

  this.liquidacion.registros = this.selecteditems;  
  console.log(this.liquidacion);  
  console.log(JSON.stringify( this.liquidacion ) );
  if((this.liquidacion.obra_social_id !== '0') && (this.liquidacion.medico_id !=='0') && (this.liquidacion.numero !== undefined) &&(this.liquidacion.nivel !=='')){
   try {
     this.miServicio.afectarOperacionCobro(this.liquidacion)
      .subscribe(resp => {
        console.log(resp);
        this.loadRegistro();
          this.loading = false;
          console.log(resp);
         
          this.liquidacion.nivel = this.DateForm.value.nivel;
          this.liquidacion.numero = '';
          this.liquidacion.medico_id = '';
          this.liquidacion.obra_social_id =  '';
          this.liquidacion.total = 0;
          this.liquidacion.cant_orden = 0;
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
}else{

  swal({
    title: 'Campo vacio',
    text: 'Algun campo esta vacio',
    type: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: 'Ok, lo corregire'
  }).then((result) => {
    if (result.value) {
      
    }
  })
}
}


deleteRegistro(id:string){

  try {
      this.miServicio.destroyByPracticaById(id)
      .subscribe(resp => {
        if(resp == 1){
          this.throwAlert('success', 'Se modificó el registro con éxito','','');
          this.loadRegistro();
        }else{
          this.throwAlert('error', 'No se elimino ningun registro','Registro', '200');
        }

          this.loading = false;
          console.log(resp);
          this.sumarValores(resp);
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.throwAlert('error' , 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
       });
  } catch (error) {
  this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
}


generarPdfListado(filtro:string) {
  console.log(this.selecteditems);
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let _fechaDesde = formatDate(this.fechaDesde, 'dd/MM/yyyy HH:mm', 'en');
  let _fechaHasta = formatDate(this.fechaHasta, 'dd/MM/yyyy HH:mm', 'en');
  let tfacturado:number = 0;
  let ttransferencia:number = 0;
  let tdebito:number = 0;
  let tcredito:number = 0;
  let tefectivo:number = 0;
  let tpractica:number = 0;
  let tvarios:number = 0;
  let tcheque:number = 0;
  let tconsulta_medico:number = 0;
  let testudio_medico:number = 0;
  let testudio_clinica:number = 0;
  let ttotal_medico:number = 0;
  
  let i = 0;
  for(i=0;i<this.selecteditems.length;i++){
    if(this.selecteditems[i]['forma_pago'] === 'TRANSFERENCIA'){
      ttransferencia = ttransferencia+Number(this.selecteditems[i]['valor_facturado']);
    }
    if(this.selecteditems[i]['forma_pago'] === 'EFECTIVO'){
      tefectivo = tefectivo+Number(this.selecteditems[i]['valor_facturado']);
    }
    if(this.selecteditems[i]['forma_pago'] === 'TARJETA - CREDITO'){
      tcredito = tcredito+Number(this.selecteditems[i]['valor_facturado']);
    }
    if(this.selecteditems[i]['forma_pago'] === 'TARJETA - DEBITO'){
      tdebito = tdebito+Number(this.selecteditems[i]['valor_facturado']);
    }
    if(this.selecteditems[i]['forma_pago'] === 'CHEQUE'){
      tcheque = tcheque+Number(this.selecteditems[i]['valor_facturado']);
    }
    if(this.selecteditems[i]['forma_pago'] === 'VARIOS'){
      tvarios = tvarios+Number(this.selecteditems[i]['valor_facturado']);
    }
    console.log(this.selecteditems[i]['complejidad']);
    if((this.selecteditems[i]['complejidad'] == '2')&&(this.selecteditems[i]['forma_pago'] !== 'TRANSFERENCIA')&&(this.selecteditems[i]['forma_pago'] !== 'TARJETA - CREDITO')&&(this.selecteditems[i]['forma_pago'] !== 'TARJETA - DEBITO')){
    
      console.log(this.selecteditems[i]['valor_facturado']);      
      testudio_medico = testudio_medico+Number(this.selecteditems[i]['valor_facturado'])*0.5;
      ttotal_medico = Number(ttotal_medico)+Number(testudio_medico);
    }
    
    if((this.selecteditems[i]['complejidad'] == '1')&&(this.selecteditems[i]['forma_pago'] !== 'TRANSFERENCIA')&&(this.selecteditems[i]['forma_pago'] !== 'TARJETA - CREDITO')&&(this.selecteditems[i]['forma_pago'] !== 'TARJETA - DEBITO')){
      tconsulta_medico = tconsulta_medico+Number(this.selecteditems[i]['valor_facturado']);
      ttotal_medico = Number(ttotal_medico)+Number(tconsulta_medico);
    }
    tfacturado = tfacturado+ Number(this.selecteditems[i]['valor_facturado']);
  }
  //tfacturado = Number(this.cp.transform(tfacturado, '', 'symbol-narrow', '1.2-2'));
  let userData = JSON.parse(localStorage.getItem('userData'));
  console.log(this.elementosFiltrados);
  console.log(this.selecteditems);
  
  if(this.selecteditems){
  let _fechaDesde = formatDate(this.fechaDesde, 'dd/MM/yyyy HH:mm', 'en');
  let _fechaHasta = formatDate(this.fechaHasta, 'dd/MM/yyyy HH:mm', 'en');
  var doc = new jsPDF('landscape');  
  /** valores de la pagina**/
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);

  doc.line(10, 33, pageWidth - 10, 33);
  doc.setFontSize(12);
  doc.text('LISTADO DE ORDENES', pageWidth/2, 15, null, null, 'center');
  doc.setFontSize(6);
  doc.text('Emitido : '+_fechaEmision, pageWidth/2, 20, null, null, 'center');
  doc.setFontSize(8);

  
  doc.setFontSize(6);
    doc.text(15, 38, 'Tarjeta : ' +this.cp.transform(tcredito, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(45, 38, 'Debito: ' +this.cp.transform(tdebito, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(75, 38, 'Efectivo: ' +this.cp.transform(tefectivo, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(105, 38, 'Transferencia: ' +this.cp.transform(ttransferencia, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(135, 38, 'Total : ' +this.cp.transform(tfacturado, '', 'symbol-narrow', '1.2-2') );  
    doc.setFontSize(8);
  if(filtro === 'medico'){ 
  
  doc.text(pageWidth-60, 15, 'Médico : ' + this.selecteditems[0]['medico_nombre']);      
  doc.text(pageWidth-60, 20, 'Usuario : ' + userData['nombreyapellido']);
  doc.text(pageWidth-60, 25, 'Desde : ' + _fechaDesde);
  doc.text(pageWidth-60, 30, 'Hasta : ' + _fechaHasta);

  doc.text(pageWidth-100, 15, 'Prácticas : ' +this.cp.transform(testudio_medico, '', 'symbol-narrow', '1.2-2') ); 
  doc.text(pageWidth-100, 20, 'Consultas: ' +this.cp.transform(tconsulta_medico, '', 'symbol-narrow', '1.2-2') ); 
 // doc.line(pageWidth-100, 23, pageWidth-80, 23);
 // doc.setFontSize(10);
 // doc.text(pageWidth-100, 30, 'Total : ' +this.cp.transform(ttotal_medico, '', 'symbol-narrow', '1.2-2') ); 
  doc.setFontSize(8);
}else{

  doc.text(pageWidth-60, 15, 'CLINICA DE LA VISION' );      
  doc.text(pageWidth-60, 20, 'Usuario : ' + userData['nombreyapellido']);
  doc.text(pageWidth-60, 25, 'Desde : ' + _fechaDesde);
  doc.text(pageWidth-60, 30, 'Hasta : ' + _fechaHasta);
  doc.setFontSize(10);
  doc.text(pageWidth-100, 30, 'Prácticas : ' +this.cp.transform(testudio_medico, '', 'symbol-narrow', '1.2-2') ); 
  doc.setFontSize(8);
}
  doc.setFontSize(10);
  
  doc.setFontSize(8);
  doc.autoTable(this.columns, this.selecteditems,
    {
        margin: {horizontal: 5, vertical: 42},
        bodyStyles: {valign: 'top'},
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify'},
        columnStyles: {text: {cellWidth: 'auto'}}
    });
 // doc.save('rendicion-de-caja'+_fechaEmision+'.pdf');
 window.open(doc.output('bloburl'));  
  }
}

  colorRow(estado:string){
  

    if(estado == 'EFECTIVO') {
      return {'es-efectivo'  :'null' };
    }
  }  
  

      showToast(estado:string ,mensaje:string, encabezado:string){

        if(estado =='exito'){
            this.messageService.add({severity:'success', summary: mensaje, detail:encabezado});
        }
        if(estado =='info'){
            this.messageService.add({severity:'info', summary: 'El campo no es correcto', detail:'Los datos del campo son incorrectos'});
        }
        if(estado =='warning'){
            this.messageService.add({severity:'warning', summary: 'El campo no es correcto', detail:'Los datos del campo son incorrectos'});
        }
        if(estado =='error'){
            this.messageService.add({severity:'error', summary: 'Error', detail:'No se pudo modificar el registro'});
        }

      }
    
      throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
          let tipoerror:string;

          if(estado== 'success'){
              swal({
                  type: 'success',
                  title: 'Exito',
                  text: mensaje
                })
          }

          if(errorNumero =='422'){
            mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
            swal({   
                type: 'warning',
                title: 'Atención..',
                text: mensaje,
                footer: motivo
              })
        }
          
          if((estado== 'error')&&(errorNumero!='422')){
            if(errorNumero =='422'){
                mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
            }
            if(errorNumero =='400 '){
                mensaje ='Bad Request ';
            }
            if(errorNumero =='404'){
                mensaje ='No encontrado ';
            }
            if(errorNumero =='401'){
                mensaje ='Sin autorización';
            }
            if(errorNumero =='403'){
                mensaje =' Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ';
            }
            if(errorNumero =='405'){
                mensaje ='Método no permitido';
            }
            if(errorNumero =='500'){
                mensaje ='Error interno en el servidor';
            }
            if(errorNumero =='503'){
                mensaje ='Servidor no disponible';
            }
            if(errorNumero =='502'){
                mensaje ='Bad gateway';
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