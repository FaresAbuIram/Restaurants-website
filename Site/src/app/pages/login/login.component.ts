import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post(`${environment.uri}/login`, this.loginForm.value)
      .subscribe(e => {
        console.log(e)
        if (e == 'Invalid Email Or Password' || e == 'Error Happened')
          this.loginError = e;
        else {
          this.loginError = "Success";
          localStorage.setItem('token', e['token']);
          localStorage.setItem('userId', e['_id']);
          localStorage.setItem('role',e['isAdmin']);
          this.router.navigate(['/']);
        }
      });
  }
}
