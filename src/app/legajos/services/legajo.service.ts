import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegajoModel } from '../models/legajo.model';
import { ILegajos } from '../interfaces/legajos.interface';



@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  private _baseUrl = 'http://localhost:3000/api/';
  legajo_tmp: LegajoModel = new LegajoModel();
  

  constructor(
    private http: HttpClient
  ) { }

  getLegajos(){
    return this.http.get<ILegajos>('http://localhost:3000/api/legajo');
  }

  postLegajo(data: Partial<LegajoModel>){
    //this.legajo_tmp = {...data};
    return this.http.post('http://localhost:3000/api/legajo', data);  }


}
