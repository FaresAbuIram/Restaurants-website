import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {

  id: any;
  array: any;
  restaurants: any;
  quantity: any;
  clicked=false;
  
  orderForm = new FormGroup({
    rest_id: new FormControl('', Validators.required),
    menu_id: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.pattern('^([0-9]).{0,}$')])
  });

  onSubmit() {
    if (this.id == 0) {
      this.http.post(
        `${environment.uri}/order/add/${localStorage.getItem('userId')}`,
        this.orderForm.value
      ).subscribe(data => {
        console.log(data);
        this.route.navigate(['/orders']);
      });
    } else {
      this.http.post(`${environment.uri}/order/edit/${this.id}`, this.orderForm.value)
      .subscribe( data => {
        this.route.navigate(['/orders']);
      });
    }
  }

  constructor(private router: ActivatedRoute, private http: HttpClient, private route: Router, private service: DataService) {
    this.router.params.subscribe(d => {
      this.id = d['id'];
    });

    if(this.id != 0) {
      http.get(`${environment.uri}/oneorder/${this.id}`)
      .subscribe(data => {
        this.quantity = data['quantity'];
        this.orderForm.patchValue({quantity: this.quantity});
      });
    }
    

    service.getRestaurants().subscribe(data => {
      this.restaurants = JSON.parse(data);
      console.log(data);
    });
  }

  onOptionsSelected(e) {
    this.http.get(`${environment.uri}/menus/${e}`)
      .subscribe(data => {
        this.array = data;
      });
  }

  ngOnInit(): void {
  }


}
