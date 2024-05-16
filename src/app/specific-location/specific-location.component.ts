import { Component, OnInit } from '@angular/core';
import {MapLocationService} from "../services/map-location.service";

interface Location {
  sijainti_ID: number;
  latitude: number;
  longitude: number;
  nimi: string;
  osoite: string;
  kaupunki: string;
  postinumero: number;
}

@Component({
  selector: 'app-specific-location',
  templateUrl: './specific-location.component.html',
  styleUrls: ['./specific-location.component.css']
})
export class SpecificLocationComponent implements OnInit {
  sijainti_ID: number = 0;
  latitude: number = 0;
  longitude: number = 0;
  nimi: string = '';
  osoite: string = '';
  kaupunki: string = '';
  postinumero: number = 0;

  constructor(private mapService: MapLocationService) { }

  ngOnInit(): void {
    this.mapService.fullLocation$.subscribe((location: any) => {
      this.sijainti_ID = location.sijainti_ID;
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.nimi = location.nimi;
      this.osoite = location.osoite;
      this.kaupunki = location.kaupunki;
      this.postinumero = location.postinumero;
    });
  }

}
