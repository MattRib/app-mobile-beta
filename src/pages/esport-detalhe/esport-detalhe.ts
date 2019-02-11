import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EsportService } from '../../services/esport.service';
import { Noticia } from '../../model/noticias';

/**
 * Generated class for the EsportDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esport-detalhe',
  templateUrl: 'esport-detalhe.html',
})
export class EsportDetalhePage {

  esport: Noticia[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public esportService: EsportService) {
  }

  ionViewDidLoad() {
    this.esportService.getEsport().subscribe(response => {
      this.esport = response;
    });
  }

  conteudo(e : Noticia){
    this.navCtrl.push('NoticiaConteudoPage',{'noticia': e});
  }

}
