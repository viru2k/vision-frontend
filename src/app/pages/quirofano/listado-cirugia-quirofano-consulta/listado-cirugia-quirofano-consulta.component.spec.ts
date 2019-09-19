import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCirugiaQuirofanoConsultaComponent } from './listado-cirugia-quirofano-consulta.component';

describe('ListadoCirugiaQuirofanoConsultaComponent', () => {
  let component: ListadoCirugiaQuirofanoConsultaComponent;
  let fixture: ComponentFixture<ListadoCirugiaQuirofanoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCirugiaQuirofanoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCirugiaQuirofanoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
