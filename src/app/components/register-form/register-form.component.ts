import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {

  user:Register;

  constructor(private _auth:AuthService){}

  register(regForm:NgForm){
    this.user = regForm.value;

    this._auth.register(this.user).subscribe(data=>console.log(data))

  }
}
