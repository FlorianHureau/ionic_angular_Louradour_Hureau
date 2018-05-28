import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeolocalisationProvider {

  private latitude:number;
  private longitude:number;

  constructor(private geo:Geolocation) {
    this.RefreshCoordinate();
  }

  public RefreshCoordinate(){
    return this.geo.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  public getLatitude(){
    return this.latitude;
  }

  public getLongitude(){
    return this.longitude;
  }
}
