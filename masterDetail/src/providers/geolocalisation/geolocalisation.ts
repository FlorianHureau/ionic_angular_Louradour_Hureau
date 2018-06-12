import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeolocalisationProvider {


  getLocation(position){
    let geo = new Geolocation();
    geo.getCurrentPosition().then((resp)=> {
        position[0] = resp.coords.latitude;
        position[1] = resp.coords.longitude;
    });

    geo.watchPosition().subscribe((data) => {
        position[0] = data.coords.latitude;
        position[1] = data.coords.longitude;
    });
}

}
