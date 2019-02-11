import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModaService } from '../../services/moda.service';
import { Noticia } from '../../model/noticias';

/**
 * Generated class for the ModaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moda-detalhe',
  templateUrl: 'moda-detalhe.html',
})
export class ModaDetalhePage {

  moda: Noticia[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modaService: ModaService) {
  }

  ionViewDidLoad() {
    this.modaService.getModa().subscribe(response => {
      this.moda = response;
    });
  }

  conteudo(m : Noticia){
    this.navCtrl.push('NoticiaConteudoPage',{'noticia': m});
  }

}
