import { Component,OnInit } from '@angular/core';
import { FestivosService } from '../../servicios/festivos.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrl: './verificar-festivo.component.css'
})

export class VerificarFestivoComponent implements OnInit {
 public fechaElegida:Date | undefined;

  ngOnInit(): void {
    
  }

  constructor (private servicio:FestivosService){}
  public verificar(){

    if (this.fechaElegida){
      this.servicio.verificar(this.fechaElegida).subscribe(respuesta=>{window.alert(respuesta);});
    }
    else {window.alert("debe selecionar una fecha");
  }
  }

}
