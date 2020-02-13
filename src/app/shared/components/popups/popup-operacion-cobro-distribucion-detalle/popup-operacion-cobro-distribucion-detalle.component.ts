import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef, MessageService, DialogService } from 'primeng/api';
import { formatDate, CurrencyPipe, DecimalPipe } from '@angular/common';
import { LiquidacionService } from './../../../../services/liquidacion.service';
import { Liquidacion } from './../../../../models/liquidacion.model';
import { PopupOperacionCobroDetalleComponent } from './../popup-operacion-cobro-detalle/popup-operacion-cobro-detalle.component';
@Component({
  selector: 'app-popup-operacion-cobro-distribucion-detalle',
  templateUrl: './popup-operacion-cobro-distribucion-detalle.component.html',
  styleUrls: ['./popup-operacion-cobro-distribucion-detalle.component.css'],
  providers: [MessageService,DialogService]
})
export class PopupOperacionCobroDistribucionDetalleComponent implements OnInit {
  cols: any[];
  elementos:any[] = null;
  TOTAL_OPERA:number = 0;
  TOTAL_AYUDA:number = 0;
  TOTAL_AYUDA2:number = 0;
  TOTAL_CLINICA:number = 0;
  TOTAL:number = 0;
  elementosFiltrados:any[] = null;
  selecteditems:any[] = [];

  constructor( public ref: DynamicDialogRef, public config: DynamicDialogConfig, private liquidacionService:LiquidacionService, private messageService: MessageService ,public dialogService: DialogService) { 

    this.cols = [    
      { field: 'operacion_cobro_id', header: 'O.C', width: '8%'} ,
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
  this.liquidacionService.exportAsExcelFile(  this.selecteditems, 'listado_presentacion'+fecha_impresion);
}

}
