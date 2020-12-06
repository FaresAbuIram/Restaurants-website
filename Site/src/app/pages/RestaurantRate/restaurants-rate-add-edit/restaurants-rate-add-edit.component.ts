import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurants-rate-add-edit',
  templateUrl: './restaurants-rate-add-edit.component.html',
  styleUrls: ['./restaurants-rate-add-edit.component.css']
})
export class RestaurantsRateAddEditComponent implements OnInit {

  id: any;
  array: any
  RRMessage = '';

  RRForm = new FormGroup({
    restId: new FormControl('', Validators.required),
    rate: new FormControl('', Validators.required)
  })
  constructor(private router: ActivatedRoute, private http: HttpClient, private route: Router, private service: DataService) {
    router.params.subscribe(p => {
      this.id = p['id'];

    });
    service.getRestaurants().subscribe(data => {
      this.array = JSON.parse(data);
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.id == 0) {
      this.http.post(`${environment.uri}/restaurantrate/add/${localStorage.getItem('userId')}`, this.RRForm.value).subscribe(e => {
        if (e == 'This Restaurant Rated before')
          this.RRMessage = 'This Restaurant Rated before';
        else
          this.route.navigate(['/restaurantrate'])
      })
      console.log(this.RRForm.value)
    }
    else{
      console.log(this.RRForm.value)
      this.http.post(`${environment.uri}/restaurantrate/edit/${this.id}`, this.RRForm.value).subscribe(e => {
          this.route.navigate(['/restaurantrate'])
      })
    }
    
  }

}
