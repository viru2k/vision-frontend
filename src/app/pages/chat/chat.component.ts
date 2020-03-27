import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChatService } from '../../services/chat-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  loading;
  userData: any;
  lista_usuarios:any[] = [];
  selected_usuario:any = null;

  constructor(private chatService: ChatService) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
   }

  ngOnInit() {
    this.loadListaUsuario();
  }


  loadListaUsuario(){
    this.loading = true;
    try {

        this.chatService.getSesionListByUsuario(this.userData['id'])
        .subscribe(resp => {
       // this.elementos = resp;
       this.lista_usuarios = resp;
        console.log(this.lista_usuarios);
        this.loading = false;
      
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert('error','error','Error: '+error.status+'  Error al cargar los registros',error.message);
       //     this.resultSave = false;
            this.loading = false;
          });    
    } catch (error) {
      this.throwAlert('error','error','Error: '+error.status+'  Error al cargar los registros',error.message);
    }
  
  
  }

  loadChat(e:any){
    console.log(e);
    this.selected_usuario = e;
  }

  
throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
  let tipoerror:string;

  if(estado== "success"){
      swal({
          type: 'success',
          title: 'Exito',
          text: mensaje
        })
  }

  if(errorNumero =="422"){
    mensaje ="Los datos que esta tratando de guardar son iguales a los que ya poseia";
    swal({   
        type: 'warning',
        title: 'Atención..',
        text: mensaje,
        footer: motivo
      })
}
  
  if((estado== "error")&&(errorNumero!="422")){
    if(errorNumero =="422"){
        mensaje ="Los datos que esta tratando de guardar son iguales a los que ya poseia";
    }
    if(errorNumero =="400 "){
        mensaje ="Bad Request ";
    }
    if(errorNumero =="404"){
        mensaje ="No encontrado ";
    }
    if(errorNumero =="401"){
        mensaje ="Sin autorización";
    }
    if(errorNumero =="403"){
        mensaje =" Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ";
    }
    if(errorNumero =="405"){
        mensaje ="Método no permitido";
    }
    if(errorNumero =="500"){
        mensaje ="Error interno en el servidor";
    }
    if(errorNumero =="503"){
        mensaje ="Servidor no disponible";
    }
    if(errorNumero =="502"){
        mensaje ="Bad gateway";
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

