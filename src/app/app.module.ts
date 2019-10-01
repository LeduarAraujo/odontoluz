import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OndeestamosComponent } from './components/ondeestamos/ondeestamos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OndeestamosComponent,
    ContatoComponent,
    AvisosComponent,
    AgendarComponent,
    EspecialidadesComponent,
    NavbarComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
