import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.css']
})
export class AddEditMenuComponent implements OnInit {

  id: any;
  addEditMenuForm = new FormGroup({
    name: new FormControl('', Validators.required),
    restaurant: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('^([0-9]).{1,}$')]),
    image: new FormControl('', Validators.required)
  })


  constructor(private router: ActivatedRoute) {
    router.params.subscribe(p => this.id = p['id']);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addEditMenuForm.value);
  }

}
