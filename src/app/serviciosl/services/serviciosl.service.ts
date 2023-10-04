import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { IServiciosList } from '../interfaces/serviciosl.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioslService {
  private baseUrl: string = environments.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getServiciosl(){
    return this.http.get<IServiciosList>(`${this.baseUrl}servicios-l`);
  }


}
