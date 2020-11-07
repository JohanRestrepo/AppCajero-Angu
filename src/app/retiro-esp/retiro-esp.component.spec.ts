import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroEspComponent } from './retiro-esp.component';

describe('RetiroEspComponent', () => {
  let component: RetiroEspComponent;
  let fixture: ComponentFixture<RetiroEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroEspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
