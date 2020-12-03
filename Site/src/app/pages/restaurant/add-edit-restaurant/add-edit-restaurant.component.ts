import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-restaurant',
  templateUrl: './add-edit-restaurant.component.html',
  styleUrls: ['./add-edit-restaurant.component.css']
})
export class AddEditRestaurantComponent implements OnInit {

  id: any;

  addEditRestaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  constructor(private router: ActivatedRoute) {
    router.params.subscribe(p => this.id = p['id']);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addEditRestaurantForm.value);
  }
}
