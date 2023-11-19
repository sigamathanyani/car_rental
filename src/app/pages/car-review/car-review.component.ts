import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.css']
})
export class CarReviewComponent {
  constructor(private route:Router){ }
}
