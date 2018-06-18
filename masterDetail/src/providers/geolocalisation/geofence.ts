import { Injectable } from '@angular/core';
import { Geofence } from '@ionic-native/geofence';
import { Lieu } from '../../model/lieuModel';

@Injectable()
export class GeofenceProvider {
    
    
constructor(private geofence: Geofence) {
    // initialize the plugin
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
  }

  
  private addGeofence(lieu :Lieu) {

    let fence = {
      id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', 
      latitude:       lieu.getLatitude(), 
      longitude:      lieu.getLongitude(),
      radius:         200, 
      transitionType: 3, 
      notification: { 
          id:             1, 
          title:          'Vous avez atteint une étapes', 
          text:           "vous venez d'arrivez a "+lieu.getVille+": "+lieu.getAdresse,
          openAppOnClick: true 
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }


}