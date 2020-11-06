import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManuPrinciComponent } from './manu-princi/manu-princi.component';
import { ConsulSaldoComponent } from './consul-saldo/consul-saldo.component';
import { ResultadoExitosoComponent } from './resultado-exitoso/resultado-exitoso.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  { path: 'Main', component: ManuPrinciComponent },
  { path: 'Saldo', component: ConsulSaldoComponent },
  { path: 'ResEx', component: ResultadoExitosoComponent },
  { path: 'Retiro', component: RetiroComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }