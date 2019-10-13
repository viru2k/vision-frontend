import { Component, OnInit } from '@angular/core';
import { FacturacionService } from './../../../../services/facturacion.service';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
import swal from 'sweetalert2';
import { calendarioIdioma, logo_clinica } from './../../../../config/config';
import { PopupFacturaRenglonComponent } from './../../../factura/factura-electronica/popups/popup-factura-renglon/popup-factura-renglon.component';
import { DialogService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FacturaElectronicaRenglon } from './../../../../models/factura-electronica-renglon.model';
import { FacturaElectronica } from './../../../../models/factura-electronica.model';
import { formatDate } from '@angular/common';
import { FacturaAlicuotaAsociada } from '../../../../models/factura_alicuota_asociada.model';

@Component({
  selector: 'app-factura-electronica',
  templateUrl: './factura-electronica.component.html',
  styleUrls: ['./factura-electronica.component.css'], 
  providers: [MessageService,DialogService]
})
export class FacturaElectronicaComponent implements OnInit {
  
  cols: any[];
  loading: boolean;
  loadingspinner: boolean;
  elementos:FacturaElectronicaRenglon[] = [];
  
  elementosAlicuota:any[] = null;
  elementosMedicos:any[] = null;
  elementosComprobante:any[] = null;
  elementosConcepto:any[] = null;
  elementosDocumento:any[] = null;
  elementosPtoVta:any[] = null;  
  elementosCondicionIva:any[]= null;
  selecteditems:FacturaElectronicaRenglon = null;
  elementoAlicuota:number= null;
  elementoMedicos:any= null;
  elementoComprobante:number= null;
  elementoConcepto:number= null;
  elementoDocumento:number= null;
  elementoPtoVta:number= null;  
  elementoCondicionIva:number= null;  
  selecteditemRegistro:FacturaElectronicaRenglon = null;
  selecteditemRenglon:FacturaElectronicaRenglon= null;
  facturaAlicuotaAsociada:FacturaAlicuotaAsociada[] = [];

  pto_vta:string = '0';
  factura_numero:string = '0';
  factura_numero_ceros:string = '0';
  nrodocumento:string = '0';
  cliente:string = '';
  CAE:string;
  CAE_vto:string;
  es:any;
  fecha:Date;
  _fecha:string;
  fechaDesde:Date;
  _fechaDesde:string;
  fechaHasta:Date;
  _fechaHasta:string;

  /***valores totales */
  cantidad:number = 0;
  subtotal:number = 0;
  subtotal_excento:number = 0;
  subtotal_iva:number = 0;
  total:number = 0;

  constructor(private facturacionService: FacturacionService, public dialogService: DialogService,private messageService: MessageService ) { 

    this.cols = [

      { field: 'descripcion', header: 'Descripción',  width: '55%' },
      { field: 'cantidad', header: 'Cantidad',  width: '10%' },
      {field: 'precio_unitario', header: 'P. unitario' , width: '10%' },
      { field: 'alicuota_descripcion', header: 'Alícuota',  width: '9%' },
      { field: 'iva', header: 'IVA',  width: '10%' },
      { field: 'total_renglon', header: 'Subtotal',  width: '10%' },
      { field: 'accion', header: 'Accion' , width: '6%'} ,
     ];  
  }

  ngOnInit() {
    this.es = calendarioIdioma;
    this.fecha = new Date();
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    this.Alicuota();
   this.getMedicosFacturan();
    this.Concepto();
    this.Documento();
    this.PtoVta();
    this.CategoriaIva();
    
  }


  accion(event:FacturaElectronicaRenglon,overlaypanel: OverlayPanel,elementos:FacturaElectronicaRenglon){
    if(elementos){
      this.selecteditemRegistro = elementos;
    }
  
      console.log(this.selecteditemRegistro);
      overlaypanel.toggle(event);
    }
  
  actualizarFecha(event){
    console.log(event);
    this.fecha = event;
    console.log(new Date(this.fecha));
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

  TipoComprobantesDisponibles(){

    try {
      this.facturacionService.TipoComprobantesDisponibles('24')
      .subscribe(resp => {      
          this.elementos = resp;        
          this.loading = false;
          console.log(resp);
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  TipoConceptosDisponibles(){

    try {
      this.facturacionService.TipoConceptosDisponibles('24')
      .subscribe(resp => {      
          this.elementos = resp;
          this.loading = false;
          console.log(resp);
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  TipoDocumentosDisponibles(){

    try {
      this.facturacionService.TipoDocumentosDisponibles('24')
      .subscribe(resp => {      
          this.elementos = resp;
          this.loading = false;
          console.log(resp);
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  Alicuota(){

    try {
      this.facturacionService.Alicuota()
      .subscribe(resp => {      
          this.elementosAlicuota = resp;
          this.loading = false;
          console.log( this.elementosAlicuota);
          
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }


  
  getMedicosFacturan(){

    try {
      this.facturacionService.getMedicosFacturan()
      .subscribe(resp => {      
          this.elementosMedicos = resp;
          this.loading = false;
          console.log( this.elementosMedicos);
          this.elementoMedicos = this.elementosMedicos['0'];
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  
  Comprobante(){

    try {
      this.facturacionService.Comprobante()
      .subscribe(resp => {      
          this.elementosComprobante = resp;
         
          this.loading = false;
          console.log( this.elementosComprobante);
          this.elementoComprobante = this.elementosComprobante[3];
          if(this.elementoPtoVta){
            this.obtenerUltimaFactura();
          }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  
  Concepto(){

    try {
      this.facturacionService.Concepto()
      .subscribe(resp => {      
          this.elementosConcepto = resp;
          this.loading = false;
          console.log(this.elementosConcepto);
          this.elementoConcepto = this.elementosConcepto[2];
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  
  Documento(){

    try {
      this.facturacionService.Documento()
      .subscribe(resp => {      
          this.elementosDocumento = resp;
          this.loading = false;
          console.log(  this.elementosDocumento);
           this.elementoDocumento = this.elementosDocumento[7];
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  
  PtoVta(){

    try {
      this.facturacionService.PtoVta()
      .subscribe(resp => {      
        let i:number = 0;
            let resultado = resp;
           
            resultado.forEach(element => {
              resp[i]['punto_vta'] =  this.padLeft(resp[i]['punto_vta'], '0', 4);
              i++;
            });
          this.elementosPtoVta = resp;
          this.elementoPtoVta = this.elementosPtoVta[2];
          this.pto_vta = this.elementosPtoVta[2]['punto_vta'];
          this.loading = false;
          console.log(this.elementosPtoVta);
          this.Comprobante();
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }


  
  CategoriaIva(){

    try {
      this.facturacionService.CategoriaIva()
      .subscribe(resp => {      
          this.elementosCondicionIva = resp;
          this.elementoCondicionIva = this.elementosCondicionIva[4];
          this.loading = false;
          console.log(resp);
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          swal({
            toast: false,
            type: 'error',
            text: error.message,
            title: 'error.status',
            showConfirmButton: false,
            timer: 2000
          });
       });    
  } catch (error) {
  
  }  
  }

  padLeft(text:string, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
}



guardarDatos(){
  console.log(this.elementoPtoVta);
  this._fecha = formatDate(this.fecha, 'yyyy-MM-dd', 'en');
  this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd', 'en');
  this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd', 'en');
  let facturaElectronica = new FacturaElectronica('0', this.pto_vta, this.elementoComprobante['id'], this.elementoConcepto['id'],
  this.elementoDocumento['id'],this.nrodocumento,
  this.cliente,this.factura_numero, this._fecha, this._fechaDesde, this._fechaHasta,
   this.subtotal, this.subtotal_excento, this.subtotal_iva, this.total,this.facturaAlicuotaAsociada,this.elementos, '','', this.elementoMedicos['id']);
   console.log(facturaElectronica);
/*
   try {
    this.facturacionService.crearFactura(facturaElectronica)
    .subscribe(resp => {             
        this.loading = false;
        console.log(resp);
        swal({
          toast: false,
          type: 'success',
          text: 'CAE: '+resp['CAE']+' Vto: '+resp['CAEFchVto'],
          title: 'Factura generada',
          showConfirmButton: false,
          timer: 2000
        });
    },
    error => { // error path
        console.log(error.message);
        console.log(error.status);
        swal({
          toast: false,
          type: 'error',
          text: error.message,
          title: 'error.status',
          showConfirmButton: false,
          timer: 2000
        });
     });    
} catch (error) {

}

*/
this.generarPDF();
}


obtenerPuntoVta(){
  this.pto_vta = this.padLeft(this.elementoPtoVta['punto_vta'], '0', 4); 
  console.log(this.pto_vta);
  this.obtenerUltimaFactura();
}


obtenerUltimaFactura(){
  
   console.log(this.elementoComprobante);
  try {
    this.loadingspinner = true;
    this.facturacionService.GetLastVoucher(this.pto_vta,this.elementoComprobante['id'],'24')
    .subscribe(resp => {      
   
      this.loadingspinner = false;
        
        resp = resp+1;
        console.log(  resp);
        this.factura_numero = String(resp);
        this.factura_numero_ceros =this.padLeft(String(resp),'0',8);
    },
    error => { // error path
        console.log(error.message);
        console.log(error.status);
        swal({
          toast: false,
          type: 'error',
          text: error.message,
          title: 'error.status',
          showConfirmButton: false,
          timer: 2000
        });
     });    
} catch (error) {

}  
}


agregarRenglon(){
  let data:any; 
  //data = this.selecteditemRegistro;
  const ref = this.dialogService.open(PopupFacturaRenglonComponent, {
  data,
   header: 'Agregar registro de factura', 
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupOperacionCobroRegistroEditarComponent:FacturaElectronicaRenglon) => {
      if (PopupOperacionCobroRegistroEditarComponent) {
        console.log(PopupOperacionCobroRegistroEditarComponent);    
        let movimiento:FacturaElectronicaRenglon;
        movimiento= PopupOperacionCobroRegistroEditarComponent;
     this.elementos.push(movimiento);
       console.log(this.elementos);
       // GUARDO LAS ALICUOTAS ASOCIADAS

       // SE DEBE SEPARAR POR ALICUOTAS Y SUMAR LOS VALORES---- CORREGIR
       let _factura_alicuota_asociada = new FacturaAlicuotaAsociada(movimiento['alicuota_id'],movimiento['iva'],movimiento['precio_unitario'],'0' );
        this.facturaAlicuotaAsociada.push(_factura_alicuota_asociada);
        this.sumarValores();
      }
  });
}


eliminarRegistro(result:any){
  console.log(result);
  this.elementos = this.elementos.filter(item => item !== result);
  this.sumarValores();
}

sumarValores(){
  let i:number;

this.total = 0;
this.cantidad = 0;
this.subtotal = 0;
this.subtotal_iva = 0;
this.subtotal_excento = 0;

for(i=0;i < this.elementos.length;i++){
  this.cantidad = this.cantidad+ Number(this.elementos[i]['cantidad']);
  this.subtotal = this.subtotal+ Number(this.elementos[i]['total_sin_iva']);
  // AGREGAR VALIDACION SEGUN CODIGO IVA PARA 0%  Y PARA 21% O 10,5
  this.subtotal_iva = this.subtotal_iva+ Number(this.elementos[i]['iva']);
  this.total = this.total+ Number(this.elementos[i]['total_renglon']);

}


for(i=0;i < this.facturaAlicuotaAsociada.length;i++){
  console.log(this.facturaAlicuotaAsociada[i]['id']);
  if(Number(this.facturaAlicuotaAsociada[i]['id']) ===3){
  this.subtotal_excento = this.subtotal_excento+ Number(this.facturaAlicuotaAsociada[i]['importe_gravado']);
  console.log('exento '+this.subtotal_excento);
  }

}

}

generarPDF(){
  this._fecha = formatDate(this.fecha, 'dd/MM/yyyy', 'en');
  let inicio_actividades =  formatDate(this.elementoMedicos['fecha_matricula'], 'dd/MM/yyyy', 'en'); 
  var doc = new jsPDF();  
  /** valores de la pagina**/
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
  //borde contenedor
  doc.setLineWidth(0.3);
  doc.setDrawColor(207, 216, 220);
  doc.line(10, 10, pageWidth - 10, 10); //linea superior horizontal
  doc.line(10, 10, 10, 40); // linea vertical izquierda
  doc.line(pageWidth - 10, 10, pageWidth - 10, 40); // linea vertical derecha
  doc.line(10, 40, pageWidth - 10, 40); //linea inferior horizontal
  
  //borde factura letra  
  doc.line((pageWidth/2)-6,10 , (pageWidth/2)-6, 20);  // linea vertical izquierda
  doc.line((pageWidth/2)+6,10 , (pageWidth/2)+6, 20);  // linea vertical derecha
  doc.line((pageWidth/2)-6,20 , (pageWidth/2)+6, 20); //linea inferior horizontal
// linea divisoria
doc.line(pageWidth/2, 20, pageWidth /2, 40);
  doc.setFontSize(15);
  doc.setFontStyle("bold");
  doc.text('B', (pageWidth/2)-2, 16); 
  doc.setFontStyle("normal");
  doc.setFontSize(5);
  doc.text('COD. 06', (pageWidth/2)-3, 19); 
  doc.addImage(logo_clinica, 'PNG', 15, 12, 42, 9);
  doc.setFontSize(8);
  doc.setFontStyle("bold");
  doc.text(this.elementoMedicos['nombreyapellido'], 15, 26); 
  doc.setFontStyle("normal");
  doc.setFontSize(7);
  doc.text('Domicilio Comercial: '+this.elementoMedicos['domicilio'], 15, 30); 
  doc.text('Condición frente al IVA: '+this.elementoMedicos['categoria_iva'],15 , 35); 
  // izquierda
  doc.setFontSize(9);
  doc.text('Comprobante: '+ this.pto_vta+' - '+ this.factura_numero_ceros, (pageWidth/2)+20, 15); 
  doc.setFontSize(7);
  doc.text('Fecha Emisión: '+ this._fecha, (pageWidth/2)+20, 20); 
  doc.text('C.U.I.T.: '+ this.elementoMedicos['cuit'], (pageWidth/2)+20, 25); 
  doc.text('Ingresos brutos: '+ this.elementoMedicos['ing_brutos'], (pageWidth/2)+20, 30); 
  doc.text('Inicio de actividades: '+ inicio_actividades, (pageWidth/2)+20, 35); 
  doc.setLineWidth(0.4);
/*
  doc.line(10, 33, pageWidth - 10, 33);
  doc.setFontSize(12);
  doc.text('LISTADO DE ORDENES', pageWidth/2, 15, null, null, 'center');
  doc.setFontSize(6);
  doc.text('Emitido : '+_fechaEmision, pageWidth/2, 20, null, null, 'center');
  doc.setFontSize(8);
  doc.text('Fecha de cobro: '+fecha_chirugia, 10, 30, null, null, 'left');
  
  doc.setFontSize(6);
    doc.text(15, 38, 'Tarjeta : ' +this.cp.transform(tcredito, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(45, 38, 'Debito: ' +this.cp.transform(tdebito, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(75, 38, 'Efectivo: ' +this.cp.transform(tefectivo, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(105, 38, 'Transferencia: ' +this.cp.transform(ttransferencia, '', 'symbol-narrow', '1.2-2') ); 
    doc.text(135, 38, 'Total : ' +this.cp.transform(tfacturado, '', 'symbol-narrow', '1.2-2') );  
    doc.setFontSize(8);
  
  doc.setFontSize(10);
  
  doc.setFontSize(8);
  doc.autoTable(this.columns, this.selecteditems,
    {
        margin: {horizontal: 5, vertical: 42},
        bodyStyles: {valign: 'top'},
        styles: {fontSize: 6,cellWidth: 'wrap', rowPageBreak: 'auto', halign: 'justify',overflow: 'linebreak'},       
        columnStyles: {operacion_cobro_id: {columnWidth: 11}, operacion_cobro_numero_bono: {columnWidth: 15}, apellido: {columnWidth: 20},
        nombre: {columnWidth: 25},  dni: {columnWidth: 15}, obra_social_nombre: {columnWidth: 30},  codigo: {columnWidth: 12},
        descripcion: {columnWidth: 40}, fecha_cobro: {columnWidth: 20},cantidad: {columnWidth: 10},
        valor_facturado: {columnWidth: 13},distribucion: {columnWidth: 13},forma_pago: {columnWidth: 23},usuario_cobro_nombre: {columnWidth: 20}}
    });
 */
 window.open(doc.output('bloburl'));  
  }

}
