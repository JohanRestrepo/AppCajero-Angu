import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoFallidoComponent } from './resultado-fallido.component';

describe('ResultadoFallidoComponent', () => {
  let component: ResultadoFallidoComponent;
  let fixture: ComponentFixture<ResultadoFallidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoFallidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoFallidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
