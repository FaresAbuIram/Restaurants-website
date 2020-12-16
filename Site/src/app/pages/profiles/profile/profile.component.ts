import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any; 

  constructor(private dataService: DataService) { 
    this.dataService.getUserInfo()
    .subscribe((user_info) => {
      console.log(user_info);
      this.user = user_info;
    });
  }

  ngOnInit(): void {
  }

}
