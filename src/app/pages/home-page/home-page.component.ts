import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

declare const L :any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  all_cars:[];
  constructor(private car_service:CarService, private _auth:AuthService, private route:Router){

  }

  car_cat:string[] = ["Small Cars","Medium Cars","Large cars","SUV","Bakkie"];

  ngOnInit(): void {

    if(this._auth.isAuthenticated()){
      this.route.navigateByUrl("/home")
      
    }else{
      this.route.navigateByUrl("/login")
    }

    let container = L.DomUtil.get('map');
    if(container != null){
    container._leaflet_id = null;
    }
    let map = L.map('map').setView([-25.7479, 28.2293], 8);
  
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);


  this.car_service.getCars().subscribe((cars)=>{
    this.all_cars = cars
  })

  }
}
