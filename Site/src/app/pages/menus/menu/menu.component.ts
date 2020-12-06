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
  

   orderForm = new FormGroup({
     quantity: new FormControl('',[Validators.required, Validators.pattern('^([0-9]).{0,}$')])
   })
  constructor() {
    
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.rateForm.value);
  }
  onSubmitOrder(){
    console.log(this.orderForm.value)
  }
}
