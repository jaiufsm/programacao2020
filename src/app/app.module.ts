import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProgramacaoPage } from './../pages/programacao/programacao';
import { LinksPage } from '../pages/links/links';
import { FavoritosPage } from './../pages/favoritos/favoritos';
import { ModulosPage } from './../pages/modulos/modulos';
import { ModulosTrabalhosPage } from './../pages/modulos-trabalhos/modulos-trabalhos';

//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { ApiJaiProvider } from '../providers/api-jai/api-jai';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProgramacaoPage,
    LinksPage,
    FavoritosPage,
    ModulosPage,
    ModulosTrabalhosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProgramacaoPage,
    LinksPage,
    FavoritosPage,
    ModulosPage,
    ModulosTrabalhosPage
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ApiJaiProvider
  ]
})
export class AppModule {}
