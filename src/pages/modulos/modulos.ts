import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { ModulosTrabalhosPage } from './../modulos-trabalhos/modulos-trabalhos';

@IonicPage()
@Component({
    selector: 'page-modulos',
    templateUrl: 'modulos.html',
})
export class ModulosPage {
    agrupador: any;
    datas: any[];
    listaModulos: any[];
    dataSelect: any;
    moduloSelect: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private datepipe: DatePipe) {
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;
        this.datas = this.navParams.data.datas;
        for (let modulo of this.agrupador.modulos) {
            this.listaModulos.push(modulo);
        }
        console.log(this.datas);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulosPage');
    }

    toggleSection(i) {
        this.listaModulos[i].open = !this.listaModulos[i].open; 
    }

    paginaModulosTrabalhos(i, j) {
        this.moduloSelect = this.listaModulos[i];
        this.dataSelect = this.datas[j];
        this.navCtrl.push(ModulosTrabalhosPage, {moduloSelect: this.moduloSelect, dataSelect: this.dataSelect});
    }
    
    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }
}
