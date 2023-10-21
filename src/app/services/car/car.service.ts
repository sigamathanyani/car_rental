import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly rootURL:string;

  constructor(private http:HttpClient) { 
    this.rootURL = "http://localhost:3000/api/car";
   }

  getCars(): Observable<any>{
    return this.http.get(`${this.rootURL}/`);
  }

  addCar(carForm:any):Observable<any>{
    return this.http.post(`${this.rootURL}/create-car`,carForm);
  }

}
