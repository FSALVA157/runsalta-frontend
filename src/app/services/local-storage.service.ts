import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getItem(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);      
    }else{
      return null
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
