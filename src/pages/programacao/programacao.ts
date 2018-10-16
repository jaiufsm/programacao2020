import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from "../../providers/data/data";
import { ModulosPage } from './../modulos/modulos';

@Component({
    selector: 'page-programacao',
    templateUrl: 'programacao.html'
})
export class ProgramacaoPage {
    segmentData: string;
    agrupadores: Observable<any>;
    listaAgrupadores: any[];
    listaModulosID: any[];
    constructor(public navCtrl: NavController, public http: HttpClient, 
        public data: DataProvider, public navParams: NavParams, 
        private loadingCtrl: LoadingController,) {
        this.segmentData = "Modulos";
        this.listaAgrupadores = [];
        this.listaModulosID = [];

        let loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 10000
        });

        loader.present();

        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');
        this.agrupadores.subscribe(info => {
            for (let agrupador of info.modulos.agrupadores) {
                for (let modulo of agrupador.modulos) {
                    this.listaModulosID.push(modulo.id);
                }
                this.listaAgrupadores.push(agrupador);
            }
            if (this.listaAgrupadores.length > 0) {
                loader.dismiss().catch(() => {});
            }
        }, error => {
            console.log(error);
            loader.dismiss().catch(() => {});
        });
    }

    paginaModulos(agrupador: any) {
        this.navCtrl.push(ModulosPage, {agrupador: agrupador});    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }
}
