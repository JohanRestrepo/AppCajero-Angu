import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuPrinciComponent } from './manu-princi/manu-princi.component';
import { ConsulSaldoComponent } from './consul-saldo/consul-saldo.component';
import { ResultadoExitosoComponent } from './resultado-exitoso/resultado-exitoso.component';
import { RetiroComponent } from './retiro/retiro.component';
import { ConsignacionComponent } from './consignacion/consignacion.component';
import { ResultadoFallidoComponent } from './resultado-fallido/resultado-fallido.component';

@NgModule({
  declarations: [
    AppComponent,
    ManuPrinciComponent,
    ConsulSaldoComponent,
    ResultadoExitosoComponent,
    RetiroComponent,
    ConsignacionComponent,
    ResultadoFallidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
