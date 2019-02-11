import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModaDetalhePage } from './moda-detalhe';

@NgModule({
  declarations: [
    ModaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ModaDetalhePage),
  ],
})
export class ModaDetalhePageModule {}
