import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoStockMovimientoComponent } from './insumo-stock-movimiento.component';

describe('InsumoStockMovimientoComponent', () => {
  let component: InsumoStockMovimientoComponent;
  let fixture: ComponentFixture<InsumoStockMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoStockMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoStockMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
