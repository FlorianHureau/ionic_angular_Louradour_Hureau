import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPage } from './navigation';
import { AgmCoreModule } from '@agm/core';

import { Component } from '@angular/core';
import { GeolocalisationProvider } from '../../providers/geolocalisation/geolocalisation';

@NgModule({
  declarations: [
    NavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF9w5Gw-o5L5et8ywyS_dfntBPaRRwzmA'
    }),
  ],
  providers:[
    GeolocalisationProvider,
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class NavigationPageModule {}
