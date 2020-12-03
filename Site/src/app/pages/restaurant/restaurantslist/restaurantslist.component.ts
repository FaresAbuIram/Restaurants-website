import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurantslist',
  templateUrl: './restaurantslist.component.html',
  styleUrls: ['./restaurantslist.component.css']
})
export class RestaurantslistComponent implements OnInit {

  restaurants = [
    {"name": 'Peaceful Quizine', "city": 'Palestine', "rating": 4, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'Tokyo', "rating": 2, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'NewYork', "rating": 5, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'Amman', "rating": 3, "image": ""}
  ];

  ratingForm = new FormGroup({
    value: new FormControl('')
  });
  
  constructor() { }
 
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ratingForm.value);
  }
}
