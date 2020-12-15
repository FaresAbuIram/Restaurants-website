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
  cities = []
  filterdArray = []
  cityClicked = false;
  constructor(private service: DataService, private http: HttpClient) {
    service.getRestaurants().subscribe(data => {
      this.array = JSON.parse(data);
      this.filterdArray = this.array;
      this.array.forEach(element => {
        console.log(element['city'])
        if (!this.ifInCity(element['city']))
          this.cities.push(element['city']);
      });
    })
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
    })

  }

  ifInCity(name) {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i] == name)
        return true;
    }
    return false;

  }
  onOptionsSelected(e) {
    if (e) {
      this.filterdArray = []
      this.array.forEach(element => {
        if (element['city'] == e) {
          this.filterdArray.push(element);
        }
      });
    }
    else {
      this.filterdArray = this.array;
    }
  }
  clickOnFilter() {
    if (this.cityClicked) {
      this.filterdArray = this.array;
    }
    this.cityClicked = !this.cityClicked;
  }
}
