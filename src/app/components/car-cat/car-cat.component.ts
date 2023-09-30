import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-cat',
  templateUrl: './car-cat.component.html',
  styleUrls: ['./car-cat.component.css']
})
export class CarCatComponent {
  @Input() category:string;
}
