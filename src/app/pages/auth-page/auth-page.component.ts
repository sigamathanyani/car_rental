import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  state:boolean;

  constructor(private location: Location) { }

  ngOnInit() {
    const currentUrl = this.location.path();
    if(currentUrl == "/login") this.state = true;
    else if(currentUrl == "/register") this.state = false;
  }
  
}
