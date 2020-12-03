import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   rateForm = new FormGroup({
     value:new FormControl('')
   });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.rateForm.value);
  }
}
