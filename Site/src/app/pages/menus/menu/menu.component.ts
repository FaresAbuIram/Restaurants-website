import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id: any;
  array: any;
  deleteId:any;

  searchText=''

  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.router.params.subscribe(e => {
      this.id = e['id']
      this.http.get(`${environment.uri}/menus/${this.id}`).subscribe(data => {
        console.log(data);
        this.array = data;
      })
    })

  }

  ngOnInit(): void {
  }
  saveIdToDelete(id){
    this.deleteId=id;
  }

  deleteOne(){
  
    this.http.delete(`${environment.uri}/menus/delete/${this.deleteId}`).subscribe(e=>{
      console.log(e);
      window.location.reload();
    })

  }

}
