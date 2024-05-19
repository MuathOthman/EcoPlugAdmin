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
  tila: string;
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
  tila: string = '';
  editmode: boolean = true;

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
      this.tila = location.tila;
    });
  }

  editLocation() {
    console.log('editLocation');
    this.editmode = !this.editmode;
  }

  saveLocation() {
    console.log('saveLocation');
    this.editmode = !this.editmode;
    //this.mapService.updateLocation(this.sijainti_ID, this.latitude, this.longitude, this.nimi, this.osoite, this.kaupunki, this.postinumero, this.tila);
  }

  updateTila(){
    console.log('updateTila');
    if (this.tila === 'true') {
      this.tila = 'false';
    } else {
      this.tila = 'true';
    }
    this.mapService.updateTila(this.sijainti_ID, this.tila);
  }
}
