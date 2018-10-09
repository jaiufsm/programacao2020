import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
        this.dataSelect = this.navParams.data.dataSelect;
        this.moduloSelect = this.navParams.data.moduloSelect;
        this.listaTrabalhosModulo = [];
        const url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" + 
                    this.dataSelect + "&modulo=" + this.moduloSelect.id;
        this.trabalhosModulo = this.http.get(url);
        console.log(url); 
        this.trabalhosModulo.subscribe(info => {
            for (let trabalho of info.trabalhos) {
                this.listaTrabalhosModulo.push(trabalho);
                console.log(trabalho);
            }
        });
        console.log(this.listaTrabalhosModulo);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModulosTrabalhosPage');
    }

}
