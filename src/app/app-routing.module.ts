import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormulariosComponent } from './components/formularios/formularios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'crear/:tipo', component: FormulariosComponent },
  { path: 'editar/:id', component: FormulariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
