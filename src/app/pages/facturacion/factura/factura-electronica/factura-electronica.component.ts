import { Component, OnInit } from '@angular/core';
import { FacturacionService } from './../../../../services/facturacion.service';

import swal from 'sweetalert2';
import { calendarioIdioma } from './../../../../config/config';
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
  elementosComprobante:any[] = null;
  elementosConcepto:any[] = null;
  elementosDocumento:any[] = null;
  elementosPtoVta:any[] = null;  
  elementosCondicionIva:any[]= null;
  selecteditems:FacturaElectronicaRenglon = null;
  elementoAlicuota:number= null;
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
  let facturaElectronica = new FacturaElectronica('0', this.pto_vta, this.factura_numero, this.elementoConcepto['id'],
  this.elementoDocumento['id'],this.nrodocumento,
  this.elementosComprobante['id'],this.factura_numero, this._fecha, this._fechaDesde, this._fechaHasta,
   this.subtotal, this.subtotal_excento, this.subtotal_iva, this.total,this.facturaAlicuotaAsociada,this.elementos, '','');
   console.log(facturaElectronica);
}
obtenerPuntoVta(){
  this.pto_vta = this.padLeft(this.elementoPtoVta['punto_vta'], '0', 4); 
  this.obtenerUltimaFactura();
}
obtenerUltimaFactura(){
  
   
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
       let _factura_alicuota_asociada = new FacturaAlicuotaAsociada(movimiento['alicuota_id'],movimiento['total_sin_iva'],movimiento['total_renglon'],'0' );
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
  this.subtotal_excento = this.subtotal_excento+ Number(this.elementos[i]['total_sin_iva']);
  this.subtotal_iva = this.subtotal_iva+ Number(this.elementos[i]['iva']);
  this.total = this.total+ Number(this.elementos[i]['total_renglon']);

}
}
}
