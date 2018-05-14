import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  private maListe= ["Bleu","Rouge","Noir","Blanc","Vert"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePage');
    
  }

}
