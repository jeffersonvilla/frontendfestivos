import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFestivoComponent } from './componentes/verificar-festivo/verificar-festivo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ObtenerFestivosComponent } from './componentes/obtener-festivos/obtener-festivos.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent, children: [
    {path: "verificar",component:VerificarFestivoComponent},
    {path: "obtener", component: ObtenerFestivosComponent}
  ]},
  {path: "**", pathMatch: "full", redirectTo: "inicio/verificar"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
