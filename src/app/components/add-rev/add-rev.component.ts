import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReviewService } from 'src/app/services/review/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-rev',
  templateUrl: './add-rev.component.html',
  styleUrls: ['./add-rev.component.css']
})
export class AddRevComponent implements OnInit{
  @Input() modal_state:boolean;

  modalState: boolean;
  private modalSubscription: Subscription;
  revMod: any;
  car_id:number;

  constructor(private reviewService: ReviewService, private actRoute: ActivatedRoute) {
    this.modalSubscription = this.reviewService.modalState$.subscribe((state) => {
      this.modalState = state;
    });
  }

  ngOnInit():void{
    this.actRoute.params.subscribe(value=>{
      this.car_id = value["carID"];
    })

  }

    hideModal(){
    this.reviewService.closeModal();
  }

  addReview(rev:NgForm){
    console.log(rev.value.review);
    console.log(this.car_id);
    
    this.reviewService.addReview(rev.value,this.car_id).subscribe((value)=>{})
    this.hideModal();
  }
}
