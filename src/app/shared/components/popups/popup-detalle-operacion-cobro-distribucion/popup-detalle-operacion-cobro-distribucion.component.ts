import { Component, OnInit } from '@angular/core';
import { MedicoObraSocialService } from '../../../../services/medico-obra-social.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import swal from 'sweetalert2';
import { MedicoObraSocial } from './../../../../models/medico-obrasocial.model';
import { calendarioIdioma } from '../../../../config/config';

@Component({
  selector: 'app-popup-detalle-operacion-cobro-distribucion',
  templateUrl: './popup-detalle-operacion-cobro-distribucion.component.html',
  styleUrls: ['./popup-detalle-operacion-cobro-distribucion.component.css']
})
export class PopupDetalleOperacionCobroDistribucionComponent implements OnInit {

  constructor(private miServico:MedicoObraSocialService, public ref: DynamicDialogRef, public config: DynamicDialogConfig ) { }

  TOTAL_DISTRIBUCION: number = 1000;
  TOTAL_CALCULADO: number = 0;
  /**** medico seleccionado */
  selectedMedicoOpera: MedicoObraSocial;
  selectedMedicoAyuda: MedicoObraSocial;
  selectedMedicoAyuda2: MedicoObraSocial;
  selectedClinica: MedicoObraSocial;

  /** porcentaje */
  medicoOperaPorcentaje: number = 0;
  medicoAyudaPorcentaje: number = 0;
  medicoAyuda2Porcentaje: number = 0;
  medicoClinicaPorcentaje: number = 50;
  /** distribucion */
  medicoOperaDistribucion: number = 0;
  medicoAyudaDistribucion: number = 0;
  medicoAyuda2Distribucion: number = 0;
  medicoClinicaDistribucion: number = 0;
  selecteditems:any[];
  es:any;
  // LOADING
  loading: boolean;
  elemento:MedicoObraSocial = null;
  elementos:MedicoObraSocial[] = null;

  ngOnInit() {
    console.log(this.config.data); 
    this.selecteditems = this.config.data;
   this.sumarValores();
    this.calcularPorcentaje();
    this.loadList();
  }


  
loadList(){
  this.es = calendarioIdioma;
  this.loading = true;
  try {
      this.miServico.getItemMedicoTodos()    
      .subscribe(resp => {

        let i:number = 0;
        let resultado = resp;
        resultado.forEach(element => {   
        resp[i]['nombre']  =  element['apellido'] +' '+element['nombre'];
        this.elementos = resp;
        i++;
    });
          console.log(this.elementos);    
          this.loading = false;
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          this.throwAlert('error' , 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
       });    
  } catch (error) {
    this.throwAlert('error' , 'Error: ' + error.status + '  Error al cargar los registros', error.message, error.status);
  }  
}

guardarDistribucion(){
  console.log(this.selectedMedicoOpera);
  console.log(this.selectedMedicoAyuda);
  console.log(this.selectedMedicoAyuda2);
  console.log(this.selectedClinica);
}

calcularPorcentaje(){
 this.medicoOperaDistribucion =  (this.medicoOperaPorcentaje *  this.TOTAL_DISTRIBUCION)/100;
 this.medicoAyudaDistribucion =  (this.medicoAyudaPorcentaje *  this.TOTAL_DISTRIBUCION)/100;
 this.medicoAyuda2Distribucion =  (this.medicoAyuda2Porcentaje *  this.TOTAL_DISTRIBUCION)/100;
 this.medicoClinicaDistribucion =  (this.medicoClinicaPorcentaje *  this.TOTAL_DISTRIBUCION)/100;
 this.TOTAL_CALCULADO = this.medicoOperaDistribucion + this.medicoAyudaDistribucion + this.medicoAyuda2Distribucion +  this.medicoClinicaDistribucion;
}


sumarValores(){
  
  let i:number;

  console.log(this.selecteditems !== undefined);
  this.TOTAL_DISTRIBUCION = 0;

  for(i=0;i<this.selecteditems.length;i++){
      this.TOTAL_DISTRIBUCION = this.TOTAL_DISTRIBUCION+ Number(this.selecteditems[i]['valor_facturado']);      
  }

  console.log(this.TOTAL_DISTRIBUCION);
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

