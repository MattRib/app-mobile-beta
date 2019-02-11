import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.service';
import { Noticia } from '../../model/noticias';
import { Tech } from '../../model/tech';


/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias : Noticia[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public noticiasService: NoticiaService) {
  }

  ionViewDidLoad() {
    this.noticiasService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
  }

  detalhes(n : Noticia){
    this.navCtrl.push('NoticiasDetalhePage',{'noticia': n});
  }

}
