import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-popup-operacion-cobro-distribucion-detalle',
  templateUrl: './popup-operacion-cobro-distribucion-detalle.component.html',
  styleUrls: ['./popup-operacion-cobro-distribucion-detalle.component.css']
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

  constructor( public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 

    this.cols = [    
      { field: 'medico_opera', header: 'Médico opera', width: '15%'} ,  
      { field: 'medico_opera_valor', header: 'Médico opera $', width: '10%'} ,
      { field: 'medico_opera_porcentaje', header: 'Médico opera %' , width: '8%'} ,

      { field: 'medico_ayuda', header: 'Médico ayuda' , width: '15%'} ,
      { field: 'medico_ayuda_valor', header: 'Médico ayuda $' , width: '10%'} ,
      { field: 'medico_ayuda_porcentaje', header: 'Médico ayuda %',  width: '8%' },

      { field: 'medico_ayuda2', header: 'Médico ayuda 2' , width: '15%'} ,
      { field: 'medico_ayuda2_valor', header: 'Médico ayuda 2 $',  width: '10%' },
      {field: 'medico_ayuda2_porcentaje', header: 'Médico ayuda 2 %' , width: '8%' },

      { field: 'medico_clinica', header: 'Clínica ',  width: '15%' },
      { field: 'medico_clinica_valor', header: 'Clínica $',  width: '10%' },
      { field: 'medico_clinica_porcentaje', header: 'Clínica %',  width: '8%' },
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
}
