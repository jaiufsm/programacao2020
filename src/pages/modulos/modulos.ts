import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
