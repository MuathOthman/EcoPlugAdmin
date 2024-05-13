import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FetchLocationsService} from "../services/fetch-locations.service";


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

  constructor(private fetchLocationsService: FetchLocationsService) { }

  ngOnInit(): void {
    this.fetchLocationsService.getLocations().subscribe((data: any) => {
      this.locations = data;
    });
  }

  buttonClick() {
    console.log("Button clicked");
    console.log(this.locations);
  }

}
