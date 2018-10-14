import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { DataProvider } from "../../providers/data/data";
import { FiltroPage } from './../filtro/filtro';
import { ModulosPage } from './../modulos/modulos';

@Component({
    selector: 'page-programacao',
    templateUrl: 'programacao.html'
})
export class ProgramacaoPage {
    datas: any;
    datasCompletas: any;
    horasInicio: any;
    //edicaoCorrente: Observable<any>
    trabalhos: Observable<any>;
    listaTrabalhos: any[];
    listaTrabalhosBkp: any[];
    segmentData: string;
    listaFavoritos: any[];
    dataSelecionada: string;
    localSelecinado: string;
    locais: any;
    agrupadores: Observable<any>;
    listaAgrupadores: any[];
    listaModulosID: any[];
    constructor(public navCtrl: NavController, public http: HttpClient, private datepipe: DatePipe, 
        public data: DataProvider, public navParams: NavParams, private modalCtrl: ModalController) {
        //this.edicaoCorrente = this.http.get('http://localhost:5000/jai/avaliacaoRest/findEdicao');
        this.listaTrabalhos = [];
        this.listaTrabalhosBkp = [];
        this.datas = [];
        this.datasCompletas = [];
        this.locais = [];
        this.listaFavoritos = this.data.paramData;
        this.segmentData = "Modulos";
        this.listaAgrupadores = [];
        this.listaModulosID = [];
        this.trabalhos = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhos');
        //this.trabalhos = this.http.get('http://localhost:5000/jai/avaliacaoRest/findTrabalhos');

        this.trabalhos.subscribe(info => {
            for (let trabalho of info.trabalhos) {
                trabalho.trabalho.favorito = false;
                //this.setaFavoritos(trabalho);
                this.listaTrabalhos.push(trabalho);
                var data = trabalho.trabalho.apresentacao.data;
                this.datasCompletas.push(data);
                if (!this.datas.includes(data.slice(0,10))) 
                    this.datas.push(data.slice(0,10))
                if (!this.locais.includes(this.getPredioTrabalho(trabalho))) 
                    this.locais.push(this.getPredioTrabalho(trabalho));
            }
            this.listaTrabalhosBkp = this.listaTrabalhos;
            this.datas.sort(function(a, b) {
                var a_ = +a.slice(8,10)
                var b_ = +b.slice(8,10)
                return a_ - b_;
            });
        });

        //this.agrupadores = this.http.get('http://localhost:5000/jai/avaliacaoRest/findModulos');
        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');

        this.agrupadores.subscribe(info => {
            for (let agrupador of info.modulos.agrupadores) {
                for (let modulo of agrupador.modulos) {
                    this.listaModulosID.push(modulo.id);
                }
                //console.log(modulo.modulos);
                this.listaAgrupadores.push(agrupador);
                //this.listaModulosID.push(modulo.)
            }
        })

        this.dataSelecionada = 'Todos';
        this.localSelecinado = 'Todos';
    }

    putSegment(data) {
        this.segmentData = data;
    }

    getDataDia(data) {
        return data.slice(0,10);
    }

    getDataHora(data) {
        return data.slice(11,16);
    }

    getHorasIniciais(data) {
        let horasIniciais = [];
        this.datasCompletas.forEach(e => {
            if (horasIniciais.indexOf(this.getDataHora(e) == -1) && this.getDataDia(e) === data)
                horasIniciais.push(this.getDataHora(e));
        });
        return horasIniciais;
    }

    
    getTituloTrabalho(trab) {
        return trab.trabalho.titulo;
    }

    getApresentadorTrabalho(trab) {
        return trab.trabalho.apresentador;
    }

    getDataTrabalho(trab) {
        return trab.trabalho.apresentacao.data.slice(0,10);
    }

    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }

    getHoraInicioTrabalho(trab) {
        return trab.trabalho.apresentacao.data.slice(11, 16);
    }

    getPredioTrabalho(trab) {
        return trab.trabalho.apresentacao.predio;
    }

    getSalaTrabalho(trab) {
        return trab.trabalho.apresentacao.sala;
    }

    favorito(trab: any, e: Event) {
        e.stopPropagation();
        if (!trab.favorito) { 
            trab.favorito = true;
            this.listaFavoritos.push(trab);
        }
        else {
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
                        index = this.listaFavoritos.indexOf(favorito, 0);
                        break;
                    }
                }
            }
            if (index > -1) this.listaFavoritos.splice(index, 1);
        }
    }

    getTrabalhos(e: any) {
        this.listaTrabalhos = this.listaTrabalhosBkp;
        let filtro = e.target.value;
        if (filtro && filtro.trim() != '') {
            let filtroLC = filtro.toLowerCase();
            this.listaTrabalhos = this.listaTrabalhos.filter((item) => {
                return (this.getTituloTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getDataTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getHoraInicioTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getPredioTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getSalaTrabalho(item).toLowerCase().indexOf(filtroLC) > -1
                || this.getApresentadorTrabalho(item).toLowerCase().indexOf(filtroLC) > -1); 
            });
        }
    }

    mostrarFiltro() {
        let modal = this.modalCtrl.create(FiltroPage, { datas: this.datas, locais: this.locais, default: 'Todos' });
        modal.present();

        modal.onWillDismiss((data: any) => {
            if (data) {
                this.dataSelecionada = data.data;
                this.localSelecinado = data.local;
                this.filtrarProgramacao();
            }
        });
    }

    filtrarProgramacao() {
        this.listaTrabalhos = this.listaTrabalhosBkp;
        if (this.dataSelecionada != 'Todos') {
            this.listaTrabalhos = this.listaTrabalhos.filter((item) => {
                return (this.getDataTrabalho(item).toLowerCase().indexOf(this.dataSelecionada.toLowerCase()) > -1);
            });
        }
        if (this.localSelecinado != 'Todos') {
            this.listaTrabalhos = this.listaTrabalhos.filter((item) => {
                return (this.getPredioTrabalho(item).toLowerCase().indexOf(this.localSelecinado.toLowerCase()) > -1);
            });
        }
    }

    paginaModulos(agrupador: any) {
        this.navCtrl.push(ModulosPage, {agrupador: agrupador, datas: this.datas});    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProgramacaoPage');
    }

    ionViewWillLeave() {
        this.data.paramData = this.listaFavoritos;
    }

    ionViewDidEnter() {
        for (let fav of this.listaFavoritos) {
            for (let trab of this.listaTrabalhos) {
                if (fav.trabalho.id == trab.trabalho.id) {
                    trab.favorito = true;
                } else trab.favorito = false;
            }
        }
    }
}
