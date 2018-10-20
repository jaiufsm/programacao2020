webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__programacao_programacao__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__links_links__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__programacao_programacao__["a" /* ProgramacaoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__["a" /* FavoritosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__links_links__["a" /* LinksPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__["a" /* ModulosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Programação" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Links" tabIcon="link"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProgramacaoPage = /** @class */ (function () {
    function ProgramacaoPage(navCtrl, http, data, navParams, loadingCtrl, alertCtrl, datepipe) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = data;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.datepipe = datepipe;
        this.segmentData = "Modulos";
        this.listaDatas = [];
        this.listaPalestrasFavs = this.data.paramData2;
        this.listaEventosFavs = this.data.paramData3;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        //this.displayError(loader);
        this.getAgrupadores(loader);
        this.getPalestras();
        this.getEventos();
    }
    ProgramacaoPage.prototype.getAgrupadores = function (loader) {
        var _this = this;
        this.listaAgrupadores = [];
        this.listaModulosID = [];
        loader.present();
        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');
        //this.agrupadores = this.http.get('https://portal.ufsm.br/jai/avaliacaoRest/findModulos.json',  {headers: headers});
        this.agrupadores.subscribe(function (info) {
            for (var _i = 0, _a = info.modulos.agrupadores; _i < _a.length; _i++) {
                var agrupador = _a[_i];
                //for (let agrupador of info.agrupadores) {
                for (var _b = 0, _c = agrupador.modulos; _b < _c.length; _b++) {
                    var modulo = _c[_b];
                    _this.listaModulosID.push(modulo.id);
                }
                _this.listaAgrupadores.push(agrupador);
            }
            if (_this.listaAgrupadores.length > 0) {
                loader.dismiss().catch(function () { });
            }
        }, function (error) {
            console.log("ERRO: ocorreu um problema com o GET dos agrupadores");
            loader.dismiss().catch(function () { });
            _this.displayError(loader);
        });
    };
    ProgramacaoPage.prototype.getPalestras = function () {
        var _this = this;
        this.listaPalestras = [];
        this.palestras = this.http.get('./assets/data/palestras.json');
        this.palestras.subscribe(function (info) {
            for (var _i = 0, _a = info.palestras; _i < _a.length; _i++) {
                var palestra = _a[_i];
                _this.listaPalestras.push(palestra);
                _this.addData(palestra.data.slice(0, 10));
            }
        });
    };
    ProgramacaoPage.prototype.getEventos = function () {
        var _this = this;
        this.listaEventos = [];
        this.eventos = this.http.get('./assets/data/eventos.json');
        this.eventos.subscribe(function (info) {
            for (var _i = 0, _a = info.eventos; _i < _a.length; _i++) {
                var evento = _a[_i];
                _this.listaEventos.push(evento);
            }
        });
    };
    ProgramacaoPage.prototype.favorito = function (obj, listaFavs, e) {
        e.stopPropagation();
        if (!obj.favorito) {
            obj.favorito = true;
            listaFavs.push(obj);
        }
        else {
            obj.favorito = false;
            var index = listaFavs.indexOf(obj, 0);
            if (index > -1)
                listaFavs.splice(index, 1);
        }
    };
    ProgramacaoPage.prototype.addData = function (data) {
        if (this.listaDatas.indexOf(data) === -1) {
            this.listaDatas.push(data);
        }
    };
    ProgramacaoPage.prototype.displayError = function (loader) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            subTitle: 'Verifique a sua conexão com a internet e pressione OK para recarregar a página.',
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        _this.getAgrupadores(loader);
                    }
                }
            ]
        });
        alert.present();
    };
    ProgramacaoPage.prototype.paginaModulos = function (agrupador) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modulos_modulos__["a" /* ModulosPage */], { agrupador: agrupador });
    };
    ProgramacaoPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ProgramacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramacaoPage');
    };
    ProgramacaoPage.prototype.ionViewWillLeave = function () {
        this.data.paramData2 = this.listaPalestrasFavs;
        this.data.paramData3 = this.listaEventosFavs;
    };
    ProgramacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programacao',template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/programacao/programacao.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title> JAI - Programação </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-segment [(ngModel)]="segmentData">\n            <ion-segment-button value="Modulos"> Trabalhos </ion-segment-button>\n            <ion-segment-button value="Palestras"> Palestras </ion-segment-button>\n            <ion-segment-button value="Eventos"> Eventos </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="segmentData">\n        <ion-list *ngSwitchCase="\'Modulos\'">\n            <button ion-item *ngFor="let agrupador of listaAgrupadores" (click)="paginaModulos(agrupador)">\n                {{ agrupador.nome  }}\n            </button>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Palestras\'">\n            <ion-item-group *ngFor="let data of listaDatas">\n                <ion-item-divider color="light">{{dataFormatada(data)}}</ion-item-divider>\n                <ng-container *ngFor="let palestra of listaPalestras">\n                    <ion-card ion-item *ngIf="palestra.data.slice(0,10) == data">\n                        <ion-card-content>\n                            <h2 text-wrap> {{ palestra.nome }} </h2>\n                            <p text-wrap> &mdash; {{ palestra.apresentador }} </p>\n                            <p text-wrap>Área: {{ palestra.area }} </p>\n                            <p text-wrap>Horário: {{ palestra.data.slice(11,16) }} </p>\n                            <p text-wrap>Predio: {{ palestra.predio }} </p>\n                            <p text-wrap>Sala: {{ palestra.sala }} </p>\n                        </ion-card-content>\n                        <button ion-button clear icon-only item-end (click)="favorito(palestra, listaPalestrasFavs, $event)">\n                            <ion-icon color="danger" [name]="palestra.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                        </button>\n                    </ion-card>\n                </ng-container>\n            </ion-item-group>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Eventos\'">\n            <ng-container *ngFor="let evento of listaEventos">\n                <ion-card ion-item>\n                    <ion-card-content>\n                        <h2 text-wrap> {{ evento.nome }} </h2>\n                        <p>\n                            <ion-icon name="link"></ion-icon>\n                            <a target="_blank" href="{{ evento.link }}"> Clique aqui para saber mais </a>\n                        </p>\n                    </ion-card-content>\n                    <button ion-button clear icon-only item-end (click)="favorito(evento, listaEventosFavs, $event)">\n                        <ion-icon color="danger" [name]="evento.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                    </button>\n                </ion-card>\n            </ng-container>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/programacao/programacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]])
    ], ProgramacaoPage);
    return ProgramacaoPage;
}());

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosTrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModulosTrabalhosPage = /** @class */ (function () {
    function ModulosTrabalhosPage(navCtrl, navParams, http, data, datepipe, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = data;
        this.datepipe = datepipe;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.listaFavoritos = this.data.paramData;
        this.dataSelect = this.navParams.data.dataSelect;
        this.moduloSelect = this.navParams.data.moduloSelect;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
        });
        var url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" +
            this.dataSelect + "&modulo=" + this.moduloSelect.id;
        //this.displayError(loader, url);
        this.getTrabalhosModulo(url, loader);
    }
    ModulosTrabalhosPage.prototype.getTrabalhosModulo = function (url, loader) {
        var _this = this;
        this.horasInicio = [];
        this.listaTrabalhosBkp = [];
        this.listaTrabalhosModulo = [];
        loader.present();
        this.trabalhosModulo = this.http.get(url);
        this.trabalhosModulo.subscribe(function (info) {
            for (var _i = 0, _a = info.trabalhos; _i < _a.length; _i++) {
                var trabalho = _a[_i];
                _this.setaFavoritos(trabalho);
                _this.listaTrabalhosModulo.push(trabalho);
                _this.addHora(trabalho);
            }
            _this.listaTrabalhosBkp = _this.listaTrabalhosModulo;
            if (_this.listaTrabalhosModulo.length > 0) {
                loader.dismiss().catch(function () { });
            }
            _this.horasInicio.sort(function (a, b) {
                var a_ = +a.slice(0, 2);
                var b_ = +b.slice(0, 2);
                return +a_ - +b_;
            });
            _this.segmentData = _this.horasInicio[0];
        }, function (error) {
            console.log("ERRO: ocorreu um problema com o GET");
            loader.dismiss().catch(function () { });
            _this.displayError(loader, url);
        });
    };
    ModulosTrabalhosPage.prototype.displayError = function (loader, url) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            subTitle: 'Verifique a sua conexão com a internet e pressione OK para recarregar a página.',
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        _this.getTrabalhosModulo(url, loader);
                    }
                }
            ]
        });
        alert.present();
    };
    ModulosTrabalhosPage.prototype.putSegment = function (hora) {
        this.segmentData = hora;
    };
    ModulosTrabalhosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosTrabalhosPage.prototype.getHoraInicioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(11, 16);
    };
    ModulosTrabalhosPage.prototype.addHora = function (trab) {
        var novaHora = this.getHoraInicioTrabalho(trab);
        if (this.horasInicio.indexOf(novaHora) === -1) {
            this.horasInicio.push(novaHora);
        }
    };
    ModulosTrabalhosPage.prototype.getTituloTrabalho = function (trab) {
        return trab.trabalho.titulo;
    };
    ModulosTrabalhosPage.prototype.getApresentadorTrabalho = function (trab) {
        return trab.trabalho.apresentador;
    };
    ModulosTrabalhosPage.prototype.getPredioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.predio;
    };
    ModulosTrabalhosPage.prototype.getSalaTrabalho = function (trab) {
        return trab.trabalho.apresentacao.sala;
    };
    ModulosTrabalhosPage.prototype.getDataTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(0, 10);
    };
    ModulosTrabalhosPage.prototype.setaFavoritos = function (trab) {
        for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
            var favorito = _a[_i];
            if (favorito.trabalho.id == trab.trabalho.id) {
                trab.favorito = true;
                return;
            }
        }
        trab.favorito = false;
    };
    ModulosTrabalhosPage.prototype.favorito = function (trab, e) {
        e.stopPropagation();
        if (!trab.favorito) {
            trab.favorito = true;
            this.listaFavoritos.push(trab);
        }
        else {
            trab.favorito = false;
            var index = -1;
            for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
                var favorito = _a[_i];
                if (favorito.trabalho.id == trab.trabalho.id) {
                    index = this.listaFavoritos.indexOf(favorito, 0);
                }
            }
            if (index > -1)
                this.listaFavoritos.splice(index, 1);
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
    };
    ModulosTrabalhosPage.prototype.getTrabalhos = function (e) {
        var _this = this;
        this.listaTrabalhosModulo = this.listaTrabalhosBkp;
        var filtro = e.target.value;
        if (filtro && filtro.trim() != '') {
            var filtroLC_1 = filtro.toLowerCase();
            this.listaTrabalhosModulo = this.listaTrabalhosModulo.filter(function (item) {
                return (_this.getTituloTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getPredioTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getSalaTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getApresentadorTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1);
            });
        }
    };
    ModulosTrabalhosPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaFavoritos;
    };
    ModulosTrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosTrabalhosPage');
    };
    ModulosTrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos-trabalhos',template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/modulos-trabalhos/modulos-trabalhos.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{ dataFormatada(dataSelect) }} - {{ moduloSelect.nome  }}</ion-title>\n        <ion-toolbar>\n            <ion-row>\n                <ion-col>\n                    <ion-searchbar placeholder="Pesquisar trabalhos..." (ionInput)="getTrabalhos($event)"></ion-searchbar>\n                </ion-col>\n            </ion-row>\n        </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-segment *ngIf="horasInicio" [(ngModel)]="segmentData">\n            <ion-segment-button *ngFor="let hora of horasInicio" value="{{ hora }}" (click)="putSegment(hora)">\n                {{ hora }}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="segmentData">\n        <ng-container *ngFor="let hora of horasInicio">\n            <ion-list *ngSwitchCase="hora">\n                <ng-container *ngFor="let trab of listaTrabalhosModulo">\n                    <ion-card ion-item *ngIf="getHoraInicioTrabalho(trab) == hora">\n                        <ion-card-content>\n                            <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n                            <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n                            <p text-wrap> Horário: {{ getHoraInicioTrabalho(trab) }} </p>\n                            <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n                            <p text-wrap> Sala/Painel: {{ getSalaTrabalho(trab) }} </p>\n                        </ion-card-content>\n                        <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n                            <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                        </button>\n                    </ion-card>\n                </ng-container>\n            </ion-list>\n        </ng-container>\n    </div>\n</ion-content>\n\n<!-- Usando virtualScroll (não pode ficar dentro de ngIf!); mais limitado":\n    <ion-content padding>\n    <div style="height:100%">\n    <ion-list [virtualScroll]="listaTrabalhosModulo">\n    <ion-card ion-item *virtualItem="let trab">\n    <ion-card-content>\n    <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n    <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n    <p text-wrap> Horário: {{ getHoraInicioTrabalho(trab) }} </p>\n    <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n    <p text-wrap> Sala/Painel: {{ getSalaTrabalho(trab) }} </p>\n    </ion-card-content>\n    <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n    <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n    </button>\n    </ion-card>\n    </ion-list>\n    </div>\n    </ion-content>\n-->\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/modulos-trabalhos/modulos-trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModulosTrabalhosPage);
    return ModulosTrabalhosPage;
}());

//# sourceMappingURL=modulos-trabalhos.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinksPage = /** @class */ (function () {
    function LinksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LinksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-links',template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/links/links.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            JAI - Links\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-list>\n            <ion-card-content>\n                <ion-icon name="link"></ion-icon>\n                <a href="https://www.ufsm.br/">Site da UFSM</a>\n            </ion-card-content>\n             <ion-card-content>\n                <ion-icon name="link"></ion-icon>\n                <a href="http://w3.ufsm.br/jai/">Página da JAI</a>\n            </ion-card-content>\n\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/links/links.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LinksPage);
    return LinksPage;
}());

//# sourceMappingURL=links.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(navCtrl, data, datepipe) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.datepipe = datepipe;
        this.listaTrabalhosFavs = this.data.paramData;
        this.listaPalestrasFavs = this.data.paramData2;
        this.listaEventosFavs = this.data.paramData3;
        this.segmentData = "Trabalhos";
    }
    FavoritosPage.prototype.removeFavorito = function (fav, listaFavs, e) {
        e.stopPropagation();
        fav.favorito = false;
        //const index = this.listaFavoritos.indexOf(fav, 0);
        //if (index > -1) this.listaFavoritos.splice(index, 1);
        var index = listaFavs.indexOf(fav, 0);
        if (index > -1)
            listaFavs.splice(index, 1);
    };
    FavoritosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    FavoritosPage.prototype.getDataFav = function (fav) {
        return fav.trabalho.apresentacao.data.slice(0, 10);
    };
    FavoritosPage.prototype.getHoraInicioFav = function (fav) {
        return fav.trabalho.apresentacao.data.slice(11, 16);
    };
    FavoritosPage.prototype.getPredioFav = function (fav) {
        return fav.trabalho.apresentacao.predio;
    };
    FavoritosPage.prototype.getSalaFav = function (fav) {
        return fav.trabalho.apresentacao.sala;
    };
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    FavoritosPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaTrabalhosFavs;
        this.data.paramData2 = this.listaPalestrasFavs;
        this.data.paramData3 = this.listaEventosFavs;
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/favoritos/favoritos.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            JAI - Favoritos\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-segment [(ngModel)]="segmentData">\n            <ion-segment-button value="Trabalhos"> Trabalhos </ion-segment-button>\n            <ion-segment-button value="Palestras"> Palestras </ion-segment-button>\n            <ion-segment-button value="Eventos"> Eventos </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="segmentData">\n        <ion-list *ngSwitchCase="\'Trabalhos\'">\n            <div *ngIf="listaTrabalhosFavs?.length > 0; else empty">\n                <ion-card ion-item *ngFor="let fav of listaTrabalhosFavs">\n                    <ion-card-content>\n                        <h2 text-wrap> {{ fav.trabalho.titulo }} </h2>\n                        <p text-wrap> &mdash; {{ fav.trabalho.apresentador }} </p>\n                        <p> Data: {{ dataFormatada(getDataFav(fav)) }} </p>\n                        <p> Horário: {{ getHoraInicioFav(fav) }} </p>\n                        <p> Local: {{ getPredioFav(fav) }} </p>\n                        <p> Sala/Painel: {{ getSalaFav(fav) }} </p>\n                    </ion-card-content>\n                    <button ion-button clear icon-only item-end (click)="removeFavorito(fav, listaTrabalhosFavs, $event)">\n                        <ion-icon color="danger" name="trash"></ion-icon>\n                    </button>\n                </ion-card>\n            </div>\n            <ng-template #empty>\n                <ion-card>\n                    <ion-card-content>\n                        Nenhum favorito encontrado.\n                    </ion-card-content>\n                </ion-card>\n            </ng-template>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Palestras\'">\n            <div *ngIf="listaPalestrasFavs?.length > 0; else empty">\n                <ion-card ion-item *ngFor="let fav of listaPalestrasFavs">\n                    <ion-card-content>\n                        <h2 text-wrap> {{ fav.nome }} </h2>\n                        <p text-wrap> &mdash; {{ fav.apresentador }} </p>\n                        <p text-wrap> Área: {{ fav.area }} </p>\n                        <p> Data: {{ dataFormatada(fav.data.slice(0,10)) }}</p>\n                        <p> Horário: {{ fav.data.slice(11,16) }} </p>\n                        <p> Prédio: {{ fav.predio }} </p>\n                        <p> Sala: {{ fav.sala }} </p>\n                    </ion-card-content>\n                    <button ion-button clear icon-only item-end (click)="removeFavorito(fav, listaPalestrasFavs, $event)">\n                        <ion-icon color="danger" name="trash"></ion-icon>\n                    </button>\n                </ion-card>\n            </div>\n            <ng-template #empty>\n                <ion-card>\n                    <ion-card-content>\n                        Nenhum favorito encontrado.\n                    </ion-card-content>\n                </ion-card>\n            </ng-template>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Eventos\'">\n            <div *ngIf="listaEventosFavs?.length > 0; else empty">\n                <ion-card ion-item *ngFor="let fav of listaEventosFavs">\n                    <ion-card-content>\n                        <h2 text-wrap> {{ fav.nome }} </h2>\n                        <p text-wrap> {{ fav.apresentador }} </p>\n                        <p>\n                            <ion-icon name="link"></ion-icon>\n                            <a target="_blank" href="{{ fav.link }}"> Clique aqui para saber mais </a>\n                        </p>\n                    </ion-card-content>\n                    <button ion-button clear icon-only item-end (click)="removeFavorito(fav, listaEventosFavs, $event)">\n                        <ion-icon color="danger" name="trash"></ion-icon>\n                    </button>\n                </ion-card>\n            </div>\n            <ng-template #empty>\n                <ion-card>\n                    <ion-card-content>\n                        Nenhum favorito encontrado.\n                    </ion-card-content>\n                </ion-card>\n            </ng-template>\n        </ion-list>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/favoritos/favoritos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_programacao_programacao__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_links_links__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favoritos_favoritos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modulos_modulos__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_data_data__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_links_links__["a" /* LinksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_links_links__["a" /* LinksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            providers: [
                //StatusBar,
                //SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_12__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Platform } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/probst/prog-jai2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
        this.paramData = [];
        this.paramData2 = [];
        this.paramData3 = [];
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModulosPage = /** @class */ (function () {
    function ModulosPage(navCtrl, navParams, datepipe, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datepipe = datepipe;
        this.http = http;
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;
        for (var _i = 0, _a = this.agrupador.modulos; _i < _a.length; _i++) {
            var modulo = _a[_i];
            this.listaModulos.push(modulo);
        }
        this.listaModulos.sort(function (a, b) {
            var a_ = a.nome;
            var b_ = b.nome;
            return (a_ < b_) ? -1 : (a_ > b_) ? 1 : 0;
        });
        this.getDatasModulos();
    }
    ModulosPage.prototype.getDatasModulos = function () {
        var _this = this;
        // Aqui não precisa de loader pois pega os dados de um arquivo; é rápido o suficiente
        this.datas_mods = [];
        this.datas_mods_get = this.http.get('./assets/data/datas_modulos.json');
        this.datas_mods_get.subscribe(function (info) {
            for (var _i = 0, _a = info.datas_modulos; _i < _a.length; _i++) {
                var datas_mod = _a[_i];
                _this.datas_mods.push(datas_mod);
            }
        }, function (error) {
            // improvável dar erro aqui, mas em todo caso...
            console.log("ERRO: ocorreu um problema com o GET de datas_modulos.json");
        });
    };
    ModulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosPage');
    };
    ModulosPage.prototype.toggleSection = function (i) {
        this.listaModulos[i].open = !this.listaModulos[i].open;
    };
    ModulosPage.prototype.paginaModulosTrabalhos = function (i, data) {
        this.moduloSelect = this.listaModulos[i];
        this.dataSelect = data;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */], { moduloSelect: this.moduloSelect, dataSelect: this.dataSelect });
    };
    ModulosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"/home/probst/prog-jai2/src/pages/modulos/modulos.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Módulos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-list class="accordion-list">\n            <ion-list-header *ngFor="let modulo of listaModulos, let i = index" no-lines no-padding>\n                <button text-wrap ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': modulo.open, \'section\': !modulo.open}">\n                    <ion-icon item-left name="arrow-forward" *ngIf="!modulo.open"></ion-icon>\n                    <ion-icon item-left name="arrow-down" *ngIf="modulo.open"></ion-icon>\n                    {{ modulo.nome }}\n                </button>\n                <ion-list *ngIf="modulo.open" no-lines>\n                    <ng-container *ngFor="let data_mod of datas_mods">\n                        <ng-container *ngIf="data_mod.id == modulo.id">\n                            <ion-list-header *ngFor="let data of data_mod.datas; let j = index" no-padding>\n                                <button ion-item (click)="paginaModulosTrabalhos(i, data)" class="child" detail-none>\n                                    {{ dataFormatada(data) }}\n                                </button>\n                            </ion-list-header>\n                        </ng-container>\n                    </ng-container>\n                </ion-list>\n            </ion-list-header>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/probst/prog-jai2/src/pages/modulos/modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModulosPage);
    return ModulosPage;
}());

//# sourceMappingURL=modulos.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map