import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ModulosTrabalhosPage } from './../modulos-trabalhos/modulos-trabalhos';

@Component({
    selector: 'page-modulos',
    templateUrl: 'modulos.html',
})
export class ModulosPage {
    agrupador: any;
    listaModulos: any[];
    dataSelect: any;
    moduloSelect: any;
    datas_mods_get: any;
    datas_mods: any[];

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        private datepipe: DatePipe, public http: HttpClient) {
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;

        for (let modulo of this.agrupador.modulos) {
            this.listaModulos.push(modulo);
        }

        this.listaModulos.sort(function(a, b) {
            var a_ = a.nome;
            var b_ = b.nome;
            return (a_ < b_) ? -1 : (a_ > b_) ? 1 : 0;
        });

        this.getDatasModulos();
    }

    getDatasModulos() {
        // aqui não precisa de loader pois pega os dados de um arquivo; é rápido o suficiente
        this.datas_mods = [];
        this.datas_mods_get = this.http.get('./assets/data/datas_modulos.json');
        this.datas_mods_get.subscribe(info => {
            for (let datas_mod of info.datas_modulos) {
                this.datas_mods.push(datas_mod);
            }
        }, error => {
            // improvável dar erro aqui, mas em todo caso...
            console.log("ERRO: ocorreu um problema com o GET de datas_modulos.json"); 
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulosPage');
    }

    toggleSection(i) {
        this.listaModulos[i].open = !this.listaModulos[i].open; 
    }

    paginaModulosTrabalhos(i, data) {
        this.moduloSelect = this.listaModulos[i];
        this.dataSelect = data;
        this.navCtrl.push(ModulosTrabalhosPage, {moduloSelect: this.moduloSelect, dataSelect: this.dataSelect});
    }
    
    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }
}
