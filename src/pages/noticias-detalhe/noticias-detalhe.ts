import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticias';
import { NoticiaService } from '../../services/noticias.service';


@IonicPage()
@Component({
  selector: 'page-noticias-detalhe',
  templateUrl: 'noticias-detalhe.html',
})
export class NoticiasDetalhePage {

  noticias : Noticia[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public noticiasService : NoticiaService) {
  }

  ionViewDidLoad() {
    this.noticiasService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
  }

  detalhes(n : Noticia){
    this.navCtrl.push('NoticiasDetalhePage',{'noticia': n});
  }

  conteudo(n : Noticia){
    this.navCtrl.push('NoticiaConteudoPage',{'noticia': n});
  }

}