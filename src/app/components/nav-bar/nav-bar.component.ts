import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  constructor(private auth:AuthService, private route: Router){}

  logOut(){
    this.auth.logout();
    this.route.navigateByUrl("/login");
  }

}
