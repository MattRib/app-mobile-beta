import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoticiaService } from '../services/noticias.service';
import { HttpClientModule } from '@angular/common/http';
import { TechService } from '../services/tech.services';
import { ViagemService } from '../services/viagem.service';
import { EsportService } from '../services/esport.service';
import { ModaService } from '../services/moda.service';
import { FirebaseConfig } from '../config/firebase.config';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "@angular/fire";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiaService,
    TechService,
    ViagemService,
    EsportService,
    ModaService,
    AngularFireAuth
  ]
})
export class AppModule {}
