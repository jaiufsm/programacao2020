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
    datas: any;
    trabalhos: Observable<any>;
    segmentData: string;
    agrupadores: Observable<any>;
    listaAgrupadores: any[];
    listaModulosID: any[];
    constructor(public navCtrl: NavController, public http: HttpClient, 
        public data: DataProvider, public navParams: NavParams, 
        private loadingCtrl: LoadingController,) {
        this.datas = [];
        this.segmentData = "Modulos";
        this.listaAgrupadores = [];
        this.listaModulosID = [];

        let loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 10000
        });

        loader.present();

        this.trabalhos = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhos');
        this.trabalhos.subscribe(info => {
            for (let trabalho of info.trabalhos) {
                var data = trabalho.trabalho.apresentacao.data;
                if (!this.datas.includes(data.slice(0,10))) 
                    this.datas.push(data.slice(0,10))
            }
            this.datas.sort(function(a, b) {
                var a_ = +a.slice(8,10)
                var b_ = +b.slice(8,10)
                return a_ - b_;
            });
        }, error => {
            console.log(error);
            loader.dismiss().catch(() => {});
        });

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
        this.navCtrl.push(ModulosPage, {agrupador: agrupador, datas: this.datas});    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }
}
