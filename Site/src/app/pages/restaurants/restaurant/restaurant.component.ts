import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  array: any;
  deleteId: any;
  searchText = '';
  
  constructor(private service: DataService, private http: HttpClient) {
    service.getRestaurants().subscribe(data => {
      this.array = JSON.parse(data);
    });
  }

  ngOnInit(): void {
  }

  saveIdToDelete(id) {
    this.deleteId = id;
  }

  filter(name) {
    return this.array.filter(res =>
      res.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

  deleteOne() {
    this.http.delete(`${environment.uri}/restaurant/${this.deleteId}`).subscribe(e => {
      console.log(e);
      window.location.reload();
    });
  }
}
