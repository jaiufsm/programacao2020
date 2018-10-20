import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from "../../providers/data/data";
import { ModulosPage } from './../modulos/modulos';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'page-programacao',
    templateUrl: 'programacao.html'
})
export class ProgramacaoPage {
    segmentData: string;
    agrupadores: Observable<any>;
    listaAgrupadores: any[];
    listaModulosID: any[];
    palestras: Observable<any>;
    listaPalestras: any[];
    listaDatas: any[];
    eventos: Observable<any>;
    listaEventos: any[];
    public listaPalestrasFavs: any;
    public listaEventosFavs: any;

    constructor(public navCtrl: NavController, public http: HttpClient, 
        public data: DataProvider, public navParams: NavParams, 
        private loadingCtrl: LoadingController, 
        private alertCtrl: AlertController, 
        public datepipe: DatePipe) {
        this.segmentData = "Modulos";
        this.listaDatas = [];
        this.listaPalestrasFavs = this.data.paramData2;
        this.listaEventosFavs = this.data.paramData3;

        let loader = this.loadingCtrl.create({
            content: "Carregando...",
        });

        //this.displayError(loader);
        this.getAgrupadores(loader);
        this.getPalestras();
        this.getEventos();
    }

    getAgrupadores(loader) {
        this.listaAgrupadores = [];
        this.listaModulosID = [];
        loader.present();
        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');
        //this.agrupadores = this.http.get('https://portal.ufsm.br/jai/avaliacaoRest/findModulos.json',  {headers: headers});
        this.agrupadores.subscribe(info => {
            for (let agrupador of info.modulos.agrupadores) {
            //for (let agrupador of info.agrupadores) {
                for (let modulo of agrupador.modulos) {
                    this.listaModulosID.push(modulo.id);
                }
                this.listaAgrupadores.push(agrupador);
            }
            if (this.listaAgrupadores.length > 0) {
                loader.dismiss().catch(() => {});
            }
        }, error => {
            console.log("ERRO: ocorreu um problema com o GET dos agrupadores");
            loader.dismiss().catch(() => {});
            this.displayError(loader);
        });
    }

    getPalestras() {
        this.listaPalestras = [];
        this.palestras = this.http.get('./assets/data/palestras.json');
        this.palestras.subscribe(info => {
            for (let palestra of info.palestras) {
                this.listaPalestras.push(palestra);
                this.addData(palestra.data.slice(0, 10));
            } 
        });
    }

    getEventos() {
        this.listaEventos = [];
        this.eventos = this.http.get('./assets/data/eventos.json');
        this.eventos.subscribe(info => {
            for (let evento of info.eventos) {
                this.listaEventos.push(evento);
            }
        });
    }

    favorito(obj: any, listaFavs: any, e: Event) {
        e.stopPropagation();
        if (!obj.favorito) {
            obj.favorito = true;
            listaFavs.push(obj);
        }
        else {
            obj.favorito = false;
            const index = listaFavs.indexOf(obj, 0);
            if (index > -1) listaFavs.splice(index, 1);
        }
     }

    addData(data) {
        if (this.listaDatas.indexOf(data) === -1) {
            this.listaDatas.push(data);
        }
    }

    displayError(loader) {
        let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            subTitle: 'Verifique a sua conexão com a internet e pressione OK para recarregar a página.',
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

    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }

    ionViewWillLeave() {
        this.data.paramData2 = this.listaPalestrasFavs;
        this.data.paramData3 = this.listaEventosFavs;
    }
}
