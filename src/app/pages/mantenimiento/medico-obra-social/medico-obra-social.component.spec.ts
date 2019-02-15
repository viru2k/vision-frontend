import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoObraSocialComponent } from './medico-obra-social.component';

describe('MedicoObraSocialComponent', () => {
  let component: MedicoObraSocialComponent;
  let fixture: ComponentFixture<MedicoObraSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoObraSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoObraSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
