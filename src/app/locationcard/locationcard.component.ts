import {Component, OnInit, ViewChild} from '@angular/core';
import {FetchLocationsService} from "../services/fetch-locations.service";
import {MapComponent, } from "@maplibre/ngx-maplibre-gl";
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
  selector: 'app-locationcard',
  templateUrl: './locationcard.component.html',
  styleUrls: ['./locationcard.component.css']
})


export class LocationcardComponent implements OnInit {
  @ViewChild(MapComponent) mapComp: MapComponent | undefined;
  locations: any = [];

  constructor(private fetchLocationsService: FetchLocationsService, private mapService: MapLocationService) { }

  ngOnInit(): void {
    this.fetchLocationsService.getLocations().subscribe((data: any) => {
      this.locations = data;
    });
  }

  zoomToLocation(location: Location) {
    this.mapService.setLocation(location.latitude, location.longitude);
    this.mapService.locationClicked(true);
    this.mapService.setFullLocation(location);
  }

}
