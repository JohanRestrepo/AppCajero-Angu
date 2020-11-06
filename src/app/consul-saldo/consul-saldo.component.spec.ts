import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulSaldoComponent } from './consul-saldo.component';

describe('ConsulSaldoComponent', () => {
  let component: ConsulSaldoComponent;
  let fixture: ComponentFixture<ConsulSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
