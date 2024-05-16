import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MapComponent} from "@maplibre/ngx-maplibre-gl";
import {MapLocationService} from "./services/map-location.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *',  animate(1000))
    ])
  ]
})

export class AppComponent implements AfterViewInit{
  @ViewChild(MapComponent) mapComp: MapComponent | undefined;
  showSpecificLocation = false;

  constructor(private mapService: MapLocationService) {
  }
  ngAfterViewInit(): void {
      this.mapService.location$.subscribe((location) => {
        if (this.mapComp) {
          this.mapComp.mapInstance.flyTo({
            center: [location.longitude, location.latitude],
            zoom: 15
          });
        }
      });

      this.mapService.locationClicked$.subscribe((clicked) => {
        this.showSpecificLocation = clicked;
      });
  }
  title = 'my-ng-app';
  }
