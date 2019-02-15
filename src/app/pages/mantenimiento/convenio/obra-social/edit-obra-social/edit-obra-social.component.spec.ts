import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObraSocialComponent } from './edit-obra-social.component';

describe('EditObraSocialComponent', () => {
  let component: EditObraSocialComponent;
  let fixture: ComponentFixture<EditObraSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObraSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObraSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
