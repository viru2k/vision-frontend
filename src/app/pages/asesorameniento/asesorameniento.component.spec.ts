import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoramenientoComponent } from './asesorameniento.component';

describe('AsesoramenientoComponent', () => {
  let component: AsesoramenientoComponent;
  let fixture: ComponentFixture<AsesoramenientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoramenientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoramenientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
