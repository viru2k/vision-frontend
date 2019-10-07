import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { PopupMedicoEditComponent } from './pages/medico/popup-medico-edit/popup-medico-edit.component';

import { SwPush } from '@angular/service-worker'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID, Injector} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule  } from '@angular/common/http';
 
/** LIBRERIAS 3RO**/ 

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {config } from './config/config';
import {CardModule} from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
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
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenuItem, MessageService,DialogService,SelectItem} from 'primeng/api';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import localeEsAR from '@angular/common/locales/es-AR';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutofocusModule } from 'angular-autofocus-fix'; 
import localeEsAr from '@angular/common/locales/es-AR'; 
registerLocaleData(localeEsAR, 'es-Ar');


/****barcode para imprimir */
import { NgxBarcodeModule } from 'ngx-barcode';

/** COMPONENTES **/
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { QuirofanoComponent } from './pages/quirofano/quirofano.component';
import { MedicoComponent } from './pages/medico/medico.component';

import { EstadisticaComponent } from './pages/estadistica/estadistica.component';

import { PacienteComponent } from './pages/paciente/paciente.component';
import {PopupMedicoComponent} from './shared/components/popups/popup-medico/popup-medico.component';
/** compartido**/
import { LoadingComponent } from './shared/components/loading/loading.component';

/** DIRECTIVAS **/



import { ROUTES } from './app.routes';
import { NgxPopper } from 'angular-popper';


/** SERVICIOS **/

/** MANTENIMIENTO **/
import { PacienteService } from './services/paciente.service';
import { ObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/obra-social.component';
import { PmoComponent } from './pages/mantenimiento/convenio/obra-social/pmo/pmo.component';
import { ConvenioComponent } from './pages/mantenimiento/convenio/convenio/convenio.component';
import { PopupEditarMedicoComponent } from './pages/mantenimiento/medico/popup-medico/popup-edit-medico.component';
/** MEDICO **/


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

import { PopupMedicoGrupoMedicoComponent } from './pages/mantenimiento/popup/popup-medico-grupo-medico/popup-medico-grupo-medico.component';
import { PopupMedicoGrupoComponent } from './pages/mantenimiento/popup/popup-medico-grupo/popup-medico-grupo.component';
import { LiquidarComponent } from './pages/facturacion/liquidacion/liquidar/liquidar.component';
import { OperacionCobroComponent } from './pages/facturacion/operacion-cobro/operacion-cobro.component';
import { AgendaComponent } from './pages/recepcion/agenda/agenda.component';
import { EditConvenioComponent } from './pages/mantenimiento/convenio/edit-convenio/edit-convenio.component';
import { CreacionComponent } from './pages/mantenimiento/popup/popup-paciente/creacion/creacion.component';
import { PopupAgendaComponent } from './shared/components/popups/popup-agenda/popup-agenda.component';

import { PopupConvenioComponent } from './shared/components/popups/popup-convenio/popup-convenio.component';

import { TurnoComponent } from './pages/recepcion/agenda/turno/turno.component';

import { PopupCombinadaComponent } from './pages/facturacion/operacion-cobro/popup-combinada/popup-combinada.component';
import { PopupCombinadaItemComponent } from './pages/facturacion/operacion-cobro/popup-combinada/popup-combinada-item/popup-combinada-item.component';
import { EditObraSocialComponent } from './pages/mantenimiento/convenio/obra-social/edit-obra-social/edit-obra-social.component';
import { DistribucionPracticaComponent } from './pages/mantenimiento/distribucion-practica/distribucion-practica.component';
import { PopupCombinadaLecturaComponent } from './pages/facturacion/operacion-cobro/popup-combinada-lectura/popup-combinada-lectura.component';
import { PopUpFormaPagoComponent } from './shared/components/popups/popup-forma-pago/popup-forma-pago.component';
import { AgendaMedicoComponent } from './pages/mantenimiento/agenda/agenda-medico/agenda-medico.component';
import { PopupUsuarioComponent } from './shared/components/popups/popup-usuario/popup-usuario.component';
import { PopupTurnoUsuarioObraSocialComponent } from './pages/recepcion/agenda/turno/popup-turno-usuario-obra-social/popup-turno-usuario-obra-social.component';
import { PopupPacienteComponent } from './shared/components/popups/popup-paciente/popup-paciente.component';
import { PopupPacienteNuevoComponent } from './pages/paciente/popup-paciente/popup-paciente.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { PopupPacienteObrasocialComponent } from './shared/components/popups/popup-paciente-obrasocial/popup-paciente-obrasocial.component';
import { PopupPracticaPorcentajeComponent } from './shared/components/popups/popup-practica-porcentaje/popup-practica-porcentaje.component';
import { PopupObraSocialMedicoComponent } from './pages/medico/popup-obra-social-medico/popup-obra-social-medico.component';
import { PopupObraSocialComponent } from './shared/components/popups/popup-obra-social/popup-obra-social.component';
import { from } from 'rxjs';
import { AgendaBloqueoComponent } from './pages/mantenimiento/agenda/agenda-bloqueo/agenda-bloqueo.component';
import { OperacionCobroAuditarComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-auditar/operacion-cobro-auditar.component';
import { OperacionCobroEditarComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-editar/operacion-cobro-editar.component';
import { FichaQuirurgicaComponent } from './pages/asesoramiento/ficha-quirurgica/ficha-quirurgica.component';

import { PopupTurnoEditarComponent } from './shared/components/popups/popup-turno-editar/popup-turno-editar.component';
import { OperacionCobroDetalleComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-detalle/operacion-cobro-detalle.component';
import { PopupHistoriaClinicaResumenComponent } from './shared/popups/medico/popup-historia-clinica-resumen/popup-historia-clinica-resumen.component';
import { PopupOperacionCobroRegistroEditarComponent } from './shared/components/popups/popup-operacion-cobro-registro-editar/popup-operacion-cobro-registro-editar.component';
import { OperacionCobroAfectarComponent } from './pages/facturacion/liquidacion/auditar/operacion-cobro-afectar/operacion-cobro-afectar.component';
import { RendicionCajaComponent } from './pages/asesoramiento/rendicion-caja/rendicion-caja.component';
import { StockLenteComponent } from './pages/stock/lentes/stock-lente/stock-lente.component';
import { AltaLenteComponent } from './pages/stock/lentes/alta-lente/alta-lente.component';
import { PopupDetalleLenteComponent } from './pages/stock/lentes/popup/popup-detalle-lente/popup-detalle-lente.component';
import { LenteComponent } from './pages/mantenimiento/stock/lente/lente.component';
import { InsumoComponent } from './pages/mantenimiento/stock/insumo/insumo.component';
import { HistoriaClinicaComponent } from './pages/medico/historia-clinica/historia-clinica.component';
import { AgendaAtencionMedicoComponent } from './pages/medico/agenda/agenda-atencion-medico/agenda-atencion-medico.component';
import { ChatListaComponent } from './shared/components/chat/chat-lista/chat-lista.component';
import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';
import { ListadoCirugiaComponent } from './pages/asesoramiento/ficha-quirurgica/listado-cirugia/listado-cirugia.component';
import { PopupLentesComponent } from './shared/components/popups/popup-lentes/popup-lentes.component';
import { UsuarioModuloComponent } from './pages/mantenimiento/usuario/usuario-modulo/usuario-modulo.component';
import { LiquidacionProvinciaComponent } from './pages/facturacion/liquidacion/provincia/liquidacion-provincia/liquidacion-provincia.component';
import { LiquidacionDetalleComponent } from './pages/facturacion/liquidacion/liquidar/liquidacion-detalle/liquidacion-detalle.component';
import { ConfeccionFacturaComponent } from './pages/facturacion/liquidacion/liquidar/confeccion-factura/confeccion-factura.component';
import { PopupFichaQuirurgicaLenteComponent } from './shared/components/popups/popup-ficha-quirurgica-lente/popup-ficha-quirurgica-lente.component';
import { PopupFichaQuirurgicaMedicoGrupoComponent } from './shared/components/popups/popup-ficha-quirurgica-medico-grupo/popup-ficha-quirurgica-medico-grupo.component';
import { PopupFichaQuirurgicaEstadoComponent } from './shared/components/popups/popup-ficha-quirurgica-estado/popup-ficha-quirurgica-estado.component';
import { PopupFichaQuirurgicaAnesteciaComponent } from './shared/components/popups/popup-ficha-quirurgica-anestecia/popup-ficha-quirurgica-anestecia.component';
import { PopupPacienteEstudioComponent } from './shared/components/popups/popup-paciente-estudio/popup-paciente-estudio.component';

import { PopupLenteTipoComponent } from './shared/components/popups/popup-lente-tipo/popup-lente-tipo.component';
import { PopupHistoriaClinicaListaConsultaComponent } from './shared/components/popups/popup-historia-clinica-lista-consulta/popup-historia-clinica-lista-consulta.component';

import { PopupLiquidacionDetalleComponent } from './shared/components/popups/popup-liquidacion-detalle/popup-liquidacion-detalle.component';
import { PopupHistoriaClinicaRegistroComponent } from './shared/components/popups/popup-historia-clinica-registro/popup-historia-clinica-registro.component';
import { PopupHistoriaClinicaRegistroNuevoComponent } from './shared/components/popups/popup-historia-clinica-registro-nuevo/popup-historia-clinica-registro-nuevo.component';

import { PopupDerivarAsesoramientoComponent } from './shared/components/popups/popup-derivar-asesoramiento/popup-derivar-asesoramiento.component';
import { HistoriaClinicaVisualizarComponent } from './pages/medico/historia-clinica/historia-clinica-visualizar/historia-clinica-visualizar.component';
import { PopupAgendaObservacionComponent } from './shared/components/popups/popup-agenda-observacion/popup-agenda-observacion.component';
import { PopupOperacionCobroEditarComponent } from './shared/components/popups/popup-operacion-cobro-editar/popup-operacion-cobro-editar.component';
import { PopupPacienteConsultaComponent } from './shared/components/popups/popup-paciente-consulta/popup-paciente-consulta.component';
import { OperacionCobroDetalleMedicoComponent } from './pages/medico/facturacion/operacion-cobro-detalle-medico/operacion-cobro-detalle-medico.component';
import { PopupOperacionCobroRegistroBuscarComponent } from './shared/components/popups/popup-operacion-cobro-registro-buscar/popup-operacion-cobro-registro-buscar.component';
import { AgendaConsultaComponent } from './pages/gerencia/agenda/agenda-consulta/agenda-consulta.component';
import { OperacionCobroConsultaGerenciaComponent } from './pages/gerencia/operacioncobro/operacion-cobro-consulta-gerencia/operacion-cobro-consulta-gerencia.component';
import {  NumberToWordsPipe } from './shared/pipes/number-to-words.pipe';
import { EstudioCargaComponent } from './pages/estudios/estudio-carga/estudio-carga.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PushNotificationService } from './services/push-notification.service';
import { PopupEstudiosImagenComponent } from './shared/components/popups/popup-estudios-imagen/popup-estudios-imagen.component';
import { PopupOperacionCobroPresentacionComponent } from './shared/components/popups/popup-operacion-cobro-presentacion/popup-operacion-cobro-presentacion.component';
import { PopupOperacionCobroPresentacionEditarRegistroComponent } from './shared/components/popups/popup-operacion-cobro-presentacion-editar-registro/popup-operacion-cobro-presentacion-editar-registro.component';
import { PopupPresentacionEditarComponent } from './shared/components/popups/popup-presentacion-editar/popup-presentacion-editar.component';
import { ListadoCirugiaQuirofanoComponent } from './pages/asesoramiento/ficha-quirurgica/listado-cirugia-quirofano/listado-cirugia-quirofano.component';
import { PopupListadoCirugiaQuirofanoComponent } from './pages/asesoramiento/ficha-quirurgica/popup-listado-cirugia-quirofano/popup-listado-cirugia-quirofano.component';
import { PopupDerivarAsesoramientoListadoComponent } from './shared/components/popups/popup-derivar-asesoramiento-listado/popup-derivar-asesoramiento-listado.component';
import { PopupListadoCirugiaQuirofanoEditarComponent } from './shared/components/popups/popup-listado-cirugia-quirofano-editar/popup-listado-cirugia-quirofano-editar.component';
import { PopupCobroDistribucionEditarComponent } from './shared/components/popups/popup-cobro-distribucion-editar/popup-cobro-distribucion-editar.component';
import { ExcelService } from './services/excel.service';
import { PopupFichaQuirurgicaOperacionCobroComponent } from './shared/components/popups/popup-ficha-quirurgica-operacion-cobro/popup-ficha-quirurgica-operacion-cobro.component';
import { ListadoCirugiaEditarComponent } from './pages/medico/asesoramiento/listado-cirugia-editar/listado-cirugia-editar.component';
import {  PopupListadoCirugiaQuirofanoObservacionEditarComponent } from './shared/components/popups/popup-listado-cirugia-quirofano-observacion-editar/popup-listado-cirugia-quirofano-observacion-editar.component';
import { AgendaBloqueoEdicionComponent } from './pages/mantenimiento/agenda/agenda-bloqueo-edicion/agenda-bloqueo-edicion.component';
import { PopupOperacionCobroDetalleComponent } from './shared/components/popups/popup-operacion-cobro-detalle/popup-operacion-cobro-detalle.component';
import { PopupOperacionCobroDetallePacienteComponent } from './shared/components/popups/popup-operacion-cobro-detalle-paciente/popup-operacion-cobro-detalle-paciente.component';
import { PopupOperacionCobroRegistroBuscarTodosComponent } from './shared/components/popups/popup-operacion-cobro-registro-buscar-todos/popup-operacion-cobro-registro-buscar-todos.component';
import { PopupDetalleOperacionCobroDistribucionComponent } from './shared/components/popups/popup-detalle-operacion-cobro-distribucion/popup-detalle-operacion-cobro-distribucion.component';
import { PopupOperacionCobroDistribucionComponent } from './shared/components/popups/popup-operacion-cobro-distribucion/popup-operacion-cobro-distribucion.component';
import { AgendaRecepcionComponent } from './pages/recepcion/agenda/agenda-recepcion/agenda-recepcion.component';
import { PopupPacienteEsperaComponent } from './shared/components/popups/popup-paciente-espera/popup-paciente-espera.component';
import { PopupNotificacionComponent } from './pages/notificacion/popup-notificacion/popup-notificacion.component';
import { PopupChatComponent } from './pages/notificacion/popup-chat/popup-chat.component';
import { PopupListadoUsuarioComponent } from './pages/notificacion/popup-notificacion/popup-listado-usuario/popup-listado-usuario.component';
import { PopupNotificacionNuevaComponent } from './pages/notificacion/popup-notificacion/popup-notificacion-nueva/popup-notificacion-nueva.component';
import { ListadoCirugiaQuirofanoConsultaComponent } from './pages/quirofano/listado-cirugia-quirofano-consulta/listado-cirugia-quirofano-consulta.component';
import { FacturaElectronicaComponent } from './pages/facturacion/factura/factura-electronica/factura-electronica.component';
import { CategoriaIvaComponent } from './pages/facturacion/factura-electronica/popups/categoria-iva/categoria-iva.component';
import { EntidadComponent } from './pages/mantenimiento/entidad/entidad.component';
import { EditEntidadComponent } from './pages/mantenimiento/entidad/edit-entidad/edit-entidad.component';
import { GerenciaDetalleOperacionCobroComponent } from './pages/gerencia/gerencia-detalle-operacion-cobro/gerencia-detalle-operacion-cobro.component';
import { GenerarFacturaComponent } from './pages/facturacion/factura-electronica/popups/generar-factura/generar-factura.component';
import { GenerarNotaCreditoComponent } from './pages/facturacion/factura-electronica/popups/generar-nota-credito/generar-nota-credito.component';
import { BuscarClienteFacturaComponent } from './pages/facturacion/factura-electronica/popups/buscar-cliente-factura/buscar-cliente-factura.component';
import { PopupFacturaRenglonComponent } from './pages/factura/factura-electronica/popups/popup-factura-renglon/popup-factura-renglon.component';
import { BuscarConceptoFacturaComponent } from './pages/facturacion/factura-electronica/popups/buscar-concepto-factura/buscar-concepto-factura.component';



 


registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    

    NavbarComponent,
    LoginComponent,
    QuirofanoComponent,
    MedicoComponent,

    EstadisticaComponent,
  
    PacienteComponent,
    LoadingComponent,
    ObraSocialComponent,
    ConvenioComponent,
    PmoComponent,
    CirugiaComponent,
    CirugiaGrupoComponent,
    CirugiaGrupoMedicoComponent,
    LiquidacionGeneradaComponent,
    LiquidacionComponent,

    PopupMedicoEditComponent,
    PopupObrasocialComponent,
    PopupPmoComponent,
    PopupEntidadFacturaComponent,
    PopupMedicoComponent,
    PopupMedicoGrupoMedicoComponent,
    PopupMedicoGrupoComponent,
    LiquidarComponent,
    OperacionCobroComponent,
    AgendaComponent,
    EditConvenioComponent,
    CreacionComponent,
    PopupAgendaComponent,

    PopupConvenioComponent,
    PopupPacienteComponent,
    PopupPacienteNuevoComponent,
    TurnoComponent,
  
    PopupCombinadaComponent,
    PopupCombinadaItemComponent,
    EditObraSocialComponent,
    DistribucionPracticaComponent,
    PopupCombinadaLecturaComponent,
    PopUpFormaPagoComponent,
    AgendaMedicoComponent,
    PopupUsuarioComponent,
    PopupTurnoUsuarioObraSocialComponent,
    DateFormatPipe,
  
    UsuarioModuloComponent,
    PopupPacienteObrasocialComponent,
    PopupPracticaPorcentajeComponent,
    PopupObraSocialMedicoComponent,
    PopupObraSocialComponent,
    AgendaBloqueoComponent,
    OperacionCobroAuditarComponent,
    OperacionCobroEditarComponent,
    FichaQuirurgicaComponent,

    PopupTurnoEditarComponent,
    OperacionCobroDetalleComponent,
    PopupHistoriaClinicaResumenComponent,
    PopupOperacionCobroRegistroEditarComponent,
    OperacionCobroAfectarComponent,
    RendicionCajaComponent,
    StockLenteComponent,
    AltaLenteComponent,
    PopupDetalleLenteComponent,
    LenteComponent,
    InsumoComponent,
    HistoriaClinicaComponent,    
    AgendaAtencionMedicoComponent,
    ChatListaComponent,
    EmptyComponent,
    NotFoundComponent,
    ListadoCirugiaComponent,
    PopupLentesComponent,
    UsuarioModuloComponent,
    LiquidacionProvinciaComponent,
    LiquidacionDetalleComponent,
    ConfeccionFacturaComponent,
    PopupFichaQuirurgicaLenteComponent,
    PopupFichaQuirurgicaMedicoGrupoComponent,
    PopupFichaQuirurgicaEstadoComponent,
    PopupFichaQuirurgicaAnesteciaComponent,
    PopupPacienteEstudioComponent,
    PopupLenteTipoComponent,
    PopupHistoriaClinicaListaConsultaComponent,
  
    PopupLiquidacionDetalleComponent,
    PopupHistoriaClinicaRegistroComponent,
    PopupHistoriaClinicaRegistroNuevoComponent,
    PopupDerivarAsesoramientoComponent,
    HistoriaClinicaVisualizarComponent,
    PopupAgendaObservacionComponent,
    PopupOperacionCobroEditarComponent,
    PopupPacienteConsultaComponent,
    OperacionCobroDetalleMedicoComponent,
    PopupOperacionCobroRegistroBuscarComponent,
    AgendaConsultaComponent,
    OperacionCobroConsultaGerenciaComponent,
    NumberToWordsPipe,
    EstudioCargaComponent,
    PopupEstudiosImagenComponent,
    PopupOperacionCobroPresentacionComponent,
    PopupOperacionCobroPresentacionEditarRegistroComponent,
    PopupPresentacionEditarComponent,
    ListadoCirugiaQuirofanoComponent,
    PopupListadoCirugiaQuirofanoComponent,
    PopupDerivarAsesoramientoListadoComponent,
    PopupListadoCirugiaQuirofanoEditarComponent,
    PopupCobroDistribucionEditarComponent,
    PopupFichaQuirurgicaOperacionCobroComponent,
    ListadoCirugiaEditarComponent,    
    PopupListadoCirugiaQuirofanoObservacionEditarComponent,
    AgendaBloqueoEdicionComponent,
    PopupOperacionCobroDetalleComponent,
    PopupOperacionCobroDetallePacienteComponent,
    PopupOperacionCobroRegistroBuscarTodosComponent,
    PopupDetalleOperacionCobroDistribucionComponent,
    PopupOperacionCobroDistribucionComponent,
    AgendaRecepcionComponent,
    PopupPacienteEsperaComponent,
    PopupNotificacionComponent,
    PopupChatComponent,
    PopupListadoUsuarioComponent,
    PopupNotificacionNuevaComponent,
    ListadoCirugiaQuirofanoConsultaComponent,
    FacturaElectronicaComponent,
    CategoriaIvaComponent,
    EntidadComponent,
    EditEntidadComponent,
    GerenciaDetalleOperacionCobroComponent,
    GenerarFacturaComponent,
    GenerarNotaCreditoComponent,
    BuscarClienteFacturaComponent,
    PopupFacturaRenglonComponent,
    BuscarConceptoFacturaComponent,
    
  ],
  imports: [
    PdfViewerModule,
    GalleriaModule,
    FileUploadModule,
    BrowserModule,
    FormsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
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
    OrderListModule,
    InputTextareaModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    PanelModule,
    AutoCompleteModule,
    SweetAlert2Module.forRoot(),
    AutofocusModule,
    NgxBarcodeModule,
    SocketIoModule.forRoot(config),
      RouterModule.forRoot( ROUTES, { useHash: true } ),
      SocketIoModule.forRoot(config),
      NgxPopper,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  
  entryComponents: [
    PopupObrasocialComponent,PopupPmoComponent,PopupEntidadFacturaComponent,PopupMedicoComponent,
    PopupPacienteComponent,PopupMedicoGrupoMedicoComponent,PopupMedicoGrupoComponent, EditConvenioComponent,EditObraSocialComponent,
    PopupAgendaComponent,PopupConvenioComponent, PopupCombinadaComponent,PopupPacienteNuevoComponent,
    PopupCombinadaItemComponent , PopupCombinadaLecturaComponent, PopUpFormaPagoComponent , PopupUsuarioComponent ,
    PopupTurnoUsuarioObraSocialComponent ,PopupPacienteObrasocialComponent , PopupPracticaPorcentajeComponent,
    PopupObraSocialMedicoComponent,  PopupObraSocialComponent, PopupMedicoEditComponent,
    PopupTurnoEditarComponent,PopupOperacionCobroRegistroEditarComponent,PopupFichaQuirurgicaLenteComponent,
    PopupFichaQuirurgicaMedicoGrupoComponent,PopupDetalleLenteComponent,PopupLenteTipoComponent,
    PopupFichaQuirurgicaEstadoComponent,PopupFichaQuirurgicaAnesteciaComponent,PopupPacienteEstudioComponent,
    PopupHistoriaClinicaListaConsultaComponent,PopupHistoriaClinicaRegistroNuevoComponent,PopupLentesComponent,
    PopupHistoriaClinicaRegistroComponent,PopupHistoriaClinicaRegistroComponent,PopupHistoriaClinicaListaConsultaComponent,
    PopupDerivarAsesoramientoComponent,PopupAgendaObservacionComponent, PopupOperacionCobroEditarComponent,PopupPacienteConsultaComponent,
    PopupOperacionCobroRegistroBuscarComponent, PopupEstudiosImagenComponent ,PopupOperacionCobroPresentacionComponent,
    PopupOperacionCobroPresentacionEditarRegistroComponent, PopupPresentacionEditarComponent, PopupDerivarAsesoramientoListadoComponent,
    PopupListadoCirugiaQuirofanoEditarComponent, PopupCobroDistribucionEditarComponent,PopupFichaQuirurgicaOperacionCobroComponent,
    PopupListadoCirugiaQuirofanoObservacionEditarComponent,PopupOperacionCobroDetalleComponent, PopupOperacionCobroDetallePacienteComponent,
    PopupOperacionCobroRegistroBuscarTodosComponent, PopupDetalleOperacionCobroDistribucionComponent, 
    PopupOperacionCobroDistribucionComponent,PopupPacienteEsperaComponent, PopupNotificacionComponent,
    PopupChatComponent ,   PopupListadoUsuarioComponent, PopupNotificacionNuevaComponent,
    PopupFacturaRenglonComponent,BuscarConceptoFacturaComponent

  ],
  providers: [CurrencyPipe,DecimalPipe,NumberToWordsPipe,PacienteService,PushNotificationService,ExcelService,{ provide: LOCALE_ID, useValue: 'es-Ar' },
  MultiSelectModule,
 // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
 {
  provide: HTTP_INTERCEPTORS,
  useFactory: function(injector: Injector) {
      return new JwtInterceptor(injector);
  },
  multi: true,
  deps: [Injector]
},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

