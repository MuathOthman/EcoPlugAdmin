import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapLocationService {
  private fullLocationSource = new Subject<object>();
  private locationSource = new Subject<{latitude: number, longitude: number}>()
  private locationClickedSource = new Subject<boolean>();

  location$ = this.locationSource.asObservable();
  locationClicked$ = this.locationClickedSource.asObservable();
  fullLocation$ = this.fullLocationSource.asObservable();

  constructor(private http: HttpClient) { }

  setFullLocation(location: object) {
    this.fullLocationSource.next(location);
  }
  setLocation(lat: number, lon: number) {
    this.locationSource.next({latitude: lat, longitude: lon});
  }

  locationClicked(clicked : boolean){
    this.locationClickedSource.next(clicked);
  }

  updateTila(id: number, tila:string){
    console.log(id, tila);
    console.log('updateTila');
    this.http.post('http://localhost:3002/sijainnit/update/' + id, {tila: tila})
      .subscribe({
        error: error => console.error('There was an error!', error)
      });
  }

}
