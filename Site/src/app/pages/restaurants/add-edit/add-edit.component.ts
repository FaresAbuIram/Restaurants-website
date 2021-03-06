import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/classes/Restaurant';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
 
  id: any;
  selectedImage: any;
  clicked=false;
  restaurant = {
    name: '',
    city: '',
    street: '',
    lat: Number,
    lng: Number,
    phone: Number,
    image: ''

  }
  constructor(private router: ActivatedRoute, private http: HttpClient, private route: Router) {
    router.params.subscribe(p => {
      this.id = p['id'];
      if (this.id != 0) {
        http.get(`${environment.uri}/restaurant/${this.id}`).subscribe(e => {
          this.restaurant.name = e['name'];
          this.restaurant.city = e['city'];
          this.restaurant.street = e['street'];
          this.restaurant.lat = e['lat'];
          this.restaurant.lng = e['lng'];
          this.restaurant.phone = e['phone'];
          this.restaurant.image = e['image'];
          this.addEditRestaurantForm.patchValue({ name: this.restaurant.name });
          this.addEditRestaurantForm.patchValue({ city: this.restaurant.city });
          this.addEditRestaurantForm.patchValue({ street: this.restaurant.street });
          this.addEditRestaurantForm.patchValue({ lat: this.restaurant.lat });
          this.addEditRestaurantForm.patchValue({ lng: this.restaurant.lng });
          this.addEditRestaurantForm.patchValue({ phone: this.restaurant.phone });
          this.addEditRestaurantForm.patchValue({ image: this.restaurant.image });
        })
      }
    });

  }
  

  addEditRestaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    lat: new FormControl('', Validators.pattern('^([0-9]).{0,}$')),
    lng: new FormControl('', Validators.pattern('^([0-9]).{0,}$')),
    phone: new FormControl('', Validators.pattern('^([0-9]).{0,}$')),
    image: new FormControl('')
  });

  ngOnInit(): void {
  }
  onSubmit() {

    const formData = new FormData();
    formData.append('restaurant', this.selectedImage);
    formData.append('name', this.addEditRestaurantForm.value.name);
    formData.append('city', this.addEditRestaurantForm.value.city);
    formData.append('street', this.addEditRestaurantForm.value.street);
    formData.append('lat', this.addEditRestaurantForm.value.lat);
    formData.append('lng', this.addEditRestaurantForm.value.lng);
    formData.append('phone', this.addEditRestaurantForm.value.phone);

    if (this.id == 0) {
      this.http.post(`${environment.uri}/restaurant/add/${localStorage.getItem('userId')}`, formData).subscribe((e) => {
       
  
        console.log(e)
        this.route.navigate(['/']);
      });
    }
    else {
      this.http.post(`${environment.uri}/restaurant/edit/${this.id}`, formData).subscribe((e) => {
        console.log(e)
        
        this.route.navigate(['/']);
      });
    }

  }

  onSelectedImage(event) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
  }
  

}
