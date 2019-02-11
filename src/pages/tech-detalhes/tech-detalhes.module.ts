import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechDetalhesPage } from './tech-detalhes';

@NgModule({
  declarations: [
    TechDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(TechDetalhesPage),
  ],
})
export class TechDetalhesPageModule {}
