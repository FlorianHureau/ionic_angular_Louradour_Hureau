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
  private latitudeUser : number;
  private LongitudeUser : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo:GeolocalisationProvider) {
    let randonee=this.navParams.get('randoneeCour');
    this.arrive = randonee.lieuArrivee;
    this.depart = randonee.lieuDepart;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}
