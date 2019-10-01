import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { AgendarComponent} from './components/agendar/agendar.component';
import { AvisosComponent} from './components/avisos/avisos.component';
import { ContatoComponent} from './components/contato/contato.component';
import { EspecialidadesComponent} from './components/especialidades/especialidades.component';
import { OndeestamosComponent} from './components/ondeestamos/ondeestamos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agendar', component: AgendarComponent },
  { path: 'avisos', component: AvisosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'onde_estamos', component: OndeestamosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
