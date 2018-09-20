import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'page-favoritos',
    templateUrl: 'favoritos.html'
})
export class FavoritosPage {
    public listaFavoritos: any;
    constructor(public navCtrl: NavController, public data: DataProvider, public datepipe: DatePipe) {
        this.listaFavoritos = this.data.paramData;
    }
    
    removeFavorito(fav: any, e: Event) {
        e.stopPropagation();
        fav.favorito = false;
        const index = this.listaFavoritos.indexOf(fav, 0);
        if (index > -1) this.listaFavoritos.splice(index, 1);
    }

    dataFormatada(data) {
        return this.datepipe.transform(data, 'dd/MM');
    }

    getDataFav(fav) {
        return fav.trabalho.apresentacao.data.slice(0,10);
    }

    getHoraInicioFav(fav) {
        return fav.trabalho.apresentacao.data.slice(11, 16);
    }

    getPredioFav(fav) {
        return fav.trabalho.apresentacao.predio;
    }

    getSalaFav(fav) {
        return fav.trabalho.apresentacao.sala;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FavoritosPage');
    }

    ionViewWillLeave() {
        this.data.paramData = this.listaFavoritos;
    }
}
