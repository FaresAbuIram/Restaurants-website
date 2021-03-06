import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-basiccontent',
  templateUrl: './basiccontent.component.html',
  styleUrls: ['./basiccontent.component.css']
})
export class BasiccontentComponent implements OnInit {
  
  role=localStorage.getItem('role');


  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
