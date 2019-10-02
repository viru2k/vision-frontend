import { AuthGuard } from './guards/auth.guard';

import { OperacionCobroAuditarComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-auditar/operacion-cobro-auditar.component';
import { AgendaBloqueoComponent } from './pages/mantenimiento/agenda/agenda-bloqueo/agenda-bloqueo.component';
import { AgendaMedicoComponent } from './pages/mantenimiento/agenda/agenda-medico/agenda-medico.component';

import { TurnoComponent } from './pages/recepcion/agenda/turno/turno.component';
import { OperacionCobroComponent } from './pages/facturacion/operacion-cobro/operacion-cobro.component';



import { CirugiaGrupoMedicoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo-medico/cirugia-grupo-medico.component';

import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { QuirofanoComponent } from './pages/quirofano/quirofano.component';
import { MedicoComponent } from './pages/medico/medico.component';

import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PmoComponent } from './pages/mantenimiento/convenio/obra-social/pmo/pmo.component';
import { ObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/obra-social.component';
import { ConvenioComponent } from './pages/mantenimiento/convenio/convenio/convenio.component';
import { CirugiaGrupoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo/cirugia-grupo.component';

import { LiquidarComponent } from './pages/facturacion/liquidacion/liquidar/liquidar.component';
import { LiquidacionComponent } from './pages/facturacion/liquidacion/liquidacion.component';
import { LiquidacionGeneradaComponent } from './pages/facturacion/liquidacion-generada/liquidacion-generada.component';
import { AgendaComponent } from './pages/recepcion/agenda/agenda.component';
import { DistribucionPracticaComponent } from './pages/mantenimiento/distribucion-practica/distribucion-practica.component';
import { OperacionCobroDetalleComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-detalle/operacion-cobro-detalle.component';
import { OperacionCobroAfectarComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-afectar/operacion-cobro-afectar.component';
import { FichaQuirurgicaComponent } from './pages/asesoramiento/ficha-quirurgica/ficha-quirurgica.component';
import { RendicionCajaComponent } from './pages/asesoramiento/rendicion-caja/rendicion-caja.component';
import { AgendaAtencionMedicoComponent } from './pages/medico/agenda/agenda-atencion-medico/agenda-atencion-medico.component';
import { HistoriaClinicaComponent } from './pages/medico/historia-clinica/historia-clinica.component';
import { ChatListaComponent } from './shared/components/chat/chat-lista/chat-lista.component';
import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';
import { ListadoCirugiaComponent } from './pages/asesoramiento/ficha-quirurgica/listado-cirugia/listado-cirugia.component';
import { UsuarioModuloComponent } from './pages/mantenimiento/usuario/usuario-modulo/usuario-modulo.component';
import { LiquidacionDetalleComponent } from './pages/facturacion/liquidacion/liquidar/liquidacion-detalle/liquidacion-detalle.component';
import { LiquidacionProvinciaComponent } from './pages/facturacion/liquidacion/provincia/liquidacion-provincia/liquidacion-provincia.component';
import { ConfeccionFacturaComponent } from './pages/facturacion/liquidacion/liquidar/confeccion-factura/confeccion-factura.component';
import { AltaLenteComponent } from './pages/stock/lentes/alta-lente/alta-lente.component';
import { StockLenteComponent } from './pages/stock/lentes/stock-lente/stock-lente.component';
import { HistoriaClinicaVisualizarComponent } from './pages/medico/historia-clinica/historia-clinica-visualizar/historia-clinica-visualizar.component';
import { OperacionCobroDetalleMedicoComponent } from './pages/medico/facturacion/operacion-cobro-detalle-medico/operacion-cobro-detalle-medico.component';
import { AgendaConsultaComponent } from './pages/gerencia/agenda/agenda-consulta/agenda-consulta.component';
import { OperacionCobroConsultaGerenciaComponent } from './pages/gerencia/operacioncobro/operacion-cobro-consulta-gerencia/operacion-cobro-consulta-gerencia.component';
import { EstudioCargaComponent } from './pages/estudios/estudio-carga/estudio-carga.component';
import { ListadoCirugiaQuirofanoComponent } from './pages/asesoramiento/ficha-quirurgica/listado-cirugia-quirofano/listado-cirugia-quirofano.component';
import { ListadoCirugiaEditarComponent } from './pages/medico/asesoramiento/listado-cirugia-editar/listado-cirugia-editar.component';
import { AgendaBloqueoEdicionComponent } from './pages/mantenimiento/agenda/agenda-bloqueo-edicion/agenda-bloqueo-edicion.component';
import { AgendaRecepcionComponent } from './pages/recepcion/agenda/agenda-recepcion/agenda-recepcion.component';
import { ListadoCirugiaQuirofanoConsultaComponent } from './pages/quirofano/listado-cirugia-quirofano-consulta/listado-cirugia-quirofano-consulta.component';
import { FacturaElectronicaComponent } from './pages/facturacion/factura/factura-electronica/factura-electronica.component';

export const ROUTES: Routes = [
    /** principal **/
    { path: 'inicio', component: EmptyComponent },
    { path: '404', component: NotFoundComponent },    
    { path: 'quirofano', component: QuirofanoComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'estadistica', component: EstadisticaComponent, canActivate: [AuthGuard], data: {role: 'quirofano_consulta'}  },
    /** mantenimiento **/
    { path: 'medico', component: MedicoComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'usuario', component: UsuarioModuloComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'paciente', component: PacienteComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'convenios/convenio', component: ConvenioComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'convenios/obrasocial', component: ObraSocialComponent },
    { path: 'convenios/pmo', component: PmoComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}   },
    { path: 'cirugiagrupo', component: CirugiaGrupoComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'distribucion', component: DistribucionPracticaComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    /** mantenimiento de agenda */
    { path: 'agenda/medico', component: AgendaMedicoComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    { path: 'agenda/medico/bloquear', component: AgendaBloqueoComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    { path: 'agenda/medico/desbloquear', component: AgendaBloqueoEdicionComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    /** asesoramiento **/

    { path: 'asesoramiento/cirugia/ficha', component: FichaQuirurgicaComponent, canActivate: [AuthGuard], data: {role: 'asesoramiento_consulta'}  },
    { path: 'asesoramiento/cirugia/listado/cirugia', component: ListadoCirugiaComponent, canActivate: [AuthGuard], data: {role: 'asesoramiento_control'}  },
    { path: 'asesoramiento/cirugia/cirugia/listas', component: ListadoCirugiaQuirofanoComponent , canActivate: [AuthGuard], data: {role: 'asesoramiento_control'}  },
    { path: 'asesoramiento/operacioncobro', component: OperacionCobroComponent, canActivate: [AuthGuard], data: {role: 'asesoramiento_consulta'}  },    
    { path: 'asesoramiento/facturacion/rendicion', component: RendicionCajaComponent , canActivate: [AuthGuard], data: {role: 'asesoramiento_control'} },

    /** facturacion**/
    { path: 'facturacion/liquidacion/generada', component: LiquidacionGeneradaComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'facturacion/liquidacion/liquidacion', component: LiquidacionComponent , canActivate: [AuthGuard], data: {role: 'facturacion_control'} },
    { path: 'facturacion/liquidacion/liquidar', component: LiquidarComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'facturacion/operacioncobro', component: OperacionCobroComponent, canActivate: [AuthGuard], data: {role: 'facturacion_consulta'}  },
    { path: 'liquidacion/operacioncobro/detalle', component: OperacionCobroDetalleComponent, canActivate: [AuthGuard], data: {role: 'facturacion_consulta'}  },
    { path: 'liquidacion/operacioncobro/auditar', component: OperacionCobroAuditarComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'liquidacion/operacioncobro/afectar', component: OperacionCobroAfectarComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'facturacion/liquidacion/confeccion', component: ConfeccionFacturaComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'facturacion/liquidacion/provincia', component: LiquidacionProvinciaComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'facturacion/liquidacion/presentacion', component:LiquidacionDetalleComponent , canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },

    { path: 'recepcion/factura/electronica', component: FacturaElectronicaComponent , canActivate: [AuthGuard], data: {role: 'recepcion_consulta'} },
    /** recepcion **/
    { path: 'recepcion/agenda', component: AgendaRecepcionComponent , canActivate: [AuthGuard], data: {role: 'recepcion_consulta'} },
    { path: 'recepcion/telefonista/agenda', component: AgendaComponent , canActivate: [AuthGuard], data: {role: 'recepcion_consulta'} },
    { path: 'recepcion/turnos', component: TurnoComponent , canActivate: [AuthGuard], data: {role: 'recepcion_consulta'} },
    { path: 'recepcion/operacioncobro', component: OperacionCobroComponent, canActivate: [AuthGuard], data: {role: 'recepcion_consulta'}  },
    

    /** stock **/
    { path: 'stock/lente/alta', component: AltaLenteComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    { path: 'stock/lente/stock', component: StockLenteComponent, canActivate: [AuthGuard], data: {role: 'facturacion_control'}  },
    
    /** estudios **/
    { path: 'estudio/cargar', component: EstudioCargaComponent, canActivate: [AuthGuard], data: {role: 'estudios_control'}  },
    
 
    /** medicos**/
    { path: 'medico/turnos', component: TurnoComponent , canActivate: [AuthGuard], data: {role: 'medico_consulta'} },
    { path: 'gestion/agenda', component: AgendaAtencionMedicoComponent, canActivate: [AuthGuard], data: {role: 'medico_consulta'}  },
    { path: 'medico/historiaclinica', component: HistoriaClinicaComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    { path: 'medico/historiaclinica/consulta', component: HistoriaClinicaVisualizarComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    { path: 'medico/operacioncobro/detalle', component: OperacionCobroDetalleMedicoComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    { path: 'medico/operacioncobro/listado/cirugia', component: ListadoCirugiaEditarComponent, canActivate: [AuthGuard], data: {role: 'medico_control'}  },
    
     /** gerencia **/
     { path: 'gerencia/agenda/consulta', component: AgendaConsultaComponent, canActivate: [AuthGuard], data: {role: 'gerencia_control'}  },
     { path: 'gerencia/operacioncobro/consulta', component: OperacionCobroConsultaGerenciaComponent, canActivate: [AuthGuard], data: {role: 'gerencia_control'}  },

     /** quirofano */
     { path: 'medico/cirugia/listado/cirugia', component: ListadoCirugiaEditarComponent, canActivate: [AuthGuard], data: {role: 'quirofano_control'}  },
     { path: 'quirofona/cirugia/listado/cirugia', component: ListadoCirugiaQuirofanoConsultaComponent, canActivate: [AuthGuard], data: {role: 'quirofano_control'}  },
     
    /** otros **/
    { path: 'chat', component: ChatListaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];



