import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/services/car/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent {

  constructor(private add_Car: CarService, private route:Router){ }

  addCar(car:NgForm){
    console.log(car.value);
    this.add_Car.addCar(car.value).subscribe(()=>{
      this.route.navigateByUrl("/home");
    })

  }
}
