import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-basiccontent',
  templateUrl: './basiccontent.component.html',
  styleUrls: ['./basiccontent.component.css']
})
export class BasiccontentComponent implements OnInit {

  
  constructor(private http: HttpClient) {
   
  }

  ngOnInit(): void {
  }

}
