import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent implements OnInit {
  array: any;
  orders = [];
  deArray = [];
  searchText = '';
  constructor(private http: HttpClient) {
    this.http.get(`${environment.uri}/order`).subscribe(data => {
      console.log(data)
      this.array = data;
      this.array.forEach(e => {
        let quantity = e['quantity'];
        let date = e['date'];
        let id = e['_id'];
        http.get(`${environment.uri}/onemenu/${e['menu_id']}`)
          .subscribe(d => {
            console.log(d)
            let name = d['name'];
            let image = d['image'];
            http.get(`${environment.uri}/restaurant/${d['rest_id']}`).subscribe(r => {
              this.orders.push({
                name,
                rName: r['name'],
                image,
                quantity,
                date,
                id
              })
            })

          });
      });
      this.deArray = this.orders;
    })
  }

  ngOnInit(): void {
  }
  onChange(e) {
    this.deArray = [];
    this.orders.forEach(e => {
      if (e.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
        this.deArray.push(e);
    });
  }
}
