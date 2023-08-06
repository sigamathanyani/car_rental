import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user:Login;
  constructor(private _auth:AuthService, private route:Router){}

  loggingIn(user:NgForm){
    this.user = user.value;
    this._auth.logIn(this.user).subscribe((data:any)=>{
      if(data.token){
        localStorage.setItem("token",data.token);
        this.route.navigateByUrl('/home');
      }else{
        this.route.navigateByUrl('/');
      }
    }

    )
  }
}
