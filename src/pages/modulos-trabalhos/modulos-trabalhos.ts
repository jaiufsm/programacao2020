import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DataProvider } from "../../providers/data/data";
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
    selector: 'page-modulos-trabalhos',
    templateUrl: 'modulos-trabalhos.html',
})
export class ModulosTrabalhosPage {
    dataSelect: any;
    moduloSelect: any;
    trabalhosModulo: Observable<any>;
    listaTrabalhosModulo: any[];
    listaTrabalhosBkp: any[];
    horasInicio: any;
    segmentData: string;
    public listaFavoritos: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, 
        public data: DataProvider, public datepipe: DatePipe) {
        this.listaFavoritos = this.data.paramData;
        this.dataSelect = this.navParams.data.dataSelect;
        this.moduloSelect = this.navParams.data.moduloSelect;
        this.horasInicio = [];
        this.listaTrabalhosBkp = [];
        this.listaTrabalhosModulo = [];

        const url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" + 
                    this.dataSelect + "&modulo=" + this.moduloSelect.id;

        this.trabalhosModulo = this.http.get(url);

        this.trabalhosModulo.subscribe(info => {
            for (let trabalho of info.trabalhos) {
                this.setaFavoritos(trabalho);
                this.listaTrabalhosModulo.push(trabalho);
                this.addHora(trabalho); 
            }
            this.listaTrabalhosBkp = this.listaTrabalhosModulo;
            this.segmentData = this.horasInicio[0];
        });
    }

    putSegment(hora) {
        this.segmentData = hora;
    }

    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }

    getHoraInicioTrabalho(trab) {
        return trab.trabalho.apresentacao.data.slice(11,16);
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
        return trab.trabalho.apresentacao.data.slice(0,10);
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
