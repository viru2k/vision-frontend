import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData,LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule  } from '@angular/common/http';
 
/** LIBRERIAS 3RO**/
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SpinnerModule} from 'primeng/spinner';
import {ToastModule} from 'primeng/toast';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import {ListboxModule} from 'primeng/listbox';
import {MenuItem, MessageService,DialogService} from 'primeng/api';

import localeEsAR from '@angular/common/locales/es-AR';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutofocusModule } from 'angular-autofocus-fix'; 


/** COMPONENTES **/
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
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
/** compartido**/
import { LoadingComponent } from './shared/components/loading/loading.component';

/** DIRECTIVAS **/

import { DropdownDirective } from './shared/dropdown.directive';

import { ROUTES } from './app.routes';
import { NgxPopper } from 'angular-popper';


/** SERVICIOS **/

/** MANTENIMIENTO **/
import { PacienteService } from './services/paciente.service';
import { ObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/obra-social.component';
import { PmoComponent } from './pages/mantenimiento/convenio/obra-social/pmo/pmo.component';
import { ConvenioComponent } from './pages/mantenimiento/convenio/convenio/convenio.component';

/** MEDICO **/
import { MedicoObraSocialComponent } from './pages/mantenimiento/medico-obra-social/medico-obra-social.component';
import { GrupoComponent } from './pages/mantenimiento/medico/grupo/grupo.component';
import { GrupoMedicoComponent } from './pages/mantenimiento/medico/grupo-medico/grupo-medico.component';
/** FACTURACION **/
import { LiquidacionGeneradaComponent } from './pages/facturacion/liquidacion-generada/liquidacion-generada.component';
import { LiquidacionComponent } from './pages/facturacion/liquidacion/liquidacion.component';

/** PRACTICA - CIRUGIA **/
import { CirugiaComponent } from './pages/mantenimiento/cirugia/cirugia.component';
import { CirugiaGrupoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo/cirugia-grupo.component';
import { CirugiaGrupoMedicoComponent } from './pages/mantenimiento/cirugia/cirugia-grupo-medico/cirugia-grupo-medico.component';

import { PopupObrasocialComponent } from './pages/mantenimiento/popup/popup-obrasocial/popup-obrasocial.component';
import { PopupPmoComponent } from './pages/mantenimiento/popup/popup-pmo/popup-pmo.component';
import { PopupEntidadFacturaComponent } from './pages/mantenimiento/popup/popup-entidad-factura/popup-entidad-factura.component';
import { PopupMedicoComponent } from './pages/mantenimiento/popup/popup-medico/popup-medico.component';
import { PopupMedicoGrupoMedicoComponent } from './pages/mantenimiento/popup/popup-medico-grupo-medico/popup-medico-grupo-medico.component';
import { PopupMedicoGrupoComponent } from './pages/mantenimiento/popup/popup-medico-grupo/popup-medico-grupo.component';
import { LiquidarComponent } from './pages/facturacion/liquidacion/liquidar/liquidar.component';
import { OperacionCobroComponent } from './pages/facturacion/operacion-cobro/operacion-cobro.component';
import { AgendaComponent } from './pages/recepcion/agenda/agenda.component';
import { OperacioncobroComponent } from './pages/recepcion/operacioncobro/operacioncobro.component';
import { GestionAgendaComponent } from './pages/recepcion/agenda/gestion-agenda/gestion-agenda.component';
import { EditConvenioComponent } from './pages/mantenimiento/convenio/edit-convenio/edit-convenio.component';
import { CreacionComponent } from './pages/mantenimiento/popup/popup-paciente/creacion/creacion.component';
import { PopupAgendaComponent } from './shared/components/popups/popup-agenda/popup-agenda.component';
import { PopupGrupoMedicoComponent } from './shared/components/popups/popup-grupo-medico/popup-grupo-medico.component';
import { PopupConvenioComponent } from './shared/components/popups/popup-convenio/popup-convenio.component';
import { PopupPacienteComponent } from './shared/components/popups/popup-paciente/popup-paciente.component';
import { TurnoComponent } from './pages/recepcion/agenda/turno/turno.component';
import { OperacionCobroCirugiaComponent } from './pages/facturacion/operacion-cobro-cirugia/operacion-cobro-cirugia.component';
import { AgendaPrincipalComponent } from './pages/mantenimiento/agenda/agenda-principal/agenda-principal.component';
import { PopupCombinadaComponent } from './pages/facturacion/operacion-cobro/popup-combinada/popup-combinada.component';
import { PopupCombinadaItemComponent } from './pages/facturacion/operacion-cobro/popup-combinada/popup-combinada-item/popup-combinada-item.component';
import { EditObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/edit-obra-social/edit-obra-social.component';
import { DistribucionPracticaComponent } from './pages/mantenimiento/distribucion-practica/distribucion-practica.component';




registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    

    NavbarComponent,
    LoginComponent,
    RecepcionComponent,
    AsesoramenientoComponent,
    QuirofanoComponent,
    MedicoComponent,
    FacturacionComponent,
    EstadisticaComponent,
    SharedComponent,
    MantenimientoComponent,
    PacienteComponent,
    LoadingComponent,
    ObraSocialComponent,
    ConvenioComponent,
    PmoComponent,
    MedicoObraSocialComponent,
    CirugiaComponent,
    CirugiaGrupoComponent,
    CirugiaGrupoMedicoComponent,
    LiquidacionGeneradaComponent,
    LiquidacionComponent,
    GrupoComponent,
    GrupoMedicoComponent,

    PopupObrasocialComponent,
    PopupPmoComponent,
    PopupEntidadFacturaComponent,
    PopupMedicoComponent,
    PopupMedicoGrupoMedicoComponent,
    PopupMedicoGrupoComponent,
    LiquidarComponent,
    OperacionCobroComponent,
    AgendaComponent,
    OperacioncobroComponent,
    GestionAgendaComponent,
    EditConvenioComponent,
    CreacionComponent,
    PopupAgendaComponent,
    PopupGrupoMedicoComponent,
    PopupConvenioComponent,
    PopupPacienteComponent,
    TurnoComponent,
    OperacionCobroCirugiaComponent,
    AgendaPrincipalComponent,
    PopupCombinadaComponent,
    PopupCombinadaItemComponent,
    EditObraSocialComponent,
    DistribucionPracticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    DialogModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    MenubarModule,
    MenuModule,
    CheckboxModule,
    SpinnerModule,
    ToastModule,
    ListboxModule,
    OverlayPanelModule,
    DynamicDialogModule,
    SweetAlert2Module.forRoot(),
    AutofocusModule,
      RouterModule.forRoot( ROUTES, { useHash: true } ),
      NgxPopper
  ],
  entryComponents: [
    PopupObrasocialComponent,PopupPmoComponent,PopupEntidadFacturaComponent,PopupMedicoComponent,
    PopupPacienteComponent,PopupMedicoGrupoMedicoComponent,PopupMedicoGrupoComponent, EditConvenioComponent,EditObraSocialComponent,
    PopupAgendaComponent,PopupGrupoMedicoComponent,PopupConvenioComponent, PopupCombinadaComponent,
    PopupCombinadaItemComponent
  ],
  providers: [PacienteService,{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

