import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNotaCreditoComponent } from './generar-nota-credito.component';

describe('GenerarNotaCreditoComponent', () => {
  let component: GenerarNotaCreditoComponent;
  let fixture: ComponentFixture<GenerarNotaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarNotaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarNotaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
