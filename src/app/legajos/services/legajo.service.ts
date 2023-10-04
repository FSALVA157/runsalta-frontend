import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegajoModel } from '../models/legajo.model';
import { ILegajos } from '../interfaces/legajos.interface';
import { environments } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  private _baseUrl = environments.baseUrl;
  legajo_tmp: LegajoModel = new LegajoModel();
  

  constructor(
    private http: HttpClient
  ) { }
  
  getLegajos(){
    return this.http.get<ILegajos>(`${this._baseUrl}legajo`);
  }

  postLegajo(data: Partial<LegajoModel>){
    //this.legajo_tmp = {...data};
    return this.http.post(`${this._baseUrl}legajo`, data);  }


}
