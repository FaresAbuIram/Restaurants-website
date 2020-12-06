import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';
import { RR } from './rr';

@Component({
  selector: 'app-restaurants-rate',
  templateUrl: './restaurants-rate.component.html',
  styleUrls: ['./restaurants-rate.component.css']
})
export class RestaurantsRateComponent implements OnInit {

  array: any;
  deArray = [];
  arr = [];
  deleteId: any;
  searchText = '';



  constructor(private service: DataService, private http: HttpClient) {
    http.get(`${environment.uri}/restaurantrate/${localStorage.getItem('userId')}`).subscribe(data => {
      this.array = data;
      this.array.forEach(element => {
        let rrId=element['_id'];
        let rate = element.rating;
        let date = element.date;
        http.get(`${environment.uri}/restaurant/${element.rest_id}`).subscribe(dd => {
          this.arr.push({ name: dd['name'], image: dd['image'], rate, date ,id:rrId});
        })

      });

    })
    this.deArray = this.arr;
  }

  ngOnInit(): void {
  }

  saveIdToDelete(id) {
    this.deleteId = id;

  }
  onChange(e) {
    this.deArray = [];
    this.arr.forEach(e => {
      if (e.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
        this.deArray.push(e);
    })
  }


  filter(name) {
    return this.deArray.filter(res =>
      res.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }
  deleteOne() {
    this.http.delete(`${environment.uri}/restaurantrate/delete/${this.deleteId}`).subscribe(e => {
      console.log(e);
      window.location.reload();
    })

  }

}
