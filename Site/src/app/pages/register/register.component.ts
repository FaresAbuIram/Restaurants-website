import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationError: any;


  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9-]+')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9-]+')]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^([0-9]).{9}$')]),

  })

  constructor(private http: HttpClient, private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.http.post(`${environment.uri}/register`, this.registerForm.value).subscribe(e => {
      if ('Email is already exist !!!' == e)
        this.registrationError = e;
      else{
      this.registrationError = "Register Success";
        this.router.navigate(['/login']);
      }
        
    })
    console.log(this.registerForm.value);
  }
}
