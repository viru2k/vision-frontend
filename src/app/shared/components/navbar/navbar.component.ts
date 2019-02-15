import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
//"@types/chart.js": "^2.7.40",
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  general: MenuItem[];
  rolAdmin:boolean =false;
  rolAgenda:boolean =false;
  rolAsesoramiento:boolean =false;
  rolFacturacion:boolean =false;
  rolMedico:boolean =false;
  rolQuirofano:boolean =false;
  rolEspecial:boolean =false;

  constructor() { 
    this.rolAdmin = false;
    this.rolAgenda = false;
    this.rolAsesoramiento = false;
    this.rolFacturacion = false;
    this.rolMedico = false;
    this.rolQuirofano = true;
    this.rolEspecial = false;
  }
 navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
    this.general = [
      {
        
        label: 'Recepción',
 
        disabled:this.rolAgenda,
        items: [
       
          {
                label: 'Agenda',  
                items: [
                  {"label": "Atención", "routerLink": "recepcion/agenda"},                  
                  {"label": "Gestion de turnos", "routerLink": "recepcion/turnos"},
                ]
            },
            {label: 'Operación de cobro',disabled:this.rolEspecial, "routerLink": "recepcion/operacioncobro"},
            {label: 'Estado de turnos'}
        ]
    },
    {   
      label: 'Asesoramiento',
      disabled:this.rolAgenda,
      items: [
        {label: "Gestion de turnos", "routerLink": "recepcion/agenda/gestion"},
        {label: 'Operación de cobro',disabled:this.rolEspecial, "routerLink": "facturacion/operacioncobro/cirugia"},
        {
              label: 'Asesoramiento',  
              items: [
                {"label": "Gestión cirugia", "routerLink": "convenios/convenio"},
                {"label": "Consulta paciente", "routerLink": "convenios/obrasocial"},                  
              ]
          }
      ]
    },
    {
      label: 'Estudios',
      disabled:this.rolFacturacion,
      items: [
                {label: 'Gestión de agenda',"routerLink": "convenios/convenio"},
                {"label": "Realizar estudio", "routerLink": "convenios/convenio"},
                {"label": "Estudios", "routerLink": "convenios/obrasocial"},
                {"label": "Informes", "routerLink": "convenios/pmo"}
      ]
  },
    {   
      label: 'Quirófano',
      disabled:this.rolAgenda,
      items: [
        {label: 'Gestión de agenda',"routerLink": "convenios/convenio"},
        {
              label: 'Quirófano',  
              items: [
                {"label": "Gestión cirugia", "routerLink": "convenios/convenio"},
                {"label": "Control de insumos", "routerLink": "convenios/convenio"},
                {"label": "Seguimiento paciente", "routerLink": "convenios/obrasocial"},                  
              ]
          },
          {label: 'Estado de turnos'}
      ]
    },
    {   
      label: 'Médico',
      disabled:this.rolMedico,
      items: [
        {label: 'Gestión de agenda',"routerLink": "convenios/convenio"},
        {
              label: 'Atención',  
              items: [
                {"label": "Historia clínica", "routerLink": "convenios/convenio"},
                {"label": "Consultar paciente", "routerLink": "convenios/convenio"},
                {"label": "Asignar turno", "routerLink": "convenios/obrasocial"},                  
              ]
          }
      ]
    },



    {   
      label: 'Facturación',
      disabled:this.rolFacturacion,
      items: [
        {label: 'Operación de cobro',"routerLink": "facturacion/operacioncobro"},
        {
          
              label: 'Facturación',  
              items: [
                {"label": "Gestión cirugia", "routerLink": "convenios/convenio"},
                {"label": "Control de insumos", "routerLink": "convenios/convenio"},
                {"label": "Seguimiento paciente", "routerLink": "convenios/obrasocial"},                  
              ]
        },
        {
            label: 'Liquidación',  
            items: [
              {"label": "Gestión cirugia", "routerLink": "convenios/convenio"},
              {"label": "Control de insumos", "routerLink": "convenios/convenio"},
              {"label": "Seguimiento paciente", "routerLink": "convenios/obrasocial"},     
              {
                label: 'Liquidación',items: [
                {"label": "Liquidación generada", "routerLink": "facturacion/liquidacion/generada"},
                {"label": "Liquidación detalle", "routerLink": "facturacion/liquidacion/liquidacion"},
                {"label": "Liquidar", "routerLink": "facturacion/liquidacion/liquidar"},                  
              ]}             
            ]
        },
        {
            label: 'Auditoria',  
            items: [
              {"label": "Gestión cirugia", "routerLink": "convenios/convenio"},
              {"label": "Control de insumos", "routerLink": "convenios/convenio"},
              {"label": "Seguimiento paciente", "routerLink": "convenios/obrasocial"},                  
            ]
        },
          {label: 'Estado de turnos'}
      ]
    },




    
    
    {
      
      label: 'Mantenimiento',
      disabled:this.rolFacturacion,
      items: [{
              label: 'Gestión de agendas',  
              items: [
                {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
                {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
              ]
          },
          {
            
                    label: 'Convenios',  
                    items: [
                      {"label": "Convenios", "routerLink": "convenios/convenio"},
                      {"label": "Obra social", "routerLink": "convenios/obrasocial"},
                      {"label": "Pmo", "routerLink": "convenios/pmo"},
                      {"label": "Distribucion de práctica", "routerLink": "distribucion"} 
            ]
        },
          {"label": "Paciente", "routerLink": "paciente"},
          {"label": "Medicos", "routerLink": "medico"},
          {
            label: 'Gestión de medicos',  
            items: [
              {"label": "Grupos de trabajo", "routerLink": "medico/grupo"},
              {"label": "Grupo de medicos", "routerLink": "medico/grupo/medico"},
              {"label": "Medicos que facturan", "routerLink": "medico/grupo/medico/factura"}
            ]
        }
      ]
    },
    {
      
      label: 'Informes',
      visible:this.rolFacturacion,
      items: [
        {
              label: 'Recepción',  
              items: [
                {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
                {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
              ]
          },
          {
            label: 'Asesoramiento',  
            items: [
              {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
              {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
            ]
        },
        {
          label: 'Quirófano',  
          items: [
            {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
            {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
          ]
        },
        {
          label: 'Estudios',  
          items: [
            {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
            {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
          ]
        },
        {
          label: 'Médicos',  
          items: [
            {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
            {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
          ]
        },
        {
          label: 'Facturación',  
          items: [
            {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
            {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
          ]
        },
        {
          label: 'Gerencia',  
          items: [
            {"label": "Agenda de medico", "routerLink": "convenios/obrasocial"},
            {"label": "Bloquear agenda", "routerLink": "convenios/convenio"},
          ]
        }
        ]
      },
     
    { 
      label: 'Sesión',
      items: [ 
         {"label": "Gestión de cuenta", "routerLink": "paciente"},
         {"label": "Cerrar sesión", "routerLink": "paciente"}         
      ]
   }
  ];
}
}
