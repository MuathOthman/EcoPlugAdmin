import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

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

  setFullLocation(location: object) {
    this.fullLocationSource.next(location);
  }
  setLocation(lat: number, lon: number) {
    this.locationSource.next({latitude: lat, longitude: lon});
  }

  locationClicked(clicked : boolean){
    this.locationClickedSource.next(clicked);
  }
}
