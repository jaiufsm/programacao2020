import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-filtro',
    templateUrl: 'filtro.html',
})
export class FiltroPage {
    datas: Array<string> = [];
    locais: Array<string> = [];
    dataSelecionada: string;
    localSelecionado: string;
    defaultSelecionado;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.datas = this.navParams.data.datas;
        this.locais = this.navParams.data.locais;
        this.dataSelecionada = this.navParams.data.default;
        this.localSelecionado = this.navParams.data.default;
        this.defaultSelecionado = this.navParams.data.default;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FiltroPage');
    }

    aplicarFiltros() {
        let levarInfo = {data: this.dataSelecionada, local: this.localSelecionado};
        this.dismiss(levarInfo);
    }

    dismiss(info?: any) {
        this.viewCtrl.dismiss(info);
    }

}
