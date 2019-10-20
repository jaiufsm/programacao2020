import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { ApiJaiProvider } from '../../providers/api-jai/api-jai';

@Component({
    selector: 'page-modulos-trabalhos',
    templateUrl: 'modulos-trabalhos.html',
})
export class ModulosTrabalhosPage {
    dataSelect: any;
    moduloSelect: any;
    listaTrabalhosModulo: any[];
    listaTrabalhosBkp: any[];
    horasInicio: any;
    segmentData: string;
    public listaFavoritos: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        public data: DataProvider, 
        private loadingCtrl: LoadingController, 
        private alertCtrl: AlertController,
        private apiJai: ApiJaiProvider) {
        this.listaFavoritos = this.data.paramData;
        this.dataSelect = this.navParams.data.dataSelect;
        this.moduloSelect = this.navParams.data.moduloSelect;

        let loader = this.loadingCtrl.create({
            content: "Carregando...",
        });

        //const url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" + 
        //            this.dataSelect + "&modulo=" + this.moduloSelect.id;

        //this.displayError(loader, url);
        this.getTrabalhosModulo(loader);
    }

    getTrabalhosModulo(loader) {
        this.horasInicio = [];
        this.listaTrabalhosBkp = [];
        this.listaTrabalhosModulo = [];
        loader.present();
        this.apiJai.getTrabalhos(this.dataSelect, this.moduloSelect.nome).then((trabalhos:any) => {
            console.log(trabalhos);
            for(let trabalhoArray of trabalhos) {
                let trabalho = {
                    trabalho: {
                        agrupador: trabalhoArray[12].split(' - ')[0],
                        apresentacao: {
                            data: trabalhoArray[7],
                            hora: trabalhoArray[8],
                            predio: trabalhoArray[9],
                            sala: trabalhoArray[10]
                        },
                        apresentador: trabalhoArray[4],
                        evento: trabalhoArray[6],
                        id: trabalhoArray[2],
                        modulo: trabalhoArray[12].split(' - ')[1],
                        orientador: trabalhoArray[5],
                        titulo: trabalhoArray[3]
                    }
                };
                console.log(trabalho);
                this.addHora(trabalho);
                this.setaFavoritos(trabalho);
                this.listaTrabalhosModulo.push(trabalho);

            }
            this.listaTrabalhosBkp = this.listaTrabalhosModulo;
            this.horasInicio.sort(function(a, b) {
                var a_ = +a.slice(0,2)
                var b_ = +b.slice(0,2)
                return +a_ - +b_;
            });
            this.segmentData = this.horasInicio[0];
            if(this.listaTrabalhosModulo.length > 0) {
                loader.dismiss().catch(() => {});
            }
        }, err => {
            console.log("ERRO: ocorreu um problema com o GET");
            loader.dismiss().catch(() => {});
            this.displayError(loader);
        });
    }

    displayError(loader) {
        let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            subTitle: 'Verifique a sua conexão com a internet e pressione OK para recarregar a página.',
            buttons: [
            {
                text: "OK",
                handler: () => {
                    this.getTrabalhosModulo(loader);
                }
            }]
        });
        alert.present();
    }

    putSegment(hora) {
        this.segmentData = hora;
    }

    getHoraInicioTrabalho(trab) {
        return trab.trabalho.apresentacao.hora.slice(0,5);
    }
    
    addHora(trab) {
        var novaHora = this.getHoraInicioTrabalho(trab);
        if (this.horasInicio.indexOf(novaHora) === -1) {
            this.horasInicio.push(novaHora);
        }
    }

    getTituloTrabalho(trab) {
        return trab.trabalho.titulo;
    }

    getApresentadorTrabalho(trab) {
        return trab.trabalho.apresentador;
    }

    getPredioTrabalho(trab) {
        return trab.trabalho.apresentacao.predio;
    }

    getSalaTrabalho(trab) {
        return trab.trabalho.apresentacao.sala;
    }

    getDataTrabalho(trab) {
        return trab.trabalho.apresentacao.data;
    }

    setaFavoritos(trab) {
        for (let favorito of this.listaFavoritos) {
            if (favorito.trabalho.id == trab.trabalho.id) {
                trab.favorito = true;
                return;
            }
        }
        trab.favorito = false;
    }

    favorito(trab: any, e: Event) {
        e.stopPropagation();
        if (!trab.favorito) {
            trab.favorito = true;
            this.listaFavoritos.push(trab);
        }
        else {
            trab.favorito = false;
            let index = -1;
            for (let favorito of this.listaFavoritos) {
                if (favorito.trabalho.id == trab.trabalho.id) {
                    index = this.listaFavoritos.indexOf(favorito, 0);
                }
            }
            if (index > -1) this.listaFavoritos.splice(index, 1);

         }
            /*
            let flag = true;
            trab.favorito = false;
            let index;
            if (flag) {
                index = this.listaFavoritos.indexOf(trab, 0);
                if (index == -1) flag = false;
            }
            if (!flag) {
                for (let favorito of this.listaFavoritos) {
                    if (favorito.trabalho.id == trab.trabalho.id) {
                        break;
                    }
                }
            }
            if (index > -1) this.listaFavoritos.splice(index, 1);
        }
        */
    }

    getTrabalhos(e: any) {
        this.listaTrabalhosModulo = this.listaTrabalhosBkp;
        let filtro = e.target.value;
        if (filtro && filtro.trim() != '') {
            let filtroLC = filtro.toLowerCase();
            this.listaTrabalhosModulo = this.listaTrabalhosModulo.filter((item) => {
                return (this.getTituloTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getPredioTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getSalaTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getApresentadorTrabalho(item).toLowerCase().indexOf(filtroLC) > -1);
            });
        }
    }
    
    ionViewWillLeave() {
        this.data.paramData = this.listaFavoritos;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulosTrabalhosPage');
    }
}
