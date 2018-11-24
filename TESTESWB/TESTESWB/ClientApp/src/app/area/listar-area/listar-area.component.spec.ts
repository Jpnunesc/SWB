import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAreaComponent } from './listar-area.component';

describe('ListarAreaComponent', () => {
  let component: ListarAreaComponent;
  let fixture: ComponentFixture<ListarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
