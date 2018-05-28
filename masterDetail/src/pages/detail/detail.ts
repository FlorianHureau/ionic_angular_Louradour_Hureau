import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Randonee } from '../../model/randoneeModel';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"randoneeDetail"})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private randonee : Randonee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.randonee=this.navParams.get('randonee');
  }

  gotoRandoneeCour(){
    this.navCtrl.push('navigationRand',{randoneeCour:this.randonee})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
