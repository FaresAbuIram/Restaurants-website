import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantslist',
  templateUrl: './restaurantslist.component.html',
  styleUrls: ['./restaurantslist.component.css']
})
export class RestaurantslistComponent implements OnInit {

  ctr = 1;

  restaurants = [
    {"name": 'Peaceful Quizine', "city": 'Palestine', "rating": 4, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'Tokyo', "rating": 2, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'NewYork', "rating": 5, "image": ""},
    {"name": 'Peaceful Quizine', "city": 'Amman', "rating": 3, "image": ""}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
