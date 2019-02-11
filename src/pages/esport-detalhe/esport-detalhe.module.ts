import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsportDetalhePage } from './esport-detalhe';

@NgModule({
  declarations: [
    EsportDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(EsportDetalhePage),
  ],
})
export class EsportDetalhePageModule {}
