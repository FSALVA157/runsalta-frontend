import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { IEquipoTList } from '../interfaces/equipot_interface';

@Injectable({
  providedIn: 'root'
})
export class EquipostService {
  private baseUrl: string = environments.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getEquipost(){
    return this.http.get<IEquipoTList>(`${this.baseUrl}equipos-t`);
  }


}
