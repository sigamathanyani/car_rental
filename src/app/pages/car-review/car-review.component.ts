import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.css']
})

export class CarReviewComponent implements OnInit{
  carID:number;
  all_revs:any;
  numOfRevs:number;

  ngOnInit(): void {
    
    this.currentRoute.params.subscribe((value)=>{
      this.carID = value['carID'];
    })
    this.allReviews();

  }

  constructor(private route:Router,private currentRoute:ActivatedRoute ,public review:ReviewService){ }

  allReviews(){
    this.review.getAllRevs(this.carID).subscribe((all_revs:any)=>{
      this.all_revs = all_revs;
      this.numOfRevs = all_revs[0].review_count;
    })
  }

  addRev(){
    this.review.openModal();
  }
}
