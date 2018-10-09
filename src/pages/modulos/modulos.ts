import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modulos',
    templateUrl: 'modulos.html',
})
export class ModulosPage {
    agrupador: any;
    listaModulos: any[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;
        for (let modulo of this.agrupador.modulos) {
            this.listaModulos.push(modulo);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulosPage');
    }

}
