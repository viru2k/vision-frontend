import { ConvenioService } from './../../../../services/convenio.service';
import { DynamicDialogConfig, MessageService, DynamicDialogRef, DialogService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { calendarioIdioma } from './../../../../config/config';
import { DatePipe, formatDate } from '@angular/common';
import { Paciente } from '../../../../models/paciente.model';
import { PopupMovimientoFindFacturaComponent } from './../popup-movimiento-find-factura/popup-movimiento-find-factura.component';

import swal from 'sweetalert2';
import { PopupMovimientoFindPacienteCobroComponent } from './../popup-movimiento-find-paciente-cobro/popup-movimiento-find-paciente-cobro.component';
import { PopupProveedorFindComponent } from './../../../../shared/components/popups/popup-proveedor-find/popup-proveedor-find.component';


import { PracticaService } from '../../../../services/practica.service';
import { MovimientoCajaService } from '../../../../services/movimiento-caja.service';
import { AlertServiceService } from '../../../../services/alert-service.service';

@Component({
  selector: 'app-popup-movimiento',
  templateUrl: './popup-movimiento.component.html',
  styleUrls: ['./popup-movimiento.component.css'],
  providers: [MessageService, DialogService]
})
export class PopupMovimientoComponent implements OnInit {

  loading = false;
  es: any;
  formasPago: any[];
  updateDataForm: FormGroup;
  forma_pago: string ;
  _fechaHoy: string;
  popItemPaciente: Paciente;
  selectedForma: string;

  elementoConceptoCuenta: any[] = [];
  filteredItemsConceptoCuenta: any[];

  elementoCuenta: any[] = [];
  filteredItemsCuenta: any[];

  elementoTipoComprobante: any[] = [];
  filteredItemsTipoComprobante: any[];

  elementoMoneda: any[] = [];
  filteredItemsMoneda: any[];

  

  constructor(public config: DynamicDialogConfig, private movimientoCajaService: MovimientoCajaService , 
    private alertServiceService: AlertServiceService,
    private messageService: MessageService , public ref: DynamicDialogRef, public dialogService: DialogService ) {

   this.es = calendarioIdioma;

  this.updateDataForm = new FormGroup({
    'id': new FormControl(),
    'fecha_carga': new FormControl(new Date()),
    'comprobante_numero': new FormControl(''),    
    'mov_concepto_cuenta_id': new FormControl(1),
    'mov_cuenta_id': new FormControl(1),
    'concepto_cuenta': new FormControl(''),
    'descripcion': new FormControl(),
    'mov_tipo_comprobante_id': new FormControl(),
    'tipo_comprobante': new FormControl(),
    'cuenta_nombre': new FormControl(),     // debe concatenarsecon movimiento tipo 'movimiento_tipo': new FormControl(),
    'tiene_enlace_factura': new FormControl('NO'),
    'mov_tipo_moneda_id': new FormControl(''),
    'tipo_moneda': new FormControl(''),
    'importe': new FormControl(0),
    'cotizacion': new FormControl(1),
    'total': new FormControl(0),
    'liq_liquidacion_distribucion_id': new FormControl(0),
    'factura_encabezado_id': new FormControl(0),
    'paciente_id': new FormControl(0),
    'nombreyapellido_paciente': new FormControl(''),
    'nombreyapellido_proveedor': new FormControl(''),
    'proveedor_id': new FormControl(0),
    
  });

 

  }

  ngOnInit() {
  // this._fechaHoy = formatDate(this.updateDataForm.value.fecha_cobro, 'yyyy-MM-dd', 'en');
    console.log(this.config.data); 
   // this.selectedForma =  this.formasPago.find(x => x.name === this.config.data.forma_pago);

    console.log(this.selectedForma);  
   // this.updateDataForm.patchValue({forma_pago: this.selectedForma });
 //   this.updateDataForm.patchValue({fecha_cobro: this._fechaHoy});
   // console.log(this.updateDataForm.value);
    
   this.getMovimientoConceptoCuentas();
   this.getCuentas();
   this.getTipoComprobante();
   this.getMoneda();
  }



  calcularTotal() {
    this.updateDataForm.patchValue({total: (this.updateDataForm.value.importe * this.updateDataForm.value.cotizacion)}) ;
  }



/* -------------------------------------------------------------------------- */
/*                             CONCEPTO DE CUENTA                             */
/* -------------------------------------------------------------------------- */

    async getMovimientoConceptoCuentas() {

        try {
          await this.movimientoCajaService.getMovimientoConceptoCuentas()
          .subscribe(resp => {

          if (resp[0]) {
            this.elementoConceptoCuenta = resp;
            console.log(this.elementoConceptoCuenta);
            }
              this.loading = false;
          },
          error => { 
              console.log(error.message);
              console.log(error.status);
              this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
          });
      } catch (error) {
        this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
      }
    }

      filterConceptoCuenta(event) {
        let item:any;
        this.filteredItemsConceptoCuenta = [];
        for(let i = 0; i < this.elementoConceptoCuenta.length; i++) {
              let nombre= this.elementoConceptoCuenta[i]['concepto_cuenta'];
            
            if(this.elementoConceptoCuenta[i]['concepto_cuenta'].toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
              item= this.elementoConceptoCuenta[i];
            // console.log(this.filteredItemsConceptoCuenta);
                this.filteredItemsConceptoCuenta.push(this.elementoConceptoCuenta[i]);
            }
        }
    }

    seleccionadoConceptoCuenta(elem: any) {
      this.updateDataForm.patchValue({mov_concepto_cuenta_id: elem.id});
      console.log(this.updateDataForm.value);
      
    }

/* -------------------------------------------------------------------------- */
/*                                   CUENTA                                   */
/* -------------------------------------------------------------------------- */

  async getCuentas() {

    try {
      await this.movimientoCajaService.getMovimientoCuentas()
      .subscribe(resp => {
        let i = 0;
      if (resp[0]) {
        resp.forEach(element => {
            resp[i].cuenta_nombre = element.cuenta_nombre + ' ' + element.movimiento_tipo;
            i++;
        });
        this.elementoCuenta = resp;
        console.log(this.elementoCuenta);
        }
          this.loading = false;
      },
      error => { 
          console.log(error.message);
          console.log(error.status);
          this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
      });
  } catch (error) {
    this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
  }
  }

  filterCuenta(event) {
    let item:any;
    this.filteredItemsCuenta = [];
    for(let i = 0; i < this.elementoCuenta.length; i++) {
          let nombre= this.elementoCuenta[i]['cuenta_nombre'];
        
        if(this.elementoCuenta[i]['cuenta_nombre'].toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          item= this.elementoCuenta[i];
        // console.log(this.filteredItemsConceptoCuenta);
            this.filteredItemsCuenta.push(this.elementoCuenta[i]);
        }
    }
  }

  seleccionadoCuenta(elem: any) {
  this.updateDataForm.patchValue({mov_cuenta_id: elem.id});
  console.log(this.updateDataForm.value);

  }


/* -------------------------------------------------------------------------- */
/*                              TIPO  COMPROBANTE                             */
/* -------------------------------------------------------------------------- */

async getTipoComprobante() {

  try {
    await this.movimientoCajaService.getMovimientoConceptoTipoComprobantes()
    .subscribe(resp => {
    if (resp[0]) {
      this.elementoTipoComprobante = resp;
      console.log(this.elementoTipoComprobante);
      }
        this.loading = false;
    },
    error => { 
        console.log(error.message);
        console.log(error.status);
        this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
    });
} catch (error) {
  this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
}
}

filterTipoComprobante(event) {
  let item:any;
    this.filteredItemsTipoComprobante = [];
    for(let i = 0; i < this.elementoTipoComprobante.length; i++) {
          let nombre= this.elementoTipoComprobante[i]['tipo_comprobante'];
        
        if(this.elementoTipoComprobante[i]['tipo_comprobante'].toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          item= this.elementoTipoComprobante[i];
        // console.log(this.filteredItemsConceptoCuenta);
            this.filteredItemsTipoComprobante.push(this.elementoTipoComprobante[i]);
        }
    }
}

seleccionadoTipoComprobante(elem: any) {
this.updateDataForm.patchValue({mov_tipo_comprobante_id: elem.id});
console.log(this.updateDataForm.value);

}

/* -------------------------------------------------------------------------- */
/*                                   MONEDA                                   */
/* -------------------------------------------------------------------------- */

async getMoneda() {

  try {
    await this.movimientoCajaService.getMovimientoConceptoMonedas()
    .subscribe(resp => {
    if (resp[0]) {
      this.elementoMoneda = resp;
      console.log(this.elementoMoneda);
      }
        this.loading = false;
    },
    error => { 
        console.log(error.message);
        console.log(error.status);
        this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
    });
} catch (error) {
  this.alertServiceService.throwAlert('error', 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
}
}

filterMoneda(event) {
  let item:any;
    this.filteredItemsMoneda = [];
    for(let i = 0; i < this.elementoMoneda.length; i++) {
          let nombre= this.elementoMoneda[i]['tipo_moneda'];
        
        if(this.elementoMoneda[i]['tipo_moneda'].toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          item= this.elementoMoneda[i];
        // console.log(this.filteredItemsConceptoCuenta);
            this.filteredItemsMoneda.push(this.elementoMoneda[i]);
        }
    }
}

seleccionadoMoneda(elem: any) {
this.updateDataForm.patchValue({mov_tipo_moneda_id: elem.id});
console.log(this.updateDataForm.value);

}

buscarPaciente() {
  let data: any;
  const ref = this.dialogService.open(PopupMovimientoFindPacienteCobroComponent, {
  data,
   header: 'Buscar paciente',
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupMovimientoFindPacienteCobroComponent: any) => {
      if (PopupMovimientoFindPacienteCobroComponent) {
      
       console.log(PopupMovimientoFindPacienteCobroComponent);
      this.updateDataForm.patchValue({paciente_id: PopupMovimientoFindPacienteCobroComponent.paciente_id});
      this.updateDataForm.patchValue({nombreyapellido_paciente: PopupMovimientoFindPacienteCobroComponent.apellido+' '+PopupMovimientoFindPacienteCobroComponent.nombre});
      }
  });

}

buscarProveedor() {
  let data: any;
  const ref = this.dialogService.open(PopupProveedorFindComponent, {
  data,
   header: 'Buscar proveedor',
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupProveedorFindComponent: any) => {
      if (PopupProveedorFindComponent) {
      
       console.log(PopupProveedorFindComponent);
      this.updateDataForm.patchValue({nombreyapellido_proveedor: PopupProveedorFindComponent.proveedor_nombre});
      this.updateDataForm.patchValue({proveedor_id: PopupProveedorFindComponent.id});

      }
  });

}

buscarDistribucionCobro() {
  let data: any;
  const ref = this.dialogService.open(PopupMovimientoFindPacienteCobroComponent, {
  data,
   header: 'Buscar distribución de un paciente',
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupMovimientoFindPacienteCobroComponent: any) => {
      if (PopupMovimientoFindPacienteCobroComponent) {
      
       console.log(PopupMovimientoFindPacienteCobroComponent);
      this.updateDataForm.patchValue({paciente_id: PopupMovimientoFindPacienteCobroComponent.paciente_id});
      this.updateDataForm.patchValue({nombreyapellido_paciente: PopupMovimientoFindPacienteCobroComponent.apellido+' '+PopupMovimientoFindPacienteCobroComponent.nombre});
      this.updateDataForm.patchValue({liq_liquidacion_distribucion_id: PopupMovimientoFindPacienteCobroComponent.liquidacion_distribucion_id});
//        this.updateDataForm.patchValue({nombreyapellido: PopupPacienteObrasocialComponent.apellido+' '+PopupPacienteObrasocialComponent.nombre});

        //console.log(this.updateDataForm.value);
      }
  });

}

buscarFactura() {
  let data: any;
  const ref = this.dialogService.open(PopupMovimientoFindFacturaComponent, {
  data,
   header: 'Buscar distribución de un paciente',
   width: '98%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupMovimientoFindFacturaComponent: any) => {
      if (PopupMovimientoFindFacturaComponent) {
      
       console.log(PopupMovimientoFindFacturaComponent);
      this.updateDataForm.patchValue({comprobante_numero: PopupMovimientoFindFacturaComponent.descripcion + ' ' + PopupMovimientoFindFacturaComponent.comprobante_codigo + '-' + PopupMovimientoFindFacturaComponent.factura_numero});
      this.updateDataForm.patchValue({factura_encabezado_id: PopupMovimientoFindFacturaComponent.id});
      this.updateDataForm.patchValue({tiene_enlace_factura: 'SI'});
      

        //console.log(this.updateDataForm.value);
      }
  });
}

  actualizarDatos() {
    console.log(this.updateDataForm.value);
     try {
      this.movimientoCajaService.setMovimientoCaja(this.updateDataForm.value)
      .subscribe(resp => {
        this.alertServiceService.throwAlert('success','Se modificó el registro con éxito', '', '');
        this.ref.close();
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.alertServiceService.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
    this.alertServiceService.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
  }   
}
    
  }