import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  url: string;
 
  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  }
 
  public verificar(fecha: Date) {
    let urlT = `${this.url}/verificar/${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`;
    return this.http.get(urlT, {responseType: 'text'});
  }
 /*public obtener(anio: number): Observable<Festivo[]> {
    let urlT = `${this.url}/obtener/${anio}`;
    return this.http.get<Festivo[]>(urlT);
  }*/
}
