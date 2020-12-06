import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  array: any;
  deleteId:any;
  searchText='';
  constructor(private service: DataService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  saveIdToDelete(id){
    this.deleteId=id;
  }


  filter(name) {
    return this.array.filter(res =>
      res.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }
  deleteOne(){
  
    this.http.delete(`${environment.uri}/restaurant/${this.deleteId}`).subscribe(e=>{
      console.log(e);
      window.location.reload();
    })

  }
}
