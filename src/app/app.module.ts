import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerificarFestivoComponent } from './componentes/verificar-festivo/verificar-festivo.component';
import { ReferenciasMaterialModule } from './referencias-material-module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ObtenerFestivosComponent } from './componentes/obtener-festivos/obtener-festivos.component';

@NgModule({
  declarations: [
    AppComponent,
    VerificarFestivoComponent,
    InicioComponent,
    ObtenerFestivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
