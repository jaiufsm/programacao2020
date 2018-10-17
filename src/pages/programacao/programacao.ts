import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController } from 'ionic-angular';
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
        private loadingCtrl: LoadingController, 
        private alertCtrl: AlertController) {
        this.segmentData = "Modulos";

        let loader = this.loadingCtrl.create({
            content: "Carregando...",
        });

        //this.displayError(loader);
        this.getAgrupadores(loader);
    }

    getAgrupadores(loader) {
        this.listaAgrupadores = [];
        this.listaModulosID = [];
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
            console.log("ERRO: ocorreu um problema com o GET");
            loader.dismiss().catch(() => {});
            this.displayError(loader);
        });
    }
    
    displayError(loader) {
        let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            subTitle: 'Verifique a sua conexão com a internet.',
            buttons: [
            {
                text: "OK",
                handler: () => {
                    this.getAgrupadores(loader);
                }
            }]
        });
        alert.present(); 
    }

    paginaModulos(agrupador: any) {
        this.navCtrl.push(ModulosPage, {agrupador: agrupador});    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }
}
