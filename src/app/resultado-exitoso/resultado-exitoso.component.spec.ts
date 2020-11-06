import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoExitosoComponent } from './resultado-exitoso.component';

describe('ResultadoExitosoComponent', () => {
  let component: ResultadoExitosoComponent;
  let fixture: ComponentFixture<ResultadoExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
