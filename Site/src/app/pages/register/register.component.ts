import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm = new FormGroup({
  firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9-]+')]),
  lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9-]+')]),
  email: new FormControl('',[Validators.email,Validators.required]),
  password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
  phone: new FormControl('',[Validators.required,Validators.pattern('^([0-9]).{9}$')]),

})  

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registerForm.value);
  }
}
