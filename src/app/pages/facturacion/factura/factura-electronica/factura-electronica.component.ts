import { Component, OnInit } from '@angular/core';
import { FacturacionService } from './../../../../services/facturacion.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-factura-electronica',
  templateUrl: './factura-electronica.component.html',
  styleUrls: ['./factura-electronica.component.css']
})
export class FacturaElectronicaComponent implements OnInit {
  loading: boolean;
  elementos:any[] = null;
  constructor(private facturacionService: FacturacionService) { }

  ngOnInit() {
    this.TipoComprobantesDisponibles();
    this.TipoConceptosDisponibles();
    this.TipoDocumentosDisponibles();
    this.TipoAlicuotasDisponibles();
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

  TipoAlicuotasDisponibles(){

    try {
      this.facturacionService.TipoAlicuotasDisponibles('24')
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

  

}
