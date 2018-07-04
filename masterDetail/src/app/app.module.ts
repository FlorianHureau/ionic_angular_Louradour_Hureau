
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmDirectionModule } from 'agm-direction';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListePage } from './../pages/liste/liste';
import { DetailPage } from './../pages/detail/detail';
import { NavigationPage } from './../pages/navigation/navigation';

import { RandoneeRepository } from '../repository/randoneeRepository';
import { LieuRepository } from '../repository/lieuRepository';
import { GeolocalisationProvider } from '../providers/geolocalisation/geolocalisation';
import { GeofenceProvider } from '../providers/geolocalisation/geofence';
import { DataProvider } from '../providers/data/data';
import { TimerProvider } from '../providers/timer/timer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF9w5Gw-o5L5et8ywyS_dfntBPaRRwzmA'
    }),
    AgmDirectionModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RandoneeRepository,
    LieuRepository,
    GeolocalisationProvider,
    GeofenceProvider,
    Geolocation,
    DataProvider,
    TimerProvider,
  ]
})
export class AppModule {}
