import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFestivoComponent } from './componentes/verificar-festivo/verificar-festivo.component';

const routes: Routes = [{path:"verificar",component:VerificarFestivoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
