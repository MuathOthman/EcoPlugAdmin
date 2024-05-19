import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Location {
  sijainti_ID: number;
  latitude: number;
  longitude: number;
  nimi: string;
  osoite: string;
  kaupunki: string;
  postinumero: string;
  tila: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchLocationsService {


  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>('http://localhost:3002/sijainnit/');
  }
}
