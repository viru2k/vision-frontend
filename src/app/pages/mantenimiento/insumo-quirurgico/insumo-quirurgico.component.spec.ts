import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoQuirurgicoComponent } from './insumo-quirurgico.component';

describe('InsumoQuirurgicoComponent', () => {
  let component: InsumoQuirurgicoComponent;
  let fixture: ComponentFixture<InsumoQuirurgicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoQuirurgicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoQuirurgicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
