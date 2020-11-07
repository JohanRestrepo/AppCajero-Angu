import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignacionEspComponent } from './consignacion-esp.component';

describe('ConsignacionEspComponent', () => {
  let component: ConsignacionEspComponent;
  let fixture: ComponentFixture<ConsignacionEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignacionEspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignacionEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
