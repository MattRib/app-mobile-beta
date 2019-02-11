import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.service';
import { Noticia } from '../../model/noticias';
import { TechService } from '../../services/tech.services';
import { ViagemService } from '../../services/viagem.service';
import { EsportService } from '../../services/esport.service';
import { ModaService } from '../../services/moda.service';


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
  tech : Noticia[];
  viagem: Noticia[];
  esport: Noticia[];
  moda: Noticia[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public noticiasService: NoticiaService,
              public techServices: TechService,
              public viagemService: ViagemService,
              public esportService: EsportService,
              public modaService: ModaService) {
  }

  ionViewDidLoad() {
    this.noticiasService.getNoticias().subscribe(response => {
      this.noticias = response;      
    });
    this.techServices.getTech().subscribe(response => {
      this.tech = response;
    });
    this.viagemService.getViagem().subscribe(response => {
      this.viagem = response;
    });
    this.esportService.getEsport().subscribe(response => {
      this.esport = response;
    });
    this.modaService.getModa().subscribe(response => {
      this.moda = response;
    });
  }

  detalhes(n : Noticia){
    this.navCtrl.push('NoticiasDetalhePage',{'noticia': n});
  }

  detalhesTech(t : Noticia){
    this.navCtrl.push('TechDetalhesPage',{'tech': t});
  }

  detalhesViagem(v : Noticia){
    this.navCtrl.push('ViagemDetalhePage',{'viagem': v});
  }

  detalhesEsport(e : Noticia){
    this.navCtrl.push('EsportDetalhePage',{'esport': e});
  }

  detalhesModa(m : Noticia){
    this.navCtrl.push('ModaDetalhePage',{'moda': m});
  }

}
