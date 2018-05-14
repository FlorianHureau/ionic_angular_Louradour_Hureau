import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Randonee } from '../../model/randoneeModel';

/**
 * Generated class for the ListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"listePage"
})
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {

  private maListe= Array<Randonee>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.maListe.push(new Randonee("Nice","Paris",1600,72));
    this.maListe.push(new Randonee("Marseille","tulle",160,12));
    this.maListe.push(new Randonee("Clermont-Ferrand","Giat",70,10));
  }

  gotoDetailRandonee(rand){
    this.navCtrl.push('randoneeDetail',{randonee:rand})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePage');
    
  }

}
