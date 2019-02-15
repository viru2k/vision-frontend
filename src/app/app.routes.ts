import { OperacionCobroCirugiaComponent } from './pages/facturacion/operacion-cobro-cirugia/operacion-cobro-cirugia.component';
import { TurnoComponent } from './pages/recepcion/agenda/turno/turno.component';
import { OperacionCobroComponent } from './pages/facturacion/operacion-cobro/operacion-cobro.component';


import { GrupoComponent } from './pages/mantenimiento/medico/grupo/grupo.component';
import { CirugiaGrupoMedicoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo-medico/cirugia-grupo-medico.component';

import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { AsesoramenientoComponent } from './pages/asesorameniento/asesorameniento.component';
import { QuirofanoComponent } from './pages/quirofano/quirofano.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { SharedComponent } from './pages/shared/shared.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PmoComponent } from './pages/mantenimiento/convenio/obra-social/pmo/pmo.component';
import { ObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/obra-social.component';
import { ConvenioComponent } from './pages/mantenimiento/convenio/convenio/convenio.component';
import { CirugiaGrupoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo/cirugia-grupo.component';
import { GrupoMedicoComponent } from './pages/mantenimiento/medico/grupo-medico/grupo-medico.component';
import { LiquidarComponent } from './pages/facturacion/liquidacion/liquidar/liquidar.component';
import { LiquidacionComponent } from './pages/facturacion/liquidacion/liquidacion.component';
import { LiquidacionGeneradaComponent } from './pages/facturacion/liquidacion-generada/liquidacion-generada.component';
import { AgendaComponent } from './pages/recepcion/agenda/agenda.component';
import { GestionAgendaComponent } from './pages/recepcion/agenda/gestion-agenda/gestion-agenda.component';
import { DistribucionPracticaComponent } from './pages/mantenimiento/distribucion-practica/distribucion-practica.component';


export const ROUTES: Routes = [
    /** principal **/
    { path: 'login', component: LoginComponent },
    { path: 'recepcion', component: RecepcionComponent },
    { path: 'asesoramiento', component: AsesoramenientoComponent },
    { path: 'quirofano', component: QuirofanoComponent },
    { path: 'facturacion', component: FacturacionComponent },
    { path: 'estadistica', component: EstadisticaComponent },
    /** mantenimiento **/
    { path: 'medico', component: MedicoComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: 'convenios/convenio', component: ConvenioComponent },
    { path: 'convenios/obrasocial', component: ObraSocialComponent },
    { path: 'convenios/pmo', component: PmoComponent },
    { path: 'cirugiagrupo', component: CirugiaGrupoComponent },    
    { path: 'distribucion', component: DistribucionPracticaComponent },    

    /**medico**/
    { path: 'medico/grupo', component: GrupoComponent },
    { path: 'medico/grupo/medico', component: GrupoMedicoComponent },

    /** facturacion**/
    { path: 'facturacion/liquidacion/generada', component: LiquidacionGeneradaComponent },
    { path: 'facturacion/liquidacion/liquidacion', component: LiquidacionComponent },
    { path: 'facturacion/liquidacion/liquidar', component: LiquidarComponent },
    { path: 'facturacion/operacioncobro', component: OperacionCobroComponent },
    { path: 'facturacion/operacioncobro/cirugia', component: OperacionCobroCirugiaComponent },

    /** recepcion **/
    { path: 'recepcion/agenda', component: AgendaComponent },
    { path: 'recepcion/turnos', component: TurnoComponent },
    { path: 'recepcion/agenda/gestion', component: GestionAgendaComponent },
    { path: 'recepcion/operacioncobro', component: OperacionCobroComponent },
    /** otros **/
    
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];



