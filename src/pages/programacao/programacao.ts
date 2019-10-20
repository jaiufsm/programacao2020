import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { ModulosPage } from './../modulos/modulos';
import { ApiJaiProvider } from '../../providers/api-jai/api-jai';

@Component({
    selector: 'page-programacao',
    templateUrl: 'programacao.html'
})
export class ProgramacaoPage {
    segmentData: string;
    listaAgrupadores: any[];
    listaModulosID: any[];
    palestras: Promise<any>;
    listaPalestras: any[];
    listaDatas: any[];
    listaEventos: any[];
    public listaPalestrasFavs: any;
    public listaEventosFavs: any;

    constructor(public navCtrl: NavController, 
        public data: DataProvider, public navParams: NavParams, 
        private loadingCtrl: LoadingController, 
        private alertCtrl: AlertController,
        private apiJai: ApiJaiProvider) {
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
        this.apiJai.getModulos().then((data:any) => {
            let agrupadores = data.map(modulo => modulo[0]).filter((value, index, self) => self.indexOf(value) === index).sort();
            for(let agrupador of agrupadores) {
                const modulosAgrupador = data.filter((value) => value[0] === agrupador);
                const modulos = modulosAgrupador.map(modulo => {
                    return {
                        nome: modulo[1],
                        datas: modulo[2].split(','),
                        id: modulo[3],
                        trabalhos: []
                    }
                });
                const newAgrupador = {
                    nome: agrupador,
                    modulos: modulos
                }
                this.listaAgrupadores.push(newAgrupador);
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
        this.apiJai.getPalestras().then(palestras => {
            for (let palestra of palestras) {
                const palestraObj = {
                    nome: palestra[0],
                    apresentador: palestra[1],
                    data: palestra[2],
                    hora: palestra[3],
                    predio: palestra[4],
                    sala: palestra[5]
                };
                this.listaPalestras.push(palestraObj);
                this.addData(palestraObj.data);
            } 
        });
    }

    getEventos() {
        this.listaEventos = [];
        this.apiJai.getEventos().then(eventos => {
            for (let evento of eventos) {
                const eventoObj = {
                    nome: evento[0],
                    link: evento[1],
                };
                this.listaEventos.push(eventoObj);
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

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }

    ionViewWillLeave() {
        this.data.paramData2 = this.listaPalestrasFavs;
        this.data.paramData3 = this.listaEventosFavs;
    }
}
