import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef, MessageService, DialogService } from 'primeng/api';
import { formatDate, CurrencyPipe, DecimalPipe } from '@angular/common';
import { LiquidacionService } from './../../../../services/liquidacion.service';
import { Liquidacion } from './../../../../models/liquidacion.model';
import { PopupOperacionCobroDetalleComponent } from './../popup-operacion-cobro-detalle/popup-operacion-cobro-detalle.component';
import { DistribucionMedico } from './../../../../models/distribucion-medico.model';
import { logo_clinica } from './../../../../config/config';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-popup-operacion-cobro-distribucion-detalle',
  templateUrl: './popup-operacion-cobro-distribucion-detalle.component.html',
  styleUrls: ['./popup-operacion-cobro-distribucion-detalle.component.css'],
  providers: [MessageService,DialogService]
})
export class PopupOperacionCobroDistribucionDetalleComponent implements OnInit {
  cols: any[];
  columns: any[];
  elementos:any[] = null;
  TOTAL_OPERA:number = 0;
  TOTAL_AYUDA:number = 0;
  TOTAL_AYUDA2:number = 0;
  TOTAL_CLINICA:number = 0;
  TOTAL:number = 0;
  elementosFiltrados:any[] = null;
  selecteditems:any[] = [];
  distribucionMedicos:any[] = [];
  distribucionMedico:DistribucionMedico;

  constructor( public ref: DynamicDialogRef, public config: DynamicDialogConfig, private liquidacionService:LiquidacionService, private messageService: MessageService ,public dialogService: DialogService) { 

    this.cols = [
      { field: 'operacion_cobro_id', header: 'O.C', width: '8%'} ,
      { field: 'obra_social_nombre', header: 'O.S',  width: '20%' },
      { field: 'paciente_apellido', header: 'Paciente', width: '15%'} ,
      { field: 'dni', header: 'DNI', width: '8%'} ,
      { field: 'fecha_cobro', header: 'Fecha', width: '10%'} ,

      { field: 'medico_opera', header: 'Médico opera', width: '15%'} ,  
      { field: 'medico_opera_valor', header: 'Médico opera $', width: '10%'} ,
      { field: 'medico_opera_porcentaje', header: 'Médico opera %' , width: '6%'} ,

      { field: 'medico_ayuda', header: 'Médico ayuda' , width: '15%'} ,
      { field: 'medico_ayuda_valor', header: 'Médico ayuda $' , width: '10%'} ,
      { field: 'medico_ayuda_porcentaje', header: 'Médico ayuda %',  width: '6%' },

      { field: 'medico_ayuda2', header: 'Médico ayuda 2' , width: '15%'} ,
      { field: 'medico_ayuda2_valor', header: 'Médico ayuda 2 $',  width: '10%' },
      {field: 'medico_ayuda2_porcentaje', header: 'Médico ayuda 2 %' , width: '6%' },

      { field: 'medico_clinica', header: 'Clínica ',  width: '15%' },
      { field: 'medico_clinica_valor', header: 'Clínica $',  width: '10%' },
      { field: 'medico_clinica_porcentaje', header: 'Clínica %',  width: '6%' },
      { field: 'valor_distribuido', header: 'Total',  width: '10%' },
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

  }

  ngOnInit() {
    console.log(this.config.data);
    this.elementos = this.config.data;
    this.sumarValores(this.elementos);
  }

  
  filtered(event){
    console.log(event.filteredValue);
    this.elementosFiltrados  = event.filteredValue;  
    this.sumarValores(this.elementosFiltrados);
}


sumarValores(vals:any){
  let i:number;
  //console.log(vals[1]['valor_facturado']);
  console.log(vals !== undefined);
  this.TOTAL_OPERA = 0;
  this.TOTAL_AYUDA = 0;
  this.TOTAL_AYUDA2 = 0;
  this.TOTAL_CLINICA = 0;
  this.TOTAL = 0;

  for(i=0;i<vals.length;i++){
      this.TOTAL_OPERA = this.TOTAL_OPERA+ Number(vals[i]['medico_opera_valor']);
      this.TOTAL_AYUDA = this.TOTAL_AYUDA+ Number(vals[i]['medico_ayuda_valor']);
      this.TOTAL_AYUDA2 = this.TOTAL_AYUDA2+ Number(vals[i]['medico_ayuda2_valor']);
      this.TOTAL_CLINICA = this.TOTAL_CLINICA+ Number(vals[i]['medico_clinica_valor']);
      this.TOTAL = this.TOTAL+ Number(vals[i]['valor_distribuido']);
  }

}


verDetalle(agendaTurno:any){

  console.log(agendaTurno);
  let liquidacion:Liquidacion;
  liquidacion = new Liquidacion(agendaTurno['operacion_cobro_id'],'','','','','','',0,0,'','',[],'','','',0);
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

public exportarExcel(){
  const fecha_impresion = formatDate(new Date(), 'dd-MM-yyyy-mm', 'es-Ar');  
  for(let i=0; i<this.selecteditems.length; i++){
    this.distribucionMedico = new DistribucionMedico(
      this.selecteditems[i]['obra_social_nombre'],
      this.selecteditems[i]['medico_opera'],
      this.selecteditems[i]['medico_opera_porcentaje'],
      this.selecteditems[i]['medico_opera_valor'],
      this.selecteditems[i]['medico_ayuda'],
      this.selecteditems[i]['medico_ayuda_porcentaje'],
      this.selecteditems[i]['medico_ayuda_valor'],
      this.selecteditems[i]['medico_ayuda2'],
      this.selecteditems[i]['medico_ayuda2_porcentaje'],
      this.selecteditems[i]['medico_ayuda2_valor'],
      this.selecteditems[i]['medico_clinica'],
      this.selecteditems[i]['medico_clinica_porcentaje'],
      this.selecteditems[i]['medico_clinica_valor'],
      this.selecteditems[i]['valor_distribuido'],
      this.selecteditems[i]['total'],
      this.selecteditems[i]['fecha_cobro'],
      this.selecteditems[i]['operacion_cobro_id'],
      this.selecteditems[i]['paciente_apellido'],
      this.selecteditems[i]['dni']);
      this.distribucionMedicos.push(this.distribucionMedico);

  }
  this.liquidacionService.exportAsExcelFile(  this.distribucionMedicos, 'listado_presentacion'+fecha_impresion);
}


generarPdfListado(elemento) {

  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');
  let rounded:string;
  let total_facturado:number = 0;
  let total_iva:number = 0;
  let total_cantidad:number = 0;
  let total_sin_iva:number = 0;
  let total_cantidad_impresion:string = '';
  let fecha_impresion = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'es-Ar');  
  let i = 0;
  let userData = JSON.parse(localStorage.getItem('userData'));
  
  console.log(elemento);

  
  if(this.selecteditems){
  var doc = new jsPDF('l');
  
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  doc.addImage(logo_clinica, 'PNG', 10, 10, 40, 11);
  doc.setLineWidth(0.4);
  doc.setFontSize(9);
 
  doc.setFontSize(6);  
  doc.line(60, 13, pageWidth - 15, 13);
  doc.setFontSize(7);

  

 
  doc.setFontSize(8);
  //doc.line(15, 35, pageWidth - 15, 35);
  let pageNumber = doc.internal.getNumberOfPages();
  doc.autoTable(this.columns, elemento,
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
}

