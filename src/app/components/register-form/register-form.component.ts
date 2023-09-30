import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {

  user:Register;

  constructor(private _auth:AuthService, private router:Router){}

  register(regForm:NgForm){
    this.user = regForm.value;

    this._auth.register(this.user).subscribe((data:any)=>{
      if(data.status) this.router.navigate(["/login"])
    })

  }
}
