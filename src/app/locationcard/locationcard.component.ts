import { Component, OnInit } from '@angular/core';
import {FetchLocationsService} from "../services/fetch-locations.service";

@Component({
  selector: 'app-locationcard',
  templateUrl: './locationcard.component.html',
  styleUrls: ['./locationcard.component.css']
})
export class LocationcardComponent implements OnInit {
  locations: any = [];

  constructor(private fetchLocationsService: FetchLocationsService) { }

  ngOnInit(): void {
    this.fetchLocationsService.getLocations().subscribe((data: any) => {
      this.locations = data;
    });
  }

}
