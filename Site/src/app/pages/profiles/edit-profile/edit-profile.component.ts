import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  clicked = false;
  profileError: any;

  editProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^([0-9]).{9}$')]),
  })

  constructor(private dataService: DataService, private http: HttpClient, private router: Router) {
    this.dataService.getUserInfo()
      .subscribe(user_info => {
        this.user.firstName = user_info['firstName'];
        this.user.lastName = user_info['lastName']
        this.user.email = user_info['email']
        this.user.phone = user_info['phone']
        this.editProfileForm.patchValue({ firstName: this.user.firstName })
        this.editProfileForm.patchValue({ lastName: this.user.lastName })
        this.editProfileForm.patchValue({ email: this.user.email })
        this.editProfileForm.patchValue({ phone: this.user.phone })


      });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.http.post(`${environment.uri}/profile/edit/${localStorage.getItem('userId')}`, this.editProfileForm.value).subscribe(data => {
      if ('Email is already exist !!!' == data){
        this.profileError = data;
        this.clicked=false;
      }
      else {
        this.profileError = "Register Success";
        this.router.navigate(['/profile']);
      }
    })
  }

}
