import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const storage_token = localStorage.getItem("token");
    const token = `Bearier ${storage_token}`

      const new_header_req = request.clone({
        setHeaders:{
          token,
        }
      })
      
      return next.handle(new_header_req); 
    
  }
}
