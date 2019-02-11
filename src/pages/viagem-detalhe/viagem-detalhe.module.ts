import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViagemDetalhePage } from './viagem-detalhe';

@NgModule({
  declarations: [
    ViagemDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ViagemDetalhePage),
  ],
})
export class ViagemDetalhePageModule {}
