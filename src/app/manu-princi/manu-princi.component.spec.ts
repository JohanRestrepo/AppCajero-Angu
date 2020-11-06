import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuPrinciComponent } from './manu-princi.component';

describe('ManuPrinciComponent', () => {
  let component: ManuPrinciComponent;
  let fixture: ComponentFixture<ManuPrinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuPrinciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuPrinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
