import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService{
  modal() {
    throw new Error('Method not implemented.');
  }

  readonly rootURL:string;
  modal_state:boolean=false;

  private modalStateSubject = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalStateSubject.asObservable();

  constructor(private http:HttpClient) { 
    this.rootURL = "http://localhost:3000/api/car";
   }

  getAllRevs(carID:number){
    return this.http.get(`${this.rootURL}/${carID}/reviews`);
  }

  addReview(revData:any,carID:number):Observable<any>{
    return this.http.post(`${this.rootURL}/${carID}/add-rev`,revData);
  }

  openModal() {
    this.modalStateSubject.next(true);
  }

  closeModal() {
    this.modalStateSubject.next(false);
  }
  
}
