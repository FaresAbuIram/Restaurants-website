import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.css']
})
export class AddEditMenuComponent implements OnInit {

  id: any;
  resId:any;
  selectedImage: any;
  clicked=false;

  menu = {
    name:'',
    description:'',
    price:'',

  }

  addEditMenuForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('^([0-9]).{0,}$')]),
    image: new FormControl('')
  })


  constructor(private router: ActivatedRoute,private http:HttpClient, private route :Router) {
    router.params.subscribe(p => {
      this.id = p['id']
      this.resId=p['resId']
      if(this.id!=0){
        http.get(`${environment.uri}/onemenu/${this.id}`).subscribe(e=>{
          console.log(e)
          this.menu.name= e['name'];
          this.menu.description = e['description'],
          this.menu.price= e['price'];
          this.addEditMenuForm.patchValue({name:this.menu.name})
          this.addEditMenuForm.patchValue({description:this.menu.description})
          this.addEditMenuForm.patchValue({price:this.menu.price})

        })
      }

    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('menu', this.selectedImage);
    formData.append('name', this.addEditMenuForm.value.name);
    formData.append('description', this.addEditMenuForm.value.description);
    formData.append('price', this.addEditMenuForm.value.price);
    if (this.id == 0) {
      this.http.post(`${environment.uri}/menus/add/${this.resId}`, formData).subscribe((e) => {
        console.log(e)
        this.route.navigate([`/menus/${this.resId}`]);
      });
    }
    else {
      this.http.post(`${environment.uri}/menus/edit/${this.id}`, formData).subscribe((e) => {
        console.log(e)
        this.route.navigate([`/menus/${this.resId}`]);
      });
    }
  }

  onSelectedImage(event) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
  }

}
