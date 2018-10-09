import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProgramacaoPage } from './../pages/programacao/programacao';
import { LinksPage } from '../pages/links/links';
import { FavoritosPage } from './../pages/favoritos/favoritos';
import { FiltroPage } from './../pages/filtro/filtro';
import { ModulosPage } from './../pages/modulos/modulos';
import { ModulosTrabalhosPage } from './../pages/modulos-trabalhos/modulos-trabalhos';

//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProgramacaoPage,
    LinksPage,
    FavoritosPage,
    FiltroPage,
    ModulosPage,
    ModulosTrabalhosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProgramacaoPage,
    LinksPage,
    FavoritosPage,
    FiltroPage,
    ModulosPage,
    ModulosTrabalhosPage
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    DataProvider
  ]
})
export class AppModule {}
