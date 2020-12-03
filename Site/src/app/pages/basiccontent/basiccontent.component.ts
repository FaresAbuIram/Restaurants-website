import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basiccontent',
  templateUrl: './basiccontent.component.html',
  styleUrls: ['./basiccontent.component.css']
})
export class BasiccontentComponent implements OnInit {

  constructor(private http:HttpClient ) {
    this.http.get('http://localhost:3000').subscribe(e=>{
      console.log(e)
    });
   }

  ngOnInit(): void {
  }

}
