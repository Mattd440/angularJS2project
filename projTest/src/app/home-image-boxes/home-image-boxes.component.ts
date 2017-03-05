import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-image-boxes',
  templateUrl: './home-image-boxes.component.html',
  styleUrls: ['./home-image-boxes.component.css']
})
export class HomeImageBoxesComponent implements OnInit {
  imageData = [
    {title : "5 Star Resorts ",image:"beach1.jpg", description: "Worlds Best Resorts in 12 Countries"},
    {title : "Carribean Cruises ",image:"beach1.jpg", description: "Sail away today to Jamaicas or The Bahamas"},
    {title : "Reserve",image:"beach1.jpg", description: "Reserve Today To Guarantee Your Perfect Trip"},
    {title : "About Us",image:"beach1.jpg", description: "Learn More About Us Here at Dream Vacations"},

  ];
  constructor() { }

  ngOnInit() {
  }

}
