import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LocationcardComponent } from './locationcard/locationcard.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    SidebarComponent,
    SearchbarComponent,
    LocationcardComponent
  ],
  imports: [
    BrowserModule,
    NgxMapLibreGLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
