
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import swal from 'sweetalert2';

//'@types/chart.js': '^2.7.40',
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user:User;
  loggedIn:boolean = false;
  general: MenuItem[];
  mantenimiento_stock_insumo:boolean =true;
  mantenimiento_stock_lente:boolean =true;
  mantenimiento_otros:boolean =true;
  facturacion_consulta:boolean =true;
  facturacion_control:boolean =true;
  medico_consulta:boolean =true;
  medico_control:boolean =true;
  quirofano_consulta:boolean =true;
  quirofano_control:boolean =true;
  asesoramiento_control:boolean =true;
  asesoramiento_consulta:boolean =true;
  recepcion_consulta:boolean =true;
  recepcion_control:boolean =true;
  administrador:boolean =true;
  estudios_consulta:boolean =true;
  estudios_control:boolean =true;
  gerencia_control:boolean =true;

  public username:string;
  elemento:User = null;
  elementoModulo:[] = null;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private miServico:UserService) { 

  }
 navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
   
if(currentUser['access_token'] != ''){
  let userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  console.log('usuario logueado');
  this.loggedIn = true;
     this.username = userData['username'];
     console.log(userData['access_list']);
     this.asignarModulos(userData['access_list']);
     this.menuList();
}else{
  console.log("sin credenciales");
  this.throwAlert('error','Usuario o contraseña incorrectos',  'Verifique el usuario y contraseña, su sesion puede haber expirado','500');
}
   
}

accion(evt:any,overlaypanel:OverlayPanel){
  if(event){
    
  }
  console.log(event);

  overlaypanel.toggle(evt);
}

ajustes(){
  console.log('ajustes');
}

asignarModulos(modulos: any){
  modulos.forEach(element => {
   // console.log(element['modulo_nombre']);
    if(element['modulo_nombre'] === 'mantenimiento_stock_insumo'){
      this.mantenimiento_stock_insumo = false;
    }
    if(element['modulo_nombre'] === 'mantenimiento_stock_lente'){
      this.mantenimiento_stock_lente = false;
    }
    if(element['modulo_nombre'] === 'mantenimiento_otros'){
      this.mantenimiento_otros = false;
      console.log( element['modulo_nombre']);
    }
    if(element['modulo_nombre'] === 'facturacion_consulta'){
      this.facturacion_consulta = false;
    }
    if(element['modulo_nombre'] === 'facturacion_control'){
      this.facturacion_control = false;
    }
    if(element['modulo_nombre'] === 'medico_consulta'){
      this.medico_consulta = false;
    }
    if(element['modulo_nombre'] === 'medico_control'){
      this.medico_control = false;
    }
    if(element['modulo_nombre'] === 'quirofano_consulta'){
      this.quirofano_consulta = false;
    }
    if(element['modulo_nombre'] === 'quirofano_control'){
      this.quirofano_control = false;
    }
    if(element['modulo_nombre'] === 'asesoramiento_control'){
      this.asesoramiento_control = false;
    }
    if(element['modulo_nombre'] === 'asesoramiento_consulta'){
      this.asesoramiento_consulta = false;
    }
    if(element['modulo_nombre'] === 'recepcion_consulta'){
      this.recepcion_consulta = false;
    }
    if(element['modulo_nombre'] === 'recepcion_control'){
      this.recepcion_control = false;
    }
    if(element['modulo_nombre'] === 'administrador'){
      this.administrador = false;
    }
    if(element['modulo_nombre'] === 'estudios_control'){
      this.estudios_control = false;
    }
    if(element['modulo_nombre'] === 'estudios_consulta'){
      this.estudios_consulta = false;
    }

    if(element['modulo_nombre'] === 'gerencia_control'){
      this.gerencia_control = false;
    }
  });

}

cerrarSesion(){
  console.log('sesion terminada');
    this.authenticationService.logout();
    this.loggedIn =false;
    this.mantenimiento_stock_insumo =true;
    this.mantenimiento_stock_lente =true;
    this.mantenimiento_otros =true;
    this.facturacion_consulta =true;
    this.facturacion_control =true;
    this.medico_consulta =true;
    this.medico_control =true;
    this.quirofano_consulta =true;
    this.quirofano_control =true;
    this.asesoramiento_control =true;
    this.asesoramiento_consulta =true;
    this.recepcion_consulta =true;
    this.recepcion_control =true;
    this.administrador = true;
    this.user = null;
    this.elemento = null;
    this.elementoModulo = [];
    window.location.reload();
    //this.router.navigateByUrl('/');
}


get f() { return this.loginForm.controls; }

onSubmit() {
   
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.f.username.value, this.f.password.value)
     // .pipe(first())
      .subscribe(
          data => {
            this.user = data;
            let us = new User("","","","","",this.f.username.value,this.f.password.value,[]);
            localStorage.setItem('userData', JSON.stringify(us));
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            //  this.router.navigate([this.returnUrl]);
            this.loadUser();
          },
          error => {
         
            console.log(error);
              this.error = error;
              this.loading = false;
          });
}

ver(){
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser['access_token']);
}

loadUser(){

this.loading = true;
try {
  this.miServico.getItemInfoAndMenu(this.f.username.value)
    .subscribe(resp => {
    this.elemento = resp;
   // this.elementoModulo = this.elemento["access_list"]
       let currentUser =  JSON.parse(localStorage.getItem('currentUser'));
       let userData = JSON.parse(localStorage.getItem('userData'));
       console.log(this.elemento);
       this.elementoModulo = <any>this.elemento;
      this.user = new User(this.elemento[0]['id'] , this.elemento[0]['email'], this.elemento[0]['nombreyapellido'],
       this.elemento[0]['name'],'1',this.elemento[0]['email'], currentUser['access_token'],this.elementoModulo);
       this.username = userData['username'];
       localStorage.removeItem('userData');
       localStorage.setItem('userData', JSON.stringify(this.user));
       this.asignarModulos(this.elementoModulo);
     // console.log(this.user);
        this.loading = false;
        console.log('logueado');
        this.loggedIn = true;
      this.menuList();
    },
    error => { // error path
        console.log(error.message);
        console.log(error.status);
        localStorage.removeItem('error');
        localStorage.setItem('error', JSON.stringify(error));
         
    //    this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
     });    
} catch (error) {
//  this.throwAlert('error','Error al cargar los registros',error);
}  
}


menuList(){

  this.general = [
    {

      label: 'Recepción', 
      visible:!this.recepcion_consulta,
      items: [

        {
              label: 'Agenda',
              items: [
                {label: 'Atención', 'routerLink': 'recepcion/agenda'},
                {label: 'Gestion de turnos', 'routerLink': 'recepcion/turnos'},
              ]
          },
          {label: 'Operación de cobro',visible:!this.recepcion_consulta, 'routerLink': 'recepcion/operacioncobro'},
          {label: 'Detalle de operaciones de cobro',visible:! this.recepcion_consulta, 'routerLink': 'liquidacion/operacioncobro/detalle'},
          {label: 'Historia clínica',visible:!this.recepcion_consulta, 'routerLink': 'medico/historiaclinica/consulta'},
      ]
  },
  {
    label: 'Asesoramiento',
    visible:!this.asesoramiento_control,
    items: [
      {label: 'Atención', 'routerLink': 'gestion/agenda'},
      {label: 'Gestion de turnos', 'routerLink': 'recepcion/turnos'},

      {
            label: 'Cobros',
            items: [
              {label: 'Operación de cobro',visible:!this.asesoramiento_control, 'routerLink': 'asesoramiento/operacioncobro'},
              {label: 'Rendición de caja',visible:!this.asesoramiento_control, 'routerLink': 'asesoramiento/facturacion/rendicion'},

            ]
        },
        {
          label: 'Asesoramiento',
          visible:!this.asesoramiento_consulta,
          items: [
            {label: 'Derivación a cirugias', visible:!this.asesoramiento_consulta ,'routerLink': 'asesoramiento/cirugia/listado/cirugia'},
            {label: 'Listado de cirugias',  visible:!this.asesoramiento_control, 'routerLink': 'asesoramiento/cirugia/cirugia/listas'},
            {label: 'Ficha quirúrgica',  visible:!this.asesoramiento_control, 'routerLink': 'asesoramiento/cirugia/ficha'},
            {label: 'Historia clinica', visible:!this.asesoramiento_control, 'routerLink': 'medico/historiaclinica/consulta'},
          ]
      }
    ]
  },
  {
    label: 'Estudios',
    visible:!this.estudios_consulta,
    items: [
              {label: 'Atención', 'routerLink': 'gestion/agenda'},
              {label: 'Realizar estudio', visible:!this.estudios_control, 'routerLink': 'estudio/cargar'},
              {label: 'Historia clínica',visible:!this.estudios_consulta, 'routerLink': 'medico/historiaclinica/consulta'},
    ]
},

{
  label: 'Gerencia',
  visible:!this.gerencia_control,
  items: [           
            {label: 'Agenda consulta', visible:!this.gerencia_control, 'routerLink': 'gerencia/agenda/consulta'}, 
            {label: 'Operacion cobro consulta', visible:!this.gerencia_control, 'routerLink': 'gerencia/operacioncobro/consulta'}, 
 
  ]
},
  {   
    label: 'Quirófano',
    visible:!this.quirofano_consulta,
    items: [
      {label: 'Agenda de médicos',
      visible:!this.quirofano_control,'routerLink': 'recepcion/agenda'},
      {
            label: 'Quirófano',
            visible:!this.quirofano_control,
            items: [
              {label: 'Agenda de cirugia',
              visible:!this.quirofano_control,
               'routerLink': 'gestion/agenda'},
               {label: 'Listado de cirugia',
               visible:!this.quirofano_control,
               'routerLink': 'quirofona/cirugia/listado/cirugia'},
              {label: 'Control de insumos',
              visible:!this.quirofano_control,
               'routerLink': 'recepcion/agenda'},
              {label: 'Seguimiento paciente',
              visible:!this.quirofano_control,
               'routerLink': 'recepcion/agenda'},
               {label: 'Historia clínica',
               visible:!this.quirofano_control,
                'routerLink': 'medico/historiaclinica/consulta'},
            ]
        }
        
    ]
  },
  {   
    label: 'Médico',
    visible:!this.medico_control,
    items: [
      {label: 'Gestión de agenda',
      visible:!this.medico_control,'routerLink': 'gestion/agenda'},
      {
            label: 'Atención',  
            items: [
              {label: 'Historia clínica', 
              visible:!this.medico_control,'routerLink': 'medico/historiaclinica'},
              {label: 'Cirugias',
              visible:!this.medico_control, 'routerLink': 'asesoramiento/cirugia/listado/cirugia'},
            ]
        },
        {label: 'Cirugias',
        visible:!this.medico_control,'routerLink': 'medico/operacioncobro/listado/cirugia'},
        
        {
              label: 'Facturación',  
              items: [
                {label: 'Detalle de operación de cobro', 
                visible:!this.medico_control,'routerLink': 'medico/operacioncobro/detalle'},
                {label: 'Liquidacion - no disponible -',
                visible:!this.medico_control,'routerLink': 'medico/operacioncobro/detalle'},
              ]
          }
        
        
    ]
  },

  

  {   
    label: 'Facturación',
    visible:!this.facturacion_control,
    items: [
      {
            label: 'Facturación',
            visible:! this.facturacion_consulta,
            items: [
              {label: 'Detalle de operaciones de cobro',
               visible:! this.facturacion_consulta,
                'routerLink': 'liquidacion/operacioncobro/detalle'},
              {label: 'Auditar Operacion de cobro',
               visible:! this.facturacion_control,
                'routerLink': 'liquidacion/operacioncobro/auditar'},
              {label: 'Afectar Operacion de cobro',
                visible:! this.facturacion_control,
                 'routerLink': 'liquidacion/operacioncobro/afectar'}
            ]
      },
      {
          label: 'Liquidación',
          visible:! this.facturacion_control,
          items: [
            {label: 'Presentación', 'routerLink': 'facturacion/liquidacion/confeccion/factura'},
            {label: 'Liquidación D.O.S', 'routerLink': 'facturacion/liquidacion/provincia'},
            
            {
              label: 'Liquidación',
              visible:! this.facturacion_control,
              items: [
              {label: 'Detalle de liquidación', 'routerLink': 'facturacion/liquidacion/detalle'},
              {label: 'Liquidar', 'routerLink': 'facturacion/liquidacion/liquidar'},
              {label: 'Generar liquidación', 'routerLink': 'facturacion/liquidacion/generada'},
            ]}
          ]
      },
      {label: 'Historia clínica',visible:!this.recepcion_consulta, 'routerLink': 'medico/historiaclinica/consulta'},
    ]
  },
  {

    label: 'Mantenimiento',
    
    items: [{
            label: 'Gestión de agendas',
            visible:! this.recepcion_control,
            items: [
              {label: 'Agenda de medico', 'routerLink': 'agenda/medico'},
              {label: 'Bloquear agenda', 'routerLink': 'agenda/medico/bloquear'},
            ]
        },
        {
                  label: 'Convenios',
                  visible:! this.facturacion_control,
                  items: [
                    {label: 'Convenios', 'routerLink': 'convenios/convenio'},
                    {label: 'Obra social', 'routerLink': 'convenios/obrasocial'},
                    {label: 'Pmo', 'routerLink': 'convenios/pmo'},
                    {label: 'Distribucion de práctica', 'routerLink': 'distribucion'}
          ]
      },
        {
          label: 'Paciente',
          visible:! this.facturacion_control,
         'routerLink': 'paciente'},
        {
          label: 'Medicos',
          visible:! this.facturacion_control,
         'routerLink': 'medico'},
         {
          label: 'Usuario',
          visible:! this.administrador,
         'routerLink': 'usuario'},
        {
          label: 'Stock',          
          items: [
            {
              label: 'Lentes',
              visible:!this.mantenimiento_stock_lente,
              items: [
                {label: 'Stock de lentes', 'routerLink': 'stock/lente/stock'},
                {label: 'Alta de lente', 'routerLink': 'stock/lente/alta'},
                ]
            },
            {
              label: 'Insumos',
              visible:! this.mantenimiento_stock_insumo,
              items: [
                {label: 'Cargar insumo', 'routerLink': 'convenios/convenio'},
                ]
            }
    ]
  }
    ]
  }
   
 
];


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

if(errorNumero =='99'){
  mensaje ='Debe seleccionar un paciente antes de cargar las prácticas';
  swal({   
      type: 'warning',
      title: 'Atención..',
      text: mensaje,
      footer: motivo
    })
}

if(errorNumero =='100'){
  mensaje ='El paciente posee una obra social que no esta habilitada';
  swal({   
      type: 'warning',
      title: 'Atención..',
      text: mensaje,
      footer: motivo
    })
}
  if(estado == 'warning'){
    
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






