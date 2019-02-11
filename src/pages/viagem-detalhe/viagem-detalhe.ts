import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagemService } from '../../services/viagem.service';
import { Noticia } from '../../model/noticias';

/**
 * Generated class for the ViagemDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viagem-detalhe',
  templateUrl: 'viagem-detalhe.html',
})
export class ViagemDetalhePage {

  viagem: Noticia[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viagemService: ViagemService) {
  }

  ionViewDidLoad() {
    this.viagemService.getViagem().subscribe(response => {
      this.viagem = response;
    });
  }

  conteudo(t : Noticia){
    this.navCtrl.push('NoticiaConteudoPage',{'noticia': t});
  }

}
