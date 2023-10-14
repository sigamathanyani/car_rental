import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {Register} from "../models/register"
import {Login} from "../models/login"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootURL:string;
  isAuth:string | null;

  constructor(private http:HttpClient) { 
    this.rootURL = "http://localhost:3000/api/auth";
    this.isAuth = localStorage.getItem('token');
   
  }

  logIn(user:Login){
    return this.http.post(`${this.rootURL}/login`,user);
  }

  register(user:Register){
    return this.http.post(`${this.rootURL}/register`,user);
  }

  logout(){
    localStorage.removeItem('token');
    this.isAuth = null;
  }

  isAuthenticated(){
    this.isAuth = localStorage.getItem('token');
    
    if(this.isAuth){
      return true;
    }else{
      return false;
    }
  }
  
}
