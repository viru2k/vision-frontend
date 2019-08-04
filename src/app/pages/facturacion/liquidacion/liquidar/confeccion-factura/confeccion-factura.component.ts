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
import { formatDate, DecimalPipe, CurrencyPipe } from '@angular/common';
import {OverlayPanelModule, OverlayPanel} from 'primeng/overlaypanel';
import { PopupObraSocialComponent } from 'src/app/shared/components/popups/popup-obra-social/popup-obra-social.component';
import { Liquidacion } from '../../../../../models/liquidacion.model';
import { LiquidacionService } from '../../../../../services/liquidacion.service';
import { pipe } from '@angular/core/src/render3';
import { NumberToWordsPipe } from '../../../../../shared/pipes/number-to-words.pipe';
import { PopupOperacionCobroPresentacionComponent } from '../../../../../shared/components/popups/popup-operacion-cobro-presentacion/popup-operacion-cobro-presentacion.component';
import { PopupPresentacionEditarComponent } from '../../../../../shared/components/popups/popup-presentacion-editar/popup-presentacion-editar.component';
import { ExcelService } from '../../../../../services/excel.service';


@Component({
  selector: 'app-confeccion-factura',
  templateUrl: './confeccion-factura.component.html',
  styleUrls: ['./confeccion-factura.component.css'],
  providers: [MessageService,DialogService]
})
export class ConfeccionFacturaComponent implements OnInit {

  cols: any[];
  columns: any[];
  columnsListadoMedico: any[];
  columnsListadoTodos: any[];
  columnsListadoCirugiaTodos: any[];
  loading: boolean;
  resultSave:boolean;
  es:any;
  displayDialog: boolean;
  fechaDesde:Date;
  _fechaDesde:string;
  fechaHasta:Date;
  _fechaHasta:string;
  DateForm:FormGroup;
  liquidacion:Liquidacion;
  elementos:Liquidacion[] = null;
  elementosFiltrados:Liquidacion[] = null;
  elementosCirugia:Liquidacion[] = null;
  selecteditemRegistro:Liquidacion= null;
  selecteditems:Liquidacion[] = [];
  elementosPreFactura:Liquidacion[] = [];
  total_facturado_impresion:number;
  cantidad_practica:number=0;  
  total_original:number=0;
  total_facturado:number = 0;
  cantidad:number = 0;
  selectedImpresion:string ;//= 'Transferencia';
  impresiones:any[];

  constructor(private miServicio:LiquidacionService,private practicaService:PracticaService, private messageService: MessageService ,public dialogService: DialogService,public numberToWordsPipe:NumberToWordsPipe,private cp: CurrencyPipe, private dp: DecimalPipe, private excelService:ExcelService) {

    this.impresiones = [
      {name: 'Presentación todos', code: '1'},
      {name: 'Presentación a médico', code: '2'},
      {name: 'Presentación medico ACLISA', code: '3'},        
      {name: 'Presentación DOS Cirugia', code: '4'},        
      {name: 'Presentación con IVA', code: '5'},
      {name: 'exportarExcel', code: '6'},
      {name: 'txt práctica y estudios DOS', code: '7'},
      {name: 'txt cirugia DOS', code: '8'},
  ];

    this.cols = [
      { field: 'accion', header: 'Accion' , width: '6%'} ,
      { field: 'id', header: 'Liq. nº', width: '7%'} ,
      { field: 'obra_social_nombre', header: 'Obra social' , width: '20%'} ,
      { field: 'entidad_nombre', header: 'Entidad' , width: '10%'} ,
      { field: 'numero', header: 'Periodo',  width: '8%' },
      { field: 'nivel', header: 'Nivel',  width: '10%' },
      {field: 'fecha_desde', header: 'Desde' , width: '10%' },
      { field: 'fecha_hasta', header: 'Hasta',  width: '10%' },
      { field: 'cant_orden', header: 'Ordenes',  width: '10%' },
      { field: 'total', header: 'Total',  width: '20%' },
      { field: 'medico_nombre', header: 'Médico' , width: '15%'},
      { field: 'nombreyapellido', header: 'Audito' , width: '15%'},
     
      
   ];         

   
   this.columns = [
    {title: 'Obra social', dataKey: 'obra_social_nombre'},
    {title: 'Número', dataKey: 'numero'},
    {title: 'Nivel', dataKey: 'nivel'},
    {title: 'Desde', dataKey: 'fecha_desde'},
    {title: 'Hasta', dataKey: 'fecha_hasta'},
    {title: 'Cantidad', dataKey: 'cant_orden'},
    {title: 'Total', dataKey: 'total'},
    {title: 'Audito', dataKey: 'nombreyapellido'}
];

this.columnsListadoMedico = [
  {title: 'Paciente', dataKey: 'paciente_nombre'},  
  {title: 'Num. afiliado', dataKey: 'numero_afiliado'},
  {title: 'Código', dataKey: 'codigo'},
  {title: 'Descripción', dataKey: 'descripcion'},
  {title: 'Fecha', dataKey: 'fecha_cobro'},
  {title: 'Cant', dataKey: 'cantidad'},
  {title: 'Honorario', dataKey: 'valor_facturado'},
  {title: 'Matricula', dataKey: 'matricula'},
  {title: 'Médico', dataKey: 'medico_nombre'}
];
  

this.columnsListadoTodos = [
  {title: 'Paciente', dataKey: 'paciente_nombre'},  
  {title: 'Num. afiliado', dataKey: 'numero_afiliado'},
  {title: 'Código', dataKey: 'codigo'},
  {title: 'Descripción', dataKey: 'descripcion'},
  {title: 'Fecha', dataKey: 'fecha_cobro'},
  {title: 'Cant', dataKey: 'cantidad'},
  
  {title: 'Honorario', dataKey: 'valor_facturado'},
  {title: 'Matricula', dataKey: 'matricula'},
  {title: 'Médico', dataKey: 'medico_nombre'}
  
];




this.columnsListadoCirugiaTodos = [
  {title: 'Paciente', dataKey: 'paciente_nombre'},  
  {title: 'Num. afiliado', dataKey: 'numero_afiliado'},
  {title: 'Código', dataKey: 'codigo'},
  {title: 'Descripción', dataKey: 'descripcion'},
  {title: 'Fecha', dataKey: 'fecha_cobro'},
  {title: 'Cant', dataKey: 'cantidad'},
  {title: 'Cat.', dataKey: 'categorizacion'},
  {title: 'Honor.', dataKey: 'honorarios'},
  {title: 'Gastos', dataKey: 'gastos'},
  {title: 'Total', dataKey: 'valor_facturado'},
  {title: 'Matricula', dataKey: 'matricula'},
  {title: 'Médico', dataKey: 'medico_nombre'}
  
];
  

this.DateForm = new FormGroup({
    'fecha_desde': new FormControl('', Validators.required), 
    'fecha_hasta': new FormControl('', Validators.required), 
    'presentacion_nro': new FormControl(''), 
    'obra_social_nombre': new FormControl('') ,
    'obra_social_id': new FormControl('') 
    });


   }

  ngOnInit() {
    this.selectedImpresion =  this.impresiones[0];
    this.es = calendarioIdioma;
    this.fechaDesde = new Date();        
    this.fechaHasta = new Date();
    this.DateForm.patchValue({fecha_desde: this.fechaDesde});
    this.DateForm.patchValue({fecha_hasta: this.fechaHasta}); 
    this.loadlist();
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


  accion(event:OperacionCobroDetalle,overlaypanel: OverlayPanel,elementos:Liquidacion){
    if(elementos){
      this.selecteditemRegistro = elementos;
    }
      
      console.log(this.selecteditemRegistro);
      overlaypanel.toggle(event);
    }
  
  imprimir(){




    this.selectedImpresion['code'];
    if( this.selectedImpresion['code'] === '1'){
      this.loadPresentacionTodos();
    }
    if( this.selectedImpresion['code'] === '2'){
      this.loadPresentacionMedico();
    }
    if( this.selectedImpresion['code'] === '3'){
      this.loadPresentacionMedicoACLISA();
    }
    if( this.selectedImpresion['code'] === '4'){
      this.loadPresentacionCirugiaTodos();
    }
    if( this.selectedImpresion['code'] === '5'){
      this.loadPresentacionIva();
    }
    if( this.selectedImpresion['code'] === '6'){
      this.exportarExcel();
    }
    if( this.selectedImpresion['code'] === '7'){
      this.generarTxt();
    }
    if( this.selectedImpresion['code'] === '8'){
      this.generarTxtCirugia();
    }
  }

    buscarObraSocial(){
      let data:any; 
     
      const ref = this.dialogService.open(PopupObraSocialComponent, {
      data,
       header: 'Buscar Practica', 
       width: '98%',
       height: '90%'
      });
  
      ref.onClose.subscribe((PopupObraSocialComponent:ObraSocial) => {
          if (PopupObraSocialComponent) {
            console.log(PopupObraSocialComponent);    
            
            
            this.DateForm.patchValue({obra_social_nombre: PopupObraSocialComponent.nombre});
            this.DateForm.patchValue({obra_social_id: PopupObraSocialComponent.id});
           
          }
      });
  
    }

    editarRegistro(){

      let data:any; 
      data =  this.selecteditemRegistro;
      const ref = this.dialogService.open(PopupPresentacionEditarComponent, {
      data,
       header: 'Editar de presentación', 
       width: '98%',
       height: '100%'
      });
  
      ref.onClose.subscribe((PopupPresentacionEditarComponent:Liquidacion) => {
                              
            console.log('actualizando')          ;
            this.loadlist();
           
          
      });

    }

    verDetalle(){

      let data:any; 
      data =  this.selecteditemRegistro;
      const ref = this.dialogService.open(PopupOperacionCobroPresentacionComponent, {
      data,
       header: 'Ver detalle de presentación', 
       width: '98%',
       height: '100%'
      });
  
      ref.onClose.subscribe((PopupOperacionCobroPresentacionComponent:ObraSocial) => {
          if (PopupOperacionCobroPresentacionComponent) {
            console.log(PopupOperacionCobroPresentacionComponent);                        
        //            
           
          }
      });
  
    }


  loadlist(){

    this.loading = true;
  
    try {
        this.miServicio.getLiquidacionDetalle()    
        .subscribe(resp => {
          if (resp[0]) {
            this.elementos = resp;
            console.log(this.elementos);
              }else{
                this.elementos =null;
              }
            this.loading = false;
            console.log(resp);
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


loadPresentacionTodos(){

  this.loading = true;

  try {
      this.miServicio.getListadoPreFactura(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
      //    let t = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          console.log(resp[i]['fecha_cobro']);
          i++;
        });
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);
          this.generarPdfListadoTodos();
          this.loading = false;
          console.log(resp);
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



loadPresentacionCirugiaTodos(){

  this.loading = true;
  console.log(this.selecteditems);
  try {
      this.miServicio.getListadoPreFacturaCirugia(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          if(( resp[i]['paciente_barra_afiliado'] !== '0')){
            resp[i]['numero_afiliado'] = resp[i]['numero_afiliado']+'/'+resp[i]['paciente_barra_afiliado'] ;
          }
          
          console.log(resp[i]['fecha_cobro']);
          i++;
        });
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);
          this.generarPdfListadoCirugiaTodos();
          this.loading = false;
          console.log(resp);
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


loadPresentacionIva(){


  this.loading = true;

  try {
      this.miServicio.getListadoPreFactura(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
      //    let t = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          console.log(resp[i]['fecha_cobro']);
          i++;
        });
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);
          this.generarPdfListadoMedicoIVA();
          this.loading = false;
          console.log(resp);
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

generarTxt(){

  this.loading = true;

  try {
      this.miServicio.generarTxt(this.selecteditems)    
      .subscribe(resp => {
        
        this.throwAlert('success', 'Se generó el archivo con éxito','','');
          this.loading = false;
          console.log(resp);
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

generarTxtCirugia(){
  
  this.loading = true;
  console.log(this.selecteditems);
  try {
      this.miServicio.getListadoPreFacturaCirugia(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy HH:mm', 'en');
          if(( resp[i]['paciente_barra_afiliado'] !== '0')){
            resp[i]['numero_afiliado'] = resp[i]['numero_afiliado']+'/'+resp[i]['paciente_barra_afiliado'] ;
          }
          
          console.log(resp[i]['fecha_cobro']);
          i++;
        });
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);
          /***********
           * 
           * 
           * 
           * 
           * 
           * 
           *   ORDENO LA FACTURACION  
           * 
           * 
           * 
           * */

          
          let j = 0;
          for(i=0;i<this.elementosPreFactura.length;i++){

            let practica = this.elementosPreFactura[i]['convenio_os_pmo_id'];        
            for(j=0;j<this.elementosPreFactura.length;j++){        
              if(this.elementosPreFactura[j]['convenio_os_pmo_id'] === practica){            
                if((this.elementosPreFactura[j]['obra_social_practica_nombre'] === 'HONORARIOS')&&(this.elementosPreFactura[j]['complejidad'] !== 2)){
                  if(this.elementosPreFactura[j]['operacion_cobro_distribucion_total'] === null){
                    this.elementosPreFactura[i]['operacion_cobro_distribucion_total'] = 0;
                  }else{
                    if(this.selecteditems[0]['obra_social_nombre']=== 'DOS - OBRA SOCIAL PROVINCIA'){
                      this.elementosPreFactura[i]['honorarios'] =  this.elementosPreFactura[j]['operacion_cobro_distribucion_total'];
                    }else{
                      this.elementosPreFactura[i]['honorarios'] =  this.cp.transform((((this.elementosPreFactura[j]['operacion_cobro_distribucion_total'])*20)/80), '', 'symbol-narrow', '1.2-2'); 
                    }
                  }
                }
                if((this.elementosPreFactura[j]['obra_social_practica_nombre'] === 'GASTOS')&&(this.elementosPreFactura[j]['complejidad'] !== 2)){
                  if(this.elementosPreFactura[j]['operacion_cobro_distribucion_total'] === null){
                    this.elementosPreFactura[i]['operacion_cobro_distribucion_total'] = 0;
                  }else{
                    console.log(this.selecteditems[0]['obra_social_id']);
                    if(this.selecteditems[0]['obra_social_nombre'] == 'DOS - OBRA SOCIAL PROVINCIA'){
                     console.log('obra social');
                     this.elementosPreFactura[i]['gastos'] =  this.elementosPreFactura[j]['operacion_cobro_distribucion_total'];
                    }else{
                      console.log('coseguro');
                      this.elementosPreFactura[i]['gastos'] =  this.cp.transform((((this.elementosPreFactura[j]['operacion_cobro_distribucion_total'])*20)/80), '', 'symbol-narrow', '1.2-2'); 
                    }
                  }
                }
                if(this.elementosPreFactura[j]['complejidad'] === 2){         
                    this.elementosPreFactura[i]['gastos'] =  this.elementosPreFactura[j]['valor_facturado'];
                    this.elementosPreFactura[i]['honorarios'] =  '0.00';
                  }
              }
            }
            }

           const filteredArr = this.elementosPreFactura.reduce((acc, current) => {
            const x = acc.find(item => item['operacion_cobro_practica_id'] === current['operacion_cobro_practica_id']);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);

          try {
            this.miServicio.generarTxtCirugia(filteredArr)    
            .subscribe(resp => {
              
              this.throwAlert('success', 'Se generó el archivo con éxito','','');
                this.loading = false;
                console.log(resp);
            },
            error => { // error path
                console.log(error.message);
                console.log(error.status);
                this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
             });    
        } catch (error) {
        this.throwAlert('error','Error al cargar los registros',error,error.status);
        }  

          this.loading = false;
          console.log(resp);
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


loadPresentacionMedico(){

  this.loading = true;

  try {
      this.miServicio.getListadoPreFactura(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          if(( resp[i]['paciente_barra_afiliado'] !== '0')){
            resp[i]['numero_afiliado'] = resp[i]['numero_afiliado']+'/'+resp[i]['paciente_barra_afiliado'] ;
          }
          
          console.log(resp[i]['fecha_cobro']);
          i++;
        });
        this.sumarValores(resp);
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);
          this.generarPdfListadoMedico();
          this.loading = false;
          
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



sumarValores(vals:any){
  let i:number;
  
  console.log(vals);
  this.total_facturado = 0;
  this.cantidad = 0;
  for(i=0;i<vals.length;i++){
      this.cantidad = this.cantidad+ Number(vals[i]['cant_orden']);
      this.total_facturado = this.total_facturado+ Number(vals[i]['total']);
  } 
  
}


filtered(event){
    console.log(event.filteredValue);
    this.elementosFiltrados  = event.filteredValue;  
    this.sumarValores(this.elementosFiltrados);
}


actualizarRegistros(){
  let userData = JSON.parse(localStorage.getItem('userData'));
  let td = formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en');  
  let th = formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en');
  swal({
    title: '¿Desea actualizar estos  registros?',
    text: 'Va a actualizar registros entre el periodo  desde '+td+' hasta '+th,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#C5E1A5',
    cancelButtonColor: '#FF8A65',
    confirmButtonText: 'Si, actualizar!',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      this.selecteditems.forEach(element => {            
          element['usuario_audita_id']= userData['id']; 
      }); 
      this.actualizarRegistrosObraSocial();
    }

  })
}

actualizarRegistrosObraSocial(){

  let td = formatDate(this.fechaDesde, 'yyyy-MM-dd HH:mm', 'en');  
  let th = formatDate(this.fechaHasta, 'yyyy-MM-dd HH:mm', 'en');
  this.loading = true;

  try {
      this.practicaService.actualizarValoresPracticasByConvenio(td, th, 'PEN',this.DateForm.value.obra_social_id)    
      .subscribe(resp => {
        
          
        this.throwAlert('success','Se actualizaron los registros con éxito','','');
          this.loading = false;
          console.log(resp);
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



loadPresentacionMedicoACLISA(){
  
}

desafectarPresentacion(){
  console.log(this.selecteditemRegistro);
   try {
    this.practicaService.desafectarPresentacion(this.selecteditemRegistro['id'])    
    .subscribe(resp => {
      
        
      this.throwAlert('success','Se desafecto el registro  con éxito','','');
        this.loading = false;
        console.log(resp);
        this.loadlist();
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

exportarExcel(){

  this.loading = true;

  try {
      this.miServicio.getListadoPreFactura(this.selecteditems)    
      .subscribe(resp => {
        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {
          
          resp[i]['fecha_cobro'] = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
          if(( resp[i]['paciente_barra_afiliado'] !== '0')){
            resp[i]['numero_afiliado'] = resp[i]['numero_afiliado']+'/'+resp[i]['paciente_barra_afiliado'] ;
          }         
          i++;
        });
        this.sumarValores(resp);
          this.elementosPreFactura = resp;
         console.log(this.elementosPreFactura);     
          this.loading = false;
          const fecha_impresion = formatDate(new Date(), 'dd-MM-yyyy-mm', 'es-Ar');  
          this.excelService.exportAsExcelFile(  this.elementosPreFactura, 'listado_presentacion'+fecha_impresion);
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


generarPdfListadoMedico() {
  let td = formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en');  
  let th = formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en');
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let rounded:string;
  let total_facturado:number = 0;
  let total_iva:number = 0;
  let total_cantidad:number = 0;
  let total_cantidad_impresion:string = '';
  let fecha_impresion = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'es-Ar');  
  let i = 0;
  let userData = JSON.parse(localStorage.getItem('userData'));
  
  console.log(this.elementosPreFactura);
  for(i=0;i<this.elementosPreFactura.length;i++){
    total_cantidad = total_cantidad+Number(this.elementosPreFactura[i]['cantidad']);
    total_facturado =total_facturado+Number(this.elementosPreFactura[i]['valor_facturado']);
     console.log( this.elementosPreFactura[i]['cantidad']);
   }
    total_cantidad_impresion = this.dp.transform(total_cantidad, '1.0-0');
  if(this.selecteditems){
  var doc = new jsPDF('l');
  
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.setFontSize(9);
  doc.text(this.elementosPreFactura[0]['medico_nombre'], 60, 10, null, null, 'left');
  doc.setFontSize(6);
  doc.text('Periodo: '+td+' al '+th, pageSize.width -60, 10, null, null);
  doc.line(60, 13, pageWidth - 15, 13);
  doc.setFontSize(7);
  let nivel_facturacion = this.elementosPreFactura[0]['nivel'].substring(1,2);
  if(nivel_facturacion=== 'F'){doc.text('FACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'R'){doc.text('REFACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'C'){doc.text('COMPLEMENTARIA', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'T'){doc.text('TRANSPANTE', pageWidth-60, 20, null, null, 'left');}
  doc.text('Emitido : '+_fechaEmision, pageWidth-60, 35, null, null, 'left');
  doc.setFontSize(9);
  doc.text('Presentación a Obras Sociales', 60, 20, null, null, 'left');
  doc.setFontSize(7);
  doc.text(this.elementosPreFactura[0]['entidad_nombre'], 60, 25, null, null, 'left');
  doc.text('Obra social: '+this.elementosPreFactura[0]['obra_social_nombre'], 60, 30, null, null, 'left');

 
  doc.setFontSize(8);
  //doc.line(15, 35, pageWidth - 15, 35);
  let pageNumber = doc.internal.getNumberOfPages();
  doc.autoTable(this.columnsListadoTodos, this.elementosPreFactura,
    {
        margin: {horizontal: 5, vertical: 38},
        bodyStyles: {valign: 'top'},
        showHead: 'firstPage',
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},
        columnStyles: {descripcion: {columnWidth: 20}}
    });
   
    doc.setFontSize(8);
    let finalY = doc.autoTable.previous.finalY;
    doc.line(15, finalY+3, pageWidth - 15, finalY+3);
    doc.text(15, finalY+8,'Cantidad : ' +  total_cantidad_impresion); 
    doc.text(pageWidth-120, finalY+8,  'Importe : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-80, finalY+8, 'IVA : ' +  this.cp.transform(total_iva, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-50, finalY+8, 'Total : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    //doc.text(15, finalY+10, 'en letras : $' + this.numberToWordsPipe.transform(13) ); 
 
    
  const totalPagesExp = '{total_pages_count_string}';
  console.log(doc.putTotalPages);
  const footer = function(data) {
    let str = 'Page ' + data.pageCount;
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      str = str + ' of ' + totalPagesExp;
      console.log('test');
    }
    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
  };
    window.open(doc.output('bloburl'));  
 
  }
}



generarPdfListadoTodos() {
  let td = formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en');  
  let th = formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en');
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let rounded:string;
  let total_facturado:number = 0;
  let total_iva:number = 0;
  let total_cantidad:number = 0;
  let total_cantidad_impresion:string = '';
  let fecha_impresion = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'es-Ar');  
  let i = 0;
  let userData = JSON.parse(localStorage.getItem('userData'));

  for(i=0;i<this.elementosPreFactura.length;i++){
    
    total_cantidad = total_cantidad+Number(this.elementosPreFactura[i]['cantidad']);
    
    total_facturado =total_facturado+Number(this.elementosPreFactura[i]['valor_facturado']);
     console.log( this.elementosPreFactura[i]['cantidad']);
   }
    total_cantidad_impresion = this.dp.transform(total_cantidad, '1.0-0');
  if(this.selecteditems){
  var doc = new jsPDF('l');
  
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.setFontSize(9);
  doc.text('Clínica de la Visión', 60, 10, null, null, 'left');
  doc.setFontSize(6);
  doc.text('Periodo: '+td+' al '+th, pageSize.width -60, 10, null, null);
  doc.line(60, 13, pageWidth - 15, 13);
  doc.setFontSize(7);
  let nivel_facturacion = this.elementosPreFactura[0]['nivel'].substring(1,2);
  if(nivel_facturacion=== 'F'){doc.text('FACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'R'){doc.text('REFACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'C'){doc.text('COMPLEMENTARIA', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'T'){doc.text('TRANSPANTE', pageWidth-60, 20, null, null, 'left');}
  doc.text('Emitido : '+_fechaEmision, pageWidth-60, 35, null, null, 'left');
  doc.setFontSize(9);
  doc.text('Presentación a Obras Sociales', 60, 20, null, null, 'left');
  doc.setFontSize(7);
  doc.text(this.elementosPreFactura[0]['entidad_nombre'], 60, 25, null, null, 'left');
  doc.text('Obra social: '+this.elementosPreFactura[0]['obra_social_nombre'], 60, 30, null, null, 'left');

 
  doc.setFontSize(8);
  //doc.line(15, 35, pageWidth - 15, 35);
  let pageNumber = doc.internal.getNumberOfPages();
  doc.autoTable(this.columnsListadoTodos, this.elementosPreFactura,
    {
        margin: {horizontal: 5, vertical: 38},
        bodyStyles: {valign: 'top'},
        showHead: 'firstPage',
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},
        columnStyles: {text: {cellWidth: 'auto'}}
    });
   
    doc.setFontSize(8);
    let finalY = doc.autoTable.previous.finalY;
    doc.line(15, finalY+3, pageWidth - 15, finalY+3);
    doc.text(15, finalY+8,'Cantidad : ' +  total_cantidad_impresion); 
    doc.text(pageWidth-120, finalY+8,  'Importe : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-80, finalY+8, 'IVA : ' +  this.cp.transform(total_iva, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-50, finalY+8, 'Total : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    //doc.text(15, finalY+10, 'en letras : $' + this.numberToWordsPipe.transform(13) ); 
 
    
  const totalPagesExp = '{total_pages_count_string}';
  console.log(doc.putTotalPages);
  const footer = function(data) {
    let str = 'Page ' + data.pageCount;
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      str = str + ' of ' + totalPagesExp;
      console.log('test');
    }
    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
  };
    window.open(doc.output('bloburl'));  
 
  }
}

removeDuplicateUsingSet(arr){
  let unique_array = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});
return unique_array
}




generarPdfListadoCirugiaTodos() {
  let td = formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en');  
  let th = formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en');
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let rounded:string;
  let total_facturado:number = 0;
  let tmp_elementosPrefactura:Liquidacion[]=[];
  let tmp:any;
  let total_iva:number = 0;
  let total_cantidad:number = 0;
  let total_cantidad_impresion:string = '';
  let fecha_impresion = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'es-Ar');  
  let i = 0;
  let j = 0;
  let k = 0;
  let userData = JSON.parse(localStorage.getItem('userData'));
  let existe:boolean; // valida si ya esta insertado el codigo
 
  for(i=0;i<this.elementosPreFactura.length;i++){

    let practica = this.elementosPreFactura[i]['convenio_os_pmo_id'];

    for(j=0;j<this.elementosPreFactura.length;j++){

      if(this.elementosPreFactura[j]['convenio_os_pmo_id'] === practica){
       
        if((this.elementosPreFactura[j]['obra_social_practica_nombre'] === 'HONORARIOS')&&(this.elementosPreFactura[j]['complejidad'] !== 2)){
          if(this.elementosPreFactura[j]['operacion_cobro_distribucion_total'] === null){
            this.elementosPreFactura[i]['operacion_cobro_distribucion_total'] = 0;
          }else{
            if(this.selecteditems[0]['obra_social_nombre']=== 'DOS - OBRA SOCIAL PROVINCIA'){
              this.elementosPreFactura[i]['honorarios'] =  this.elementosPreFactura[j]['operacion_cobro_distribucion_total'];
            }else{
              this.elementosPreFactura[i]['honorarios'] =  this.cp.transform((((this.elementosPreFactura[j]['operacion_cobro_distribucion_total'])*20)/80), '', 'symbol-narrow', '1.2-2'); 
              
            }
            
          }
       
        }
        if((this.elementosPreFactura[j]['obra_social_practica_nombre'] === 'GASTOS')&&(this.elementosPreFactura[j]['complejidad'] !== 2)){
          if(this.elementosPreFactura[j]['operacion_cobro_distribucion_total'] === null){
            this.elementosPreFactura[i]['operacion_cobro_distribucion_total'] = 0;
          }else{
            console.log(this.selecteditems[0]['obra_social_id']);
            if(this.selecteditems[0]['obra_social_nombre'] == 'DOS - OBRA SOCIAL PROVINCIA'){
             console.log('obra social');
             this.elementosPreFactura[i]['gastos'] =  this.elementosPreFactura[j]['operacion_cobro_distribucion_total'];
            }else{
              console.log('coseguro');
              this.elementosPreFactura[i]['gastos'] =  this.cp.transform((((this.elementosPreFactura[j]['operacion_cobro_distribucion_total'])*20)/80), '', 'symbol-narrow', '1.2-2'); 
              
              
            }
          
          }
        }
        if(this.elementosPreFactura[j]['complejidad'] === 2){         
            this.elementosPreFactura[i]['gastos'] =  this.elementosPreFactura[j]['valor_facturado'];
            this.elementosPreFactura[i]['honorarios'] =  '0.00';
          }
       
        
      
      }
    }
    
     
    }
    

    // vuelvo a generar un  arreglo quitando los repetidos
 //  let mp_elementosPrefactura = this.removeDuplicateUsingSet(this.elementosPreFactura);
   //console.log(mp_elementosPrefactura);

   const filteredArr = this.elementosPreFactura.reduce((acc, current) => {
    const x = acc.find(item => item['operacion_cobro_practica_id'] === current['operacion_cobro_practica_id']);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  
  console.log(filteredArr);
  for(i=0;i<filteredArr.length;i++){
    total_facturado =total_facturado+ Number(filteredArr[i]['valor_facturado'])+Number(filteredArr[i]['categorizacion']);
    filteredArr[i]['valor_facturado']=   this.cp.transform(Number(filteredArr[i]['valor_facturado'])+Number(filteredArr[i]['categorizacion']), '', 'symbol-narrow', '1.2-2') ;
    total_cantidad = total_cantidad+Number(filteredArr[i]['cantidad']);
    
  }
    total_cantidad_impresion = this.dp.transform(total_cantidad, '1.0-0');
  if(this.selecteditems){
  var doc = new jsPDF('l');
  
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.setFontSize(9);
  doc.text('Clínica de la Visión', 60, 10, null, null, 'left');
  doc.setFontSize(6);
  doc.text('Periodo: '+td+' al '+th, pageSize.width -60, 10, null, null);
  doc.line(60, 13, pageWidth - 15, 13);
  doc.setFontSize(7);
  let nivel_facturacion = this.elementosPreFactura[0]['nivel'].substring(1,2);
  if(nivel_facturacion=== 'F'){doc.text('FACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'R'){doc.text('REFACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'C'){doc.text('COMPLEMENTARIA', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'T'){doc.text('TRANSPANTE', pageWidth-60, 20, null, null, 'left');}
  doc.text('Emitido : '+_fechaEmision, pageWidth-60, 35, null, null, 'left');
  doc.setFontSize(9);
  doc.text('Presentación a Obras Sociales', 60, 20, null, null, 'left');
  doc.setFontSize(7);
  doc.text(this.elementosPreFactura[0]['entidad_nombre'], 60, 25, null, null, 'left');
  doc.text('Obra social: '+this.elementosPreFactura[0]['obra_social_nombre'], 60, 30, null, null, 'left');

 
  doc.setFontSize(8);
  //doc.line(15, 35, pageWidth - 15, 35);
  let pageNumber = doc.internal.getNumberOfPages();
  doc.autoTable(this.columnsListadoCirugiaTodos, filteredArr,
    {
        margin: {horizontal: 5, vertical: 38},
        bodyStyles: {valign: 'top'},
        showHead: 'firstPage',
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},
        columnStyles: {text: {cellWidth: 'auto'}}
    });
   
    doc.setFontSize(8);
    let finalY = doc.autoTable.previous.finalY;
    doc.line(15, finalY+3, pageWidth - 15, finalY+3);
    doc.text(15, finalY+8,'Cantidad : ' +  total_cantidad_impresion); 
    doc.text(pageWidth-120, finalY+8,  'Importe : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-80, finalY+8, 'IVA : ' +  this.cp.transform(total_iva, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-50, finalY+8, 'Total : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    //doc.text(15, finalY+10, 'en letras : $' + this.numberToWordsPipe.transform(13) ); 
 
    
  const totalPagesExp = '{total_pages_count_string}';
  console.log(doc.putTotalPages);
  const footer = function(data) {
    let str = 'Page ' + data.pageCount;
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      str = str + ' of ' + totalPagesExp;
      console.log('test');
    }
    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
  };
    window.open(doc.output('bloburl'));  
 
  }
}



generarPdfListadoMedicoIVA() {
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let td = formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en');  
  let th = formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en');
  let rounded:string;
  let total_facturado:number = 0;
  let total_iva:number = 0;
  let total_cantidad:number = 0;
  let total_sin_iva:number = 0;
  let total_cantidad_impresion:string = '';
  let fecha_impresion = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'es-Ar');  
  let i = 0;
  let userData = JSON.parse(localStorage.getItem('userData'));
  
  console.log(this.elementosPreFactura);
  for(i=0;i<this.elementosPreFactura.length;i++){
    total_cantidad = total_cantidad+Number(this.elementosPreFactura[i]['cantidad']);
    total_facturado =total_facturado+Number(this.elementosPreFactura[i]['valor_facturado']);
     console.log( this.elementosPreFactura[i]['cantidad']);
   }
   total_iva = total_facturado*0.105;
   total_sin_iva = total_facturado;
   total_facturado = total_facturado+total_iva;
    total_cantidad_impresion = this.dp.transform(total_cantidad, '1.0-0');
  if(this.selecteditems){
  var doc = new jsPDF('l');
  
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.setFontSize(9);
  doc.text(this.elementosPreFactura[0]['medico_nombre'], 60, 10, null, null, 'left');
  doc.setFontSize(6);
  doc.text('Periodo: '+td+' al '+th, pageSize.width -60, 10, null, null);
  doc.line(60, 13, pageWidth - 15, 13);
  doc.setFontSize(7);
  let nivel_facturacion = this.elementosPreFactura[0]['nivel'].substring(1,2);
  if(nivel_facturacion=== 'F'){doc.text('FACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'R'){doc.text('REFACTURACION', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'C'){doc.text('COMPLEMENTARIA', pageWidth-60, 20, null, null, 'left');}
  if(nivel_facturacion=== 'T'){doc.text('TRANSPANTE', pageWidth-60, 20, null, null, 'left');}
  doc.text('Emitido : '+_fechaEmision, pageWidth-60, 35, null, null, 'left');
  doc.setFontSize(9);
  doc.text('Presentación a Obras Sociales', 60, 20, null, null, 'left');
  doc.setFontSize(7);
  doc.text(this.elementosPreFactura[0]['entidad_nombre'], 60, 25, null, null, 'left');
  doc.text('Obra social: '+this.elementosPreFactura[0]['obra_social_nombre'], 60, 30, null, null, 'left');

 
  doc.setFontSize(8);
  //doc.line(15, 35, pageWidth - 15, 35);
  let pageNumber = doc.internal.getNumberOfPages();
  doc.autoTable(this.columnsListadoTodos, this.elementosPreFactura,
    {
        margin: {horizontal: 5, vertical: 38},
        bodyStyles: {valign: 'top'},
        showHead: 'firstPage',
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},
        columnStyles: {text: {cellWidth: 'auto'}}
    });
   
    doc.setFontSize(8);
    let finalY = doc.autoTable.previous.finalY;
    doc.line(15, finalY+3, pageWidth - 15, finalY+3);
    doc.text(15, finalY+8,'Cantidad : ' +  total_cantidad_impresion); 
    doc.text(pageWidth-120, finalY+8,  'Importe : ' + this.cp.transform(total_sin_iva, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-80, finalY+8, 'IVA : ' +  this.cp.transform(total_iva, '', 'symbol-narrow', '1.2-2')); 
    doc.text(pageWidth-50, finalY+8, 'Total : ' + this.cp.transform(total_facturado, '', 'symbol-narrow', '1.2-2')); 
    //doc.text(15, finalY+10, 'en letras : $' + this.numberToWordsPipe.transform(13) ); 
 
    
  const totalPagesExp = '{total_pages_count_string}';
  console.log(doc.putTotalPages);
  const footer = function(data) {
    let str = 'Page ' + data.pageCount;
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      str = str + ' of ' + totalPagesExp;
      console.log('test');
    }
    doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
  };
    window.open(doc.output('bloburl'));  
 
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
