import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Randonee } from '../../model/randoneeModel';
import { RandoneeRepository } from '../../repository/randoneeRepository';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public rr:RandoneeRepository) {
      this.maListe= rr.getall();
  }

  gotoDetailRandonee(rand){
    this.navCtrl.push('randoneeDetail',{randonee:rand})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePage');
    
  }

}
