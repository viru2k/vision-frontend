import { Component, OnInit,Output, EventEmitter,ViewChild, PipeTransform, ElementRef, OnDestroy } from '@angular/core';
import { calendarioIdioma, logo_clinica } from '../../../../config/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert2';

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
import { MessageService, SelectItem } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';
import { formatDate, CurrencyPipe, DecimalPipe } from '@angular/common';
import {OverlayPanelModule, OverlayPanel} from 'primeng/overlaypanel';
import { FacturaElectronica } from '../../../../models/factura-electronica.model';
import { Paciente } from '../../../../../../../psicologo-gestion/src/app/models/paciente.model';
import { PopupPacienteObrasocialComponent } from '../../../../shared/components/popups/popup-paciente-obrasocial/popup-paciente-obrasocial.component';
import { FacturacionService } from './../../../../services/facturacion.service';
@Component({
  selector: 'app-otras-acciones',
  templateUrl: './otras-acciones.component.html',
  styleUrls: ['./otras-acciones.component.css'], 
  providers: [MessageService,DialogService]
})
export class OtrasAccionesComponent implements OnInit {
  DateForm:FormGroup;
  tipo_busqueda:string = 'fecha';
  columns: any[];
  selecteditemRegistro:FacturaElectronica;
  selecteditems:FacturaElectronica[];
  elementos:FacturaElectronica[] = [];
  elemento:FacturaElectronica = null;
  elementosFiltrados:FacturaElectronica[] = [];
  elementosPDF:any[] = [];
  cols:any;
  fecha:Date;
  _fecha:string;
  fechaDesde:Date;
  _fechaDesde:string;
  fechaHasta:Date;
  _fechaHasta:string;
  es:any;
  loading: boolean;
  paciente_nombre:string;

  constructor(private facturacionService:FacturacionService, private messageService: MessageService ,public dialogService: DialogService,private cp: CurrencyPipe, private dp: DecimalPipe) {

    this.cols = [
              
      { field: 'accion', header: 'Accion' , width: '6%'} ,
      { field: 'nombreyapellido', header: 'Facturar a ' , width: '15%'},
      { field: 'descripcion', header: 'Tipo Fac.',  width: '8%' },
      { field: 'punto_vta', header: 'Pto. Vta.',  width: '5%' },
      { field: 'factura_numero', header: 'factura nº' , width: '8%' },
      { field: 'fecha', header: 'Fecha',  width: '7%' },
      { field: 'factura_cliente', header: 'Cliente',  width: '20%' },      
      { field: 'factura_documento_comprador_descripcion', header: 'Tipo',  width: '5%' },
      { field: 'factura_documento', header: 'Documento' , width: '8%'}, 
      { field: 'importe_exento_iva', header: 'Imp. exc' , width: '8%'},      
      { field: 'importe_gravado', header: 'Imp. grav' , width: '10%'},
      { field: 'importe_iva', header: 'IVA' , width: '8%'},
      { field: 'importe_total' , header: 'Total' , width: '10%'},
        
     ];    


     this.columns = [
      {title: 'Descripcion', dataKey: 'descripcion'},
      {title: 'Cant', dataKey: 'cantidad'},
      {title: 'Precio unit.', dataKey: 'precio_unitario'},
      {title: 'Alic.', dataKey: 'alicuota_descripcion'},
      {title: 'Iva', dataKey: 'iva'},
      {title: 'Importe', dataKey: 'total_renglon'},
  ];
     
     this.DateForm = new FormGroup({
      'fecha_desde': new FormControl('', Validators.required), 
      'fecha_hasta': new FormControl('', Validators.required)      
      });

   }

  ngOnInit() {
    this.es = calendarioIdioma;
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    this.DateForm.patchValue({fecha_desde: this.fechaDesde});
    this.DateForm.patchValue({fecha_hasta: this.fechaHasta});
  }

  padLeft(text:string, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
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

  accion(event:FacturaElectronica,overlaypanel: OverlayPanel,elementos:FacturaElectronica){
    if(elementos){
      this.selecteditemRegistro = elementos;
    }

      console.log(this.selecteditemRegistro);
      overlaypanel.toggle(event);
    }

    
  filtered(event){
    console.log(event.filteredValue);
    this.elementosFiltrados  = event.filteredValue;      
}

 

buscarPaciente(){
  this.loading = true; 
    try { 
        this.facturacionService.GetFacturaByNameOrDocumento(this.paciente_nombre)
        .subscribe(resp => {
          let i:number = 0;
          let resultado = resp;
          resultado.forEach(element => {
            resp[i]['factura_numero'] =  this.padLeft(resp[i]['factura_numero'], '0', 8);
            resp[i]['punto_vta'] =  this.padLeft(resp[i]['punto_vta'], '0', 4);
            i++;
          });
        this.elementos = resp;
        this.loading = false;        
        console.log(this.elementos);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            swal({
              toast: false,
              type: 'error',
              title: 'Algo salio mal...',
              text:error.status+' '+error.message ,
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
          });    
    } catch (error) {
      swal({
        toast: false,
        type: 'error',
        title: 'Algo salio mal...',
        text:error.status+' '+error.message ,
        showConfirmButton: false,
        timer: 2000
      });
    }
}


  buscar(){
    console.log()
    this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd', 'en');
    this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd', 'en');  
    this.loading = true; 
    if(this.tipo_busqueda === 'fecha'){
    try { 
        this.facturacionService.GetFacturaBetweenDates(this._fechaDesde, this._fechaHasta)
        .subscribe(resp => {
          let i:number = 0;
          let resultado = resp;
          resultado.forEach(element => {
            resp[i]['factura_numero'] =  this.padLeft(resp[i]['factura_numero'], '0', 8);
            resp[i]['punto_vta'] =  this.padLeft(resp[i]['punto_vta'], '0', 4);
            i++;
          });
        this.elementos = resp;
        this.loading = false;        
        console.log(this.elementos);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            swal({
              toast: false,
              type: 'error',
              title: 'Algo salio mal...',
              text:error.status+' '+error.message ,
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
          });    
    } catch (error) {
      swal({
        toast: false,
        type: 'error',
        title: 'Algo salio mal...',
        text:error.status+' '+error.message ,
        showConfirmButton: false,
        timer: 2000
      });
    }
  }else{
    this.buscarPaciente();
  }

  }

  realizarNotaCredito(){


    this.loading = true; 
    try { 
        this.facturacionService.crearFacturaNotaCredito(this.selecteditemRegistro)
        .subscribe(resp => {
          let i:number = 0;
          let resultado = resp;
        
          console.log(resp);
          this.loading = false;          
          
      
       
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            swal({
              toast: false,
              type: 'error',
              title: 'Algo salio mal...',
              text:error.status+' '+error.message ,
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
          });    
    } catch (error) {
      swal({
        toast: false,
        type: 'error',
        title: 'Algo salio mal...',
        text:error.status+' '+error.message ,
        showConfirmButton: false,
        timer: 2000
      });
    }
    


  }



  imprimir(){


    this.loading = true; 
    try { 
        this.facturacionService.GetFacturaById(this.selecteditemRegistro['id'])
        .subscribe(resp => {
          let i:number = 0;
          let resultado = resp;
          this.elementosPDF = resp;
          console.log(this.elementosPDF);
          this.generarPDF();
        /*  resultado.forEach(element => {
            resp[i]['factura_numero'] =  this.padLeft(resp[i]['factura_numero'], '0', 8);
            resp[i]['punto_vta'] =  this.padLeft(resp[i]['punto_vta'], '0', 4);
            i++;
          });*/
      //  this.elementos = resp;
        this.loading = false;
       
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            swal({
              toast: false,
              type: 'error',
              title: 'Algo salio mal...',
              text:error.status+' '+error.message ,
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
          });    
    } catch (error) {
      swal({
        toast: false,
        type: 'error',
        title: 'Algo salio mal...',
        text:error.status+' '+error.message ,
        showConfirmButton: false,
        timer: 2000
      });
    }
    

    
  }


  
generarPDF(){


  // GENERO EL FORMATO DE LOS COBROS

  
  let i = 0;
  for(i= 0; i< this.elementosPDF.length; i++){
      this.elementosPDF[i]['alicuota'] = this.cp.transform(this.elementosPDF[i]['alicuota'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['iva'] = this.cp.transform(this.elementosPDF[i]['iva'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['precio_unitario'] = this.cp.transform(this.elementosPDF[i]['precio_unitario'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['total_renglon'] = this.cp.transform(this.elementosPDF[i]['total_renglon'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['total_sin_iva'] = this.cp.transform(this.elementosPDF[i]['total_sin_iva'], '', 'symbol-narrow', '1.2-2');
      
  }

  this._fecha = formatDate(this.elementosPDF[0]['fecha'], 'dd/MM/yyyy', 'en');
  //let inicio_actividades =  formatDate(this.elementosPDF[0]['fecha_alta_afip'], 'dd/MM/yyyy', 'en'); 
  var doc = new jsPDF();  

  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
  //borde contenedor
  doc.setLineWidth(0.3);
  doc.setDrawColor(207, 216, 220);
  doc.line(10, 10, pageWidth - 10, 10); //linea superior horizontal
  doc.line(10, 10, 10, 50); // linea vertical izquierda
  doc.line(pageWidth - 10, 10, pageWidth - 10, 50); // linea vertical derecha
  doc.line(10, 50, pageWidth - 10, 50); //linea inferior horizontal
  
  //borde factura letra  
  doc.line((pageWidth/2)-6,10 , (pageWidth/2)-6, 23);  // linea vertical izquierda
  doc.line((pageWidth/2)+6,10 , (pageWidth/2)+6, 23);  // linea vertical derecha
  doc.line((pageWidth/2)-6,23 , (pageWidth/2)+6, 23); //linea inferior horizontal

  //borde fecha emision desde hasta

  doc.line(10, 55, pageWidth - 10, 55); //linea superior horizontal
  doc.line(10, 55, 10, 63); // linea vertical izquierda
  doc.line(pageWidth - 10, 55, pageWidth - 10, 63); // linea vertical derecha
  doc.line(10, 63, pageWidth - 10, 63); //linea inferior horizontal

  // borde datos del clinete

  doc.line(10, 65, pageWidth - 10, 65); //linea superior horizontal
  doc.line(10, 65, 10, 90); // linea vertical izquierda
  doc.line(pageWidth - 10, 65, pageWidth - 10, 90); // linea vertical derecha
  doc.line(10, 90, pageWidth - 10, 90); //linea inferior horizontal



  doc.line(10, pageHeight - 25,  10 , pageHeight - 15); // linea vertical izquierda
  doc.line(pageWidth - 10, pageHeight -25, pageWidth - 10, pageHeight -15); // linea vertical derecha
  doc.line(10, pageHeight -25, pageWidth - 10, pageHeight -25); //linea superior horizontal
  doc.line(10, pageHeight -15, pageWidth - 10, pageHeight -15); //linea inferior horizontal

  

// linea divisoria
doc.line(pageWidth/2, 23, pageWidth /2, 50);
  doc.setFontSize(19);
  doc.setFontStyle("bold");
  doc.text(this.elementosPDF[0]['letra'], (pageWidth/2)-2.5, 17); 
  doc.setFontStyle("normal");
  doc.setFontSize(6);
  doc.text('COD. '+this.elementosPDF[0]['comprobante_codigo'], (pageWidth/2)-4.5, 21); 
  doc.addImage(logo_clinica, 'PNG', 15, 12, 60.06, 12.87);
  doc.setFontSize(9);
  
  doc.text(this.elementosPDF[0]['nombreyapellido'], 15, 35); 
  doc.setFontStyle("normal");
  doc.setFontSize(9);
  console.log(this.elementosPDF[0]);
  doc.text(this.elementosPDF[0]['domicilio'], 15, 40); 
  doc.text(this.elementosPDF[0]['categoria_iva'],15 , 45); 
  // izquierda
  doc.setFontSize(9);
  doc.text('Comprobante: '+ this.padLeft(this.elementosPDF[0]['punto_vta'],'0', 4)+' - '+ 
  this.padLeft(this.elementosPDF[0]['factura_numero'],'0', 8), (pageWidth/2)+20, 20); 
  doc.setFontSize(9);
  doc.text('Fecha Emisión: '+ this._fecha, (pageWidth/2)+20, 25); 
  doc.text('C.U.I.T.: '+ this.elementosPDF[0]['cuit'], (pageWidth/2)+20, 30); 
  doc.text('Ingresos brutos: '+ this.elementosPDF[0]['ing_brutos'], (pageWidth/2)+20, 35); 
  doc.text('Inicio de actividades: '+ this.elementosPDF[0]['fecha_alta_afip'], (pageWidth/2)+20, 40); 
  doc.setLineWidth(0.4);

  //DATOS DE FECHA

  this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd', 'en');
  this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd', 'en');
  doc.text('Período Facturado   Desde: '+formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en'), 15, 60); 
  doc.text('Hasta: '+formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en'), pageWidth/2, 60); 

  //DATOS DEL CLIENTE

  doc.text(this.elementosPDF[0]['factura_comprobante_descripcion']+' : '+ this.elementosPDF[0]['factura_documento'], 15, 73); 
  doc.text('Cliente: '+  this.elementosPDF[0]['factura_cliente'], 15, 78); 
  doc.text('Condición frente al IVA: '+ this.elementosPDF[0]['categoria_iva'], 15, 83);  // PENDIENTE

  // TOTAL DE LA FACTURA
  doc.setFontSize(10);
  doc.setFontStyle("bold");
  doc.text('Subtotal: '+ this.cp.transform(this.elementosPDF[0]['importe_gravado'], '', 'symbol-narrow', '1.2-2'), 15, pageHeight -18); 
  if((this.elementosPDF[0]['factura_comprobante_id'] === 6)||(this.elementosPDF[0]['factura_comprobante_id'] === 11)){}else{
    doc.text('Imp. IVA: '+ this.cp.transform(this.elementosPDF[0]['importe_iva'], '', 'symbol-narrow', '1.2-2'), 75, pageHeight -18); 
  }
  
  doc.text('Total: '+ this.cp.transform(this.elementosPDF[0]['importe_total'], '', 'symbol-narrow', '1.2-2'), pageWidth-50, pageHeight -18); 
  // PIE DE LA FACTURA
  doc.text('CAE: '+ this.elementosPDF[0]['cae'], 15, pageHeight -5); 
  doc.text('Fecha de vencimiento de CAE: '+ formatDate(this.elementosPDF[0]['cae_vto'], 'dd/MM/yyyy', 'en') , (pageWidth/2)+20, pageHeight -5); 
  doc.setFontStyle("normal");
doc.autoTable(this.columns, this.elementosPDF,
  {
    
      margin: {vertical: 95, right:0,horizontal: -10},
      bodyStyles: {valign: 'top'},
      styles: {fontSize: 8,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},       
      columnStyles: {descripcion: {columnWidth: 88}, cantidad: {columnWidth: 10}, precio_unitario: {columnWidth: 25},
      alicuota_descripcion: {columnWidth: 12},  iva: {columnWidth: 25}, total_renglon: {columnWidth: 25} }
  });
 window.open(doc.output('bloburl'));    
 this.elementosPDF = [];
  }
}
