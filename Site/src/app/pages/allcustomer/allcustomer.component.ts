import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {
  searchText = '';
  id = localStorage.getItem('userId');
  array: any;
  deleteId: any
  updatedId: any
  filterArray: any;

  constructor(private http: HttpClient) {
    this.http.get(`${environment.uri}/allcustomers`).subscribe(data => {
      console.log(data)
      this.array = data;
      this.filterArray = this.array;
    })
  }

  ngOnInit(): void {
  }

  saveIdToDelete(id) {
    this.deleteId = id;
  }
  saveIdToUpdate(id) {
    this.updatedId = id;
    console.log(this.updatedId)
  }
  deleteOne() {
    if (this.deleteId != this.id) {
      this.http.delete(`${environment.uri}/customer/delete/${this.deleteId}`).subscribe(data => {
        console.log(data)
        window.location.reload();
      })
    }
    else {
      window.location.reload();
    }

  }
  onChange(e) {
    this.filterArray = [];
    this.array.forEach(e => {
      if (e.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
        this.filterArray.push(e);
    });
  }
  changeRole(e) {
    if (this.updatedId != this.id) {
      this.http.post(`${environment.uri}/customer/edit/${this.updatedId}`, { e }).subscribe(data => {
        console.log(data)
        window.location.reload();
      })
    }
    else {
      window.location.reload();
    }
  }
}
