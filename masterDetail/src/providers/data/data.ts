import { Observable } from 'rxjs';
import { Lieu } from './../../model/lieuModel';
import { Randonee } from './../../model/randoneeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class DataProvider {

  private http:HttpClient;

  constructor( public httpC: HttpClient) {
    this.http = httpC;
  }

  public getData():Observable<Randonee[]>{
    return this.http.get('https://maps.metzmetropole.fr/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=public:pub_tou_bal_nat_rando&srsName=EPSG:4326&outputFormat=json')
      .map((data: {features : Array<any>})=>{
        let randonees = [];

        data.features.forEach(rando =>{
          let etapes = Array<Lieu>();
          let depart= new Lieu('Metz','inconnu',0,0);
          let arrive= new Lieu('Metz','inconnu',0,0);
          let distance= rando.properties.long;
          let duree = rando.properties.tps_min;
          let index =0;
          let max = rando.geometry.coordinates[0].length -1;
          rando.geometry.coordinates[0].forEach(coordonne => {
            if(index == 0){
              depart = new Lieu('Metz','inconnu',coordonne[0],coordonne[1]);
            }
            else if(index == max ){
              arrive = new Lieu('Metz','inconnu',coordonne[0],coordonne[1]);
            }
            else{
              let lieu = new Lieu('Metz','inconnu',coordonne[0],coordonne[1]);
              etapes.push(lieu);
            }
            index ++;
          });
          let randonee = new Randonee(depart,arrive,etapes,distance,duree);
          randonees.push(randonee);
        });

        return randonees;
      });

  }

  

}
