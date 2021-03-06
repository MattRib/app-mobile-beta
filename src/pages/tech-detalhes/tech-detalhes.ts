import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticias';
import { TechService } from '../../services/tech.services';

/**
 * Generated class for the TechDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech-detalhes',
  templateUrl: 'tech-detalhes.html',
})
export class TechDetalhesPage {

  tech : Noticia[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public techService: TechService) {
  }

  ionViewDidLoad() {
    this.techService.getTech().subscribe(response => {
      this.tech = response;
    });
  }

  conteudo(t : Noticia){
    this.navCtrl.push('NoticiaConteudoPage',{'noticia': t});
  }

}
