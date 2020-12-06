import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
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
  deleteId: any;
  menus = [];
  deArray = [];
  searchText = '';

  constructor(private service: DataService, private http: HttpClient) {
    this.http.get(`${environment.uri}/order/${localStorage.getItem('userId')}`)
      .subscribe(data => {
        this.array = data;
        this.array.forEach(e => {
          let quantity = e['quantity'];
          let date = e['date'];
          let id = e['_id'];
          http.get(`${environment.uri}/onemenu/${e['menu_id']}`)
            .subscribe(d => {
              this.menus.push({
                name: d['name'],
                image: d['image'],
                quantity,
                date,
                id
              })
            });
        });
        this.deArray = this.menus;
      });
  }

  ngOnInit(): void {
  }

  saveIdToDelete(id) {
    this.deleteId = id;
  }

  deleteOne() {
    this.http.delete(`${environment.uri}/order/delete/${this.deleteId}`)
      .subscribe(e => {
        console.log(e);
        window.location.reload();
      });
  }

  onChange(e) {
    this.deArray = [];
    this.menus.forEach(e => {
      if (e.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
        this.deArray.push(e);
    });
  }
}
