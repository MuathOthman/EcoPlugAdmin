import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


interface Location {
  sijainti_ID: number;
  latitude: number;
  longitude: number;
  nimi: string;
  osoite: string;
  kaupunki: string;
  postinumero: string;
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})



export class LocationsComponent implements OnInit {
  @Input() LngLat: number[] = [0, 0];
  locations:Location[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLocations();
    console.log("Trying to print" + this.locations);
  }

  buttonClick() {
    console.log("Button clicked");
    console.log(this.locations);
  }

  getLocations() {
    this.http.get<Location[]>('http://localhost:3002/sijainnit/').subscribe((data: Location[]) => {
      this.locations = data;
    });
  }

}
