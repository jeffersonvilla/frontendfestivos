import { Component } from '@angular/core';
import { Festivo } from '../../entidades/Festivo';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { FestivosService } from '../../servicios/festivos.service';

@Component({
  selector: 'app-obtener-festivos',
  templateUrl: './obtener-festivos.component.html',
  styleUrl: './obtener-festivos.component.css'
})
export class ObtenerFestivosComponent {

   
  public anio: number | undefined;

  public festivos: Festivo[] =[];

  public columnas = [
    { name: "Festivo", prop: "nombre" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  ngOnInit(): void {
   
  }

  constructor(private servicio: FestivosService) {}

  public obtener() {

    if(this.anio){
      this.servicio.obtener(this.anio).subscribe(
        respuesta => {
          this.festivos = respuesta;
        }
      );
    }else{
      window.alert("Debe ingresar un año");
    }
  }
}
