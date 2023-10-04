import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/login.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _baseUrl = environments.baseUrl;

  constructor(
    private readonly http: HttpClient
  ) {}

  postLogin(data: ILogin){
    return this.http.post(`${this._baseUrl}auth/login`, data);
  }


}
