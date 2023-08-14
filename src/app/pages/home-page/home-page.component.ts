import { Component, OnInit } from '@angular/core';

declare const L :any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  ngOnInit(): void {
    let container = L.DomUtil.get('map');
    if(container != null){
    container._leaflet_id = null;
    }
    let map = L.map('map').setView([-25.7479, 28.2293], 8);
  
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  }
}
