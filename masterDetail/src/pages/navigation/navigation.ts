import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lieu } from '../../model/lieuModel';
import { GeolocalisationProvider } from '../../providers/geolocalisation/geolocalisation';

/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"navigationRand"})
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
}) 
export class NavigationPage {
  
  private depart : Lieu;
  private arrive : Lieu;
  private etapes : Array<Lieu>;
  private positionUser = [0,0];
  private tracer= [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo:GeolocalisationProvider) {
    
    let randonee=this.navParams.get('randoneeCour');
    this.arrive = randonee.lieuArrivee;
    this.depart = randonee.lieuDepart;
    this.etapes = randonee.etapes;
    geo.getLocation(this.positionUser);
    this.getTracer();
  }

  getTracer(){
    for(var i=0; i<this.etapes.length; i++){
      if(i=0){
        this.tracer.push([this.depart.getLatitude,this.depart.getLongitude,this.etapes[i].getLatitude,this.etapes[i].getLongitude]);
      }
      else{
        this.tracer.push([this.etapes[i-1].getLatitude,this.etapes[i-1].getLongitude,this.etapes[i].getLatitude,this.etapes[i].getLongitude]);
      }
    }
    this.tracer.push([this.etapes[this.etapes.length-1].getLatitude,this.etapes[this.etapes.length-1].getLongitude,this.arrive.getLatitude,this.arrive.getLongitude]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}
