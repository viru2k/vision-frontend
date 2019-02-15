import { ObraSocial } from './../../../../../models/obra-social.model';

import { DialogService } from 'primeng/components/common/api';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { PopupEntidadFacturaComponent } from '../../../popup/popup-entidad-factura/popup-entidad-factura.component';
import { EntidadFactura } from '../../../../../models/entidad-factura.model';

@Component({
  selector: 'app-edit-obra-social',
  templateUrl: './edit-obra-social.component.html',
  styleUrls: ['./edit-obra-social.component.css'],
  providers: [MessageService,DialogService]
})
export class EditObraSocialComponent implements OnInit {

  updateDataForm: FormGroup;
  popItem:ObraSocial = null;
  newItem:boolean;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,private messageService: MessageService ,public dialogService: DialogService  ) { }

  ngOnInit() {
 
    this.updateDataForm = new FormGroup({
      'nombre': new FormControl("", Validators.required),
      'es_habilitada': new FormControl("", Validators.required),
      'descripcion': new FormControl("", Validators.required),                        
      'entidad_nombre': new FormControl("", Validators.required), 
  });
  this.updateDataForm.reset();
  console.log(this.config.data);
    if(this.config.data !=null){
      this.popItem =this.config.data;
      this.updateDataForm.patchValue(this.popItem);
      this.newItem = false;
    }else{
      this.popItem = new ObraSocial("","","","","","");
      this.newItem = true;
    }
  }



  
  
  editarEntidad(){

    const ref = this.dialogService.open(PopupEntidadFacturaComponent, {
            data: {
                id: '51gF3'
            },
            header: 'Seleccionar entidad a facturar',
            width: '90%'
        });

        ref.onClose.subscribe((entidadFactura:EntidadFactura) => {
            if (entidadFactura) {
            console.log(entidadFactura);
            this.popItem.descripcion= this.updateDataForm.value.descripcion;            
            this.popItem.es_habilitada = this.updateDataForm.value.es_habilitada;  
            this.popItem.nombre = this.updateDataForm.value.nombre;  


            this.popItem.entidad_factura_id = entidadFactura.id;
            this.popItem.entidad_nombre = entidadFactura.nombre;
            
            this.updateDataForm.patchValue(this.popItem);
            }
        });
}
  
  actualizarDatos(){
    this.popItem.descripcion= this.updateDataForm.value.descripcion;    
    this.popItem.entidad_nombre = this.updateDataForm.value.entidad_nombre;  
    this.popItem.es_habilitada = this.updateDataForm.value.es_habilitada;  
    this.popItem.nombre = this.updateDataForm.value.nombre;  
    console.log(this.popItem);
    this.ref.close(this.popItem);
  }
}
