import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LogOffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-off',
  templateUrl: 'log-off.html',
})
export class LogOffPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularfireauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.angularfireauth.auth.signOut()
    .then(()=>{      
    })
    .catch((error : any)=>{      
    });
  }

}
