import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAsociarUsuarioGrupoComponent } from './popup-asociar-usuario-grupo.component';

describe('PopupAsociarUsuarioGrupoComponent', () => {
  let component: PopupAsociarUsuarioGrupoComponent;
  let fixture: ComponentFixture<PopupAsociarUsuarioGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAsociarUsuarioGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAsociarUsuarioGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
