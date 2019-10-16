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
import { formatDate, CurrencyPipe } from '@angular/common';
import { FacturaAlicuotaAsociada } from '../../../../models/factura_alicuota_asociada.model';
import { PopupLiquidacionDetalleComponent } from '../../../../shared/components/popups/popup-liquidacion-detalle/popup-liquidacion-detalle.component';

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
  elementosPDF:any[] = [];
  
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
  columns: any[];
  /***valores totales */
  cantidad:number = 0;
  subtotal:number = 0;
  subtotal_excento:number = 0;
  subtotal_iva:number = 0;
  total:number = 0;

  constructor(private facturacionService: FacturacionService, public dialogService: DialogService,private messageService: MessageService, private cp: CurrencyPipe ) { 

    this.cols = [

      { field: 'descripcion', header: 'Descripción',  width: '55%' },
      { field: 'cantidad', header: 'Cantidad',  width: '10%' },
      {field: 'precio_unitario', header: 'P. unitario' , width: '10%' },
      { field: 'alicuota_descripcion', header: 'Alícuota',  width: '9%' },
      { field: 'iva', header: 'IVA',  width: '10%' },
      { field: 'total_renglon', header: 'Subtotal',  width: '10%' },
      { field: 'accion', header: 'Accion' , width: '6%'} ,
     ];  

     
     this.columns = [
      {title: 'Descripcion', dataKey: 'descripcion'},
      {title: 'Cant', dataKey: 'cantidad'},
      {title: 'Precio unit.', dataKey: 'precio_unitario'},
      {title: 'Alic.', dataKey: 'alicuota_descripcion'},
      {title: 'Iva', dataKey: 'iva'},
      {title: 'Importe', dataKey: 'total_renglon'},
  ];
  }

  ngOnInit() {
    this.es = calendarioIdioma;
    this.fecha = new Date();
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    
   this.getMedicosFacturan();
   
    
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

          // UNA VEZ QUE TENGO EL DATO DEL MEDICO PROCEDO A BUSCAR TODOS LOS DEMAS CAMPOS

          this.Alicuota();
          this.Concepto();
          this.Documento();
          this.PtoVta();
          this.CategoriaIva();
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
          //this.elementoComprobante = this.elementosComprobante[3];
          this.elementoComprobante =  this.elementosComprobante.find(x => x.id == this.elementoMedicos['factura_comprobante_id']);
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
         //  this.elementoDocumento = this.elementosDocumento[7];
           this.elementoDocumento =  this.elementosDocumento.find(x => x.id == this.elementoMedicos['factura_documento_comprador_id']);
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
          // DE ACUERDO AL PUNTO DE VENTA POR DEFECTO LO PRE SELECCIONO
        // console.log( this.elementosPtoVta.find(x => x.id == this.elementoMedicos['factura_punto_vta_id']));
          this.elementoPtoVta =  this.elementosPtoVta.find(x => x.id == this.elementoMedicos['factura_punto_vta_id']);
          this.pto_vta =  this.elementoPtoVta['punto_vta'];
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
  console.log('elemento documento '+ this.elementoDocumento);
  console.log('elemento comprobate '+ this.elementoComprobante);
  console.log('elemento concepto '+ this.elementoConcepto);
  console.log('elemento pto venta '+ this.pto_vta);
  let facturaElectronica = new FacturaElectronica('0', this.pto_vta, this.elementoComprobante['id'], this.elementoConcepto['id'],
  this.elementoDocumento['id'],this.nrodocumento,
  this.cliente,this.factura_numero, this._fecha, this._fechaDesde, this._fechaHasta,
   this.subtotal, this.subtotal_excento, this.subtotal_iva, this.total,this.facturaAlicuotaAsociada,this.elementos, '','', this.elementoMedicos['id']);
   console.log(facturaElectronica);
  
  
   if((Number(this.elementoDocumento['id']) === 86 )||(Number(this.elementoDocumento['id']) === 80)){
     console.log(Number(this.elementoDocumento['id']));
     console.log(this.nrodocumento.length);
     if(this.nrodocumento.length === 11){
      console.log(Number(this.elementoDocumento['id']));
      this.generarPDF();
     }else{
    
      swal({
        toast: false,
        type: 'warning',
        text: 'Error en la cantidad de dígitos del  CUIT / CUIL',
        title: 'Digitos incorrectos',
        showConfirmButton: false,
        timer: 3000
       });

     }
   }

   if((Number(this.elementoDocumento['id']) != 86 )&&(Number(this.elementoDocumento['id']) != 80)){
    console.log(Number(this.elementoDocumento['id']));
    console.log(this.nrodocumento.length);
    if((this.nrodocumento.length <=8)&&(this.nrodocumento.length >=5)){
      console.log(Number(this.elementoDocumento['id']));
      this.generarPDF();
    }else{
     swal({
       toast: false,
       type: 'warning',
       text: 'Error en la cantidad de dígitos',
       title: 'Digitos incorrectos',
       showConfirmButton: false,
       timer: 3000
     });
    }
  }
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

}


obtenerPuntoVta(){
  this.pto_vta = this.padLeft(this.elementoPtoVta['punto_vta'], '0', 4); 
  console.log(this.pto_vta);
  this.obtenerUltimaFactura();
}

onElementoDocumento(){

  console.log(this.elementoDocumento);
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


agregarRenglonOS(){
  let data:any; 
  //data = this.selecteditemRegistro;
  const ref = this.dialogService.open(PopupLiquidacionDetalleComponent, {
  data,
   header: 'Agregar registro de factura', 
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupLiquidacionDetalleComponent:FacturaElectronicaRenglon) => {
      if (PopupLiquidacionDetalleComponent) {
        console.log(PopupLiquidacionDetalleComponent);    
  //      let movimiento:FacturaElectronicaRenglon;
   //     movimiento= PopupLiquidacionDetalleComponent;
    // this.elementos.push(movimiento);
       console.log(this.elementos);
       // GUARDO LAS ALICUOTAS ASOCIADAS

       // SE DEBE SEPARAR POR ALICUOTAS Y SUMAR LOS VALORES---- CORREGIR
  /*     let _factura_alicuota_asociada = new FacturaAlicuotaAsociada(movimiento['alicuota_id'],movimiento['iva'],movimiento['precio_unitario'],'0' );
        this.facturaAlicuotaAsociada.push(_factura_alicuota_asociada);
        this.sumarValores();*/
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


  // GENERO EL FORMATO DE LOS COBROS

  this.elementosPDF = this.elementos;
  let i = 0;
  for(i= 0; i< this.elementosPDF.length; i++){
      this.elementosPDF[i]['alicuota'] = this.cp.transform(this.elementosPDF[i]['alicuota'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['iva'] = this.cp.transform(this.elementosPDF[i]['iva'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['precio_unitario'] = this.cp.transform(this.elementosPDF[i]['precio_unitario'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['total_renglon'] = this.cp.transform(this.elementosPDF[i]['total_renglon'], '', 'symbol-narrow', '1.2-2');
      this.elementosPDF[i]['total_sin_iva'] = this.cp.transform(this.elementosPDF[i]['total_sin_iva'], '', 'symbol-narrow', '1.2-2');
      
  }

  this._fecha = formatDate(this.fecha, 'dd/MM/yyyy', 'en');
  let inicio_actividades =  formatDate(this.elementoMedicos['fecha_matricula'], 'dd/MM/yyyy', 'en'); 
  var doc = new jsPDF();  
  /** valores de la pagina**/
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
  doc.text(this.elementoComprobante['letra'], (pageWidth/2)-2.5, 17); 
  doc.setFontStyle("normal");
  doc.setFontSize(6);
  doc.text('COD. '+this.elementoComprobante['comprobante_codigo'], (pageWidth/2)-4.5, 21); 
  doc.addImage(logo_clinica, 'PNG', 15, 12, 60.06, 12.87);
  doc.setFontSize(9);
  
  doc.text(this.elementoMedicos['nombreyapellido'], 15, 35); 
  doc.setFontStyle("normal");
  doc.setFontSize(9);
  doc.text(this.elementoMedicos['domicilio'], 15, 40); 
  doc.text(this.elementoMedicos['categoria_iva'],15 , 45); 
  // izquierda
  doc.setFontSize(9);
  doc.text('Comprobante: '+ this.pto_vta+' - '+ this.factura_numero_ceros, (pageWidth/2)+20, 20); 
  doc.setFontSize(9);
  doc.text('Fecha Emisión: '+ this._fecha, (pageWidth/2)+20, 25); 
  doc.text('C.U.I.T.: '+ this.elementoMedicos['cuit'], (pageWidth/2)+20, 30); 
  doc.text('Ingresos brutos: '+ this.elementoMedicos['ing_brutos'], (pageWidth/2)+20, 35); 
  doc.text('Inicio de actividades: '+ inicio_actividades, (pageWidth/2)+20, 40); 
  doc.setLineWidth(0.4);

  //DATOS DE FECHA

  this._fechaDesde = formatDate(this.fechaDesde, 'yyyy-MM-dd', 'en');
  this._fechaHasta = formatDate(this.fechaHasta, 'yyyy-MM-dd', 'en');
  doc.text('Período Facturado   Desde: '+formatDate(this.fechaDesde, 'dd/MM/yyyy', 'en'), 15, 60); 
  doc.text('Hasta: '+formatDate(this.fechaHasta, 'dd/MM/yyyy', 'en'), pageWidth/2, 60); 

  //DATOS DEL CLIENTE

  doc.text(this.elementoDocumento['descripcion']+' : '+ this.nrodocumento, 15, 73); 
  doc.text('Cliente: '+ this.cliente, 15, 78); 
  doc.text('Condición frente al IVA: '+ this.elementoCondicionIva['categoria_iva'], 15, 83); 

  // TOTAL DE LA FACTURA
  doc.setFontSize(10);
  doc.setFontStyle("bold");
  doc.text('Subtotal: '+ this.cp.transform(this.subtotal, '', 'symbol-narrow', '1.2-2'), 15, pageHeight -18); 
  doc.text('Imp. IVA: '+ this.cp.transform(this.subtotal_iva, '', 'symbol-narrow', '1.2-2'), 75, pageHeight -18); 
  doc.text('Total: '+ this.cp.transform(this.total, '', 'symbol-narrow', '1.2-2'), pageWidth-50, pageHeight -18); 
  // PIE DE LA FACTURA
  doc.text('CAE: '+ this._fecha, 15, pageHeight -5); 
  doc.text('Fecha de vencimiento de CAE: '+ this._fecha, (pageWidth/2)+20, pageHeight -5); 
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
  this.limpiarDatos();
  }


  limpiarDatos(){

  this.elementosPDF = [];
  this.elementos = [];   
  this.pto_vta = '0';
  this.factura_numero = '0';
  this.factura_numero_ceros = '0';
  this.nrodocumento = '0';
  this.cliente = '';
  this.CAE = '';
  this.fecha = new Date();
  this.fechaDesde = new Date();
  this.fechaHasta = new Date();
  this.cantidad = 0;
  this.subtotal = 0;
  this.subtotal_excento = 0;
  this.subtotal_iva = 0;
  this.total = 0;
   this.getMedicosFacturan();
  }

}
