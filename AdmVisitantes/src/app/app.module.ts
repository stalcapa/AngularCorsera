import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    ListaDestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
