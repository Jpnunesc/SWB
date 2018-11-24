import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAreaComponent } from './cadastrar-area.component';

describe('CadastrarAreaComponent', () => {
  let component: CadastrarAreaComponent;
  let fixture: ComponentFixture<CadastrarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
