import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  lat = 31.507151;
  lng = 35.090634;


  constructor(private http: HttpClient, private service: DataService) { }

  ngOnInit(): void {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat]
    });
    this.service.getRestaurants().subscribe(data => {
      JSON.parse(data).forEach(element => {
        if (element.lat && element.lng) {
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div >
            ${element.name}
            </div>
            <div>  
            ${element.phone}
            </div>
            <div  >  
             <img style="width:100px; height:100px" src="${element.image}" />
            </div>
              `
          );
          var marker = new mapboxgl.Marker()
            .setLngLat([element.lng, element.lat])
            .setPopup(popup)

            .addTo(this.map);
        }
      });
    })

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
