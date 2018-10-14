webpackJsonp([2],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modulos-trabalhos/modulos-trabalhos.module": [
		269,
		1
	],
	"../pages/modulos/modulos.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__programacao_programacao__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__links_links__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Programação" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Links" tabIcon="link"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filtro_filtro__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modulos_modulos__ = __webpack_require__(52);
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
    function ProgramacaoPage(navCtrl, http, datepipe, data, navParams, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.datepipe = datepipe;
        this.data = data;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        //this.edicaoCorrente = this.http.get('http://localhost:5000/jai/avaliacaoRest/findEdicao');
        this.listaTrabalhos = [];
        this.listaTrabalhosBkp = [];
        this.datas = [];
        this.datasCompletas = [];
        this.locais = [];
        this.listaFavoritos = this.data.paramData;
        this.segmentData = "Todos";
        this.listaAgrupadores = [];
        this.listaModulosID = [];
        this.trabalhos = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhos');
        //this.trabalhos = this.http.get('http://localhost:5000/jai/avaliacaoRest/findTrabalhos');
        this.trabalhos.subscribe(function (info) {
            for (var _i = 0, _a = info.trabalhos; _i < _a.length; _i++) {
                var trabalho = _a[_i];
                trabalho.trabalho.favorito = false;
                //this.setaFavoritos(trabalho);
                _this.listaTrabalhos.push(trabalho);
                var data = trabalho.trabalho.apresentacao.data;
                _this.datasCompletas.push(data);
                if (!_this.datas.includes(data.slice(0, 10)))
                    _this.datas.push(data.slice(0, 10));
                if (!_this.locais.includes(_this.getPredioTrabalho(trabalho)))
                    _this.locais.push(_this.getPredioTrabalho(trabalho));
            }
            _this.listaTrabalhosBkp = _this.listaTrabalhos;
        });
        //this.agrupadores = this.http.get('http://localhost:5000/jai/avaliacaoRest/findModulos');
        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');
        this.agrupadores.subscribe(function (info) {
            for (var _i = 0, _a = info.modulos.agrupadores; _i < _a.length; _i++) {
                var agrupador = _a[_i];
                for (var _b = 0, _c = agrupador.modulos; _b < _c.length; _b++) {
                    var modulo = _c[_b];
                    _this.listaModulosID.push(modulo.id);
                }
                //console.log(modulo.modulos);
                _this.listaAgrupadores.push(agrupador);
                //this.listaModulosID.push(modulo.)
            }
        });
        this.dataSelecionada = 'Todos';
        this.localSelecinado = 'Todos';
    }
    ProgramacaoPage.prototype.putSegment = function (data) {
        this.segmentData = data;
    };
    ProgramacaoPage.prototype.getDataDia = function (data) {
        return data.slice(0, 10);
    };
    ProgramacaoPage.prototype.getDataHora = function (data) {
        return data.slice(11, 16);
    };
    ProgramacaoPage.prototype.getHorasIniciais = function (data) {
        var _this = this;
        var horasIniciais = [];
        this.datasCompletas.forEach(function (e) {
            if (horasIniciais.indexOf(_this.getDataHora(e) == -1) && _this.getDataDia(e) === data)
                horasIniciais.push(_this.getDataHora(e));
        });
        return horasIniciais;
    };
    ProgramacaoPage.prototype.getTituloTrabalho = function (trab) {
        return trab.trabalho.titulo;
    };
    ProgramacaoPage.prototype.getApresentadorTrabalho = function (trab) {
        return trab.trabalho.apresentador;
    };
    ProgramacaoPage.prototype.getDataTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(0, 10);
    };
    ProgramacaoPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ProgramacaoPage.prototype.getHoraInicioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(11, 16);
    };
    ProgramacaoPage.prototype.getPredioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.predio;
    };
    ProgramacaoPage.prototype.getSalaTrabalho = function (trab) {
        return trab.trabalho.apresentacao.sala;
    };
    ProgramacaoPage.prototype.favorito = function (trab, e) {
        e.stopPropagation();
        if (!trab.favorito) {
            trab.favorito = true;
            this.listaFavoritos.push(trab);
        }
        else {
            var flag = true;
            trab.favorito = false;
            var index = void 0;
            if (flag) {
                index = this.listaFavoritos.indexOf(trab, 0);
                if (index == -1)
                    flag = false;
            }
            if (!flag) {
                for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
                    var favorito = _a[_i];
                    if (favorito.trabalho.id == trab.trabalho.id) {
                        index = this.listaFavoritos.indexOf(favorito, 0);
                        break;
                    }
                }
            }
            if (index > -1)
                this.listaFavoritos.splice(index, 1);
        }
    };
    ProgramacaoPage.prototype.getTrabalhos = function (e) {
        var _this = this;
        this.listaTrabalhos = this.listaTrabalhosBkp;
        var filtro = e.target.value;
        if (filtro && filtro.trim() != '') {
            var filtroLC_1 = filtro.toLowerCase();
            this.listaTrabalhos = this.listaTrabalhos.filter(function (item) {
                return (_this.getTituloTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getDataTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getHoraInicioTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getPredioTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getSalaTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getApresentadorTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1);
            });
        }
    };
    ProgramacaoPage.prototype.mostrarFiltro = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filtro_filtro__["a" /* FiltroPage */], { datas: this.datas, locais: this.locais, default: 'Todos' });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.dataSelecionada = data.data;
                _this.localSelecinado = data.local;
                _this.filtrarProgramacao();
            }
        });
    };
    ProgramacaoPage.prototype.filtrarProgramacao = function () {
        var _this = this;
        this.listaTrabalhos = this.listaTrabalhosBkp;
        if (this.dataSelecionada != 'Todos') {
            this.listaTrabalhos = this.listaTrabalhos.filter(function (item) {
                return (_this.getDataTrabalho(item).toLowerCase().indexOf(_this.dataSelecionada.toLowerCase()) > -1);
            });
        }
        if (this.localSelecinado != 'Todos') {
            this.listaTrabalhos = this.listaTrabalhos.filter(function (item) {
                return (_this.getPredioTrabalho(item).toLowerCase().indexOf(_this.localSelecinado.toLowerCase()) > -1);
            });
        }
    };
    ProgramacaoPage.prototype.paginaModulos = function (agrupador) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modulos_modulos__["a" /* ModulosPage */], { agrupador: agrupador, datas: this.datas });
    };
    ProgramacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramacaoPage');
    };
    ProgramacaoPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaFavoritos;
    };
    ProgramacaoPage.prototype.ionViewDidEnter = function () {
        for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
            var fav = _a[_i];
            for (var _b = 0, _c = this.listaTrabalhos; _b < _c.length; _b++) {
                var trab = _c[_b];
                if (fav.trabalho.id == trab.trabalho.id) {
                    trab.favorito = true;
                }
                else
                    trab.favorito = false;
            }
        }
    };
    ProgramacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programacao',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/programacao/programacao.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title> JAI - Programação </ion-title>\n        <ion-toolbar>\n            <ion-row>\n                <ion-col>\n                    <ion-searchbar placeholder="Pesquisar trabalhos..." (ionInput)="getTrabalhos($event)"></ion-searchbar>\n                </ion-col>\n                <ion-col col-2>\n                    <button ion-button clear icon-only item-end color="light" (click)="mostrarFiltro()">\n                        <ion-icon name="funnel"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-segment *ngIf="datas" [(ngModel)]="segmentData">\n            <ion-segment-button value="Todos"> Todos </ion-segment-button>\n            <ion-segment-button value="Modulos"> Módulos </ion-segment-button>\n            <ion-segment-button *ngFor="let data of datas" value="{{ data }}" (click)="putSegment(data)">\n                {{ dataFormatada(data) }}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="segmentData">\n        <ion-list *ngSwitchCase="\'Todos\'">\n            <ion-item-group *ngFor="let data of datas">\n                <ion-item-divider color="light">{{ dataFormatada(data) }}</ion-item-divider>\n                <ng-container *ngFor="let trab of listaTrabalhos">\n                    <ion-card ion-item *ngIf="getDataTrabalho(trab) == data">\n                        <ion-card-content>\n                            <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n                            <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n                            <p> Horário: {{ getHoraInicioTrabalho(trab) }} </p>\n                            <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n                            <p text-wrap> Sala: {{ getSalaTrabalho(trab) }} </p>\n                        </ion-card-content>\n                        <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n                            <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                        </button>\n                    </ion-card>\n                </ng-container>\n            </ion-item-group>\n        </ion-list>\n        <ng-container *ngFor="let data of datas">\n            <ion-list *ngSwitchCase="data">\n                <ion-item-group *ngFor="let horaInicio of getHorasIniciais(data)">\n                    <ion-item-divider color="light"> {{ horaInicio }} </ion-item-divider>\n                    <ng-container *ngFor="let trab of listaTrabalhos">\n                        <ion-card ion-item *ngIf="getDataTrabalho(trab) == data && getHoraInicioTrabalho(trab) == horaInicio">\n                            <ion-card-content>\n                                <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n                                <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n                                <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n                                <p text-wrap> Sala: {{ getSalaTrabalho(trab) }} </p>\n                            </ion-card-content>\n                            <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n                                <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                            </button>\n                        </ion-card>\n                    </ng-container>\n                </ion-item-group>\n            </ion-list>\n        </ng-container>\n        <ion-list *ngSwitchCase="\'Modulos\'">\n            <button ion-item *ngFor="let agrupador of listaAgrupadores" (click)="paginaModulos(agrupador)">\n                {{ agrupador.nome  }}\n            </button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/programacao/programacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProgramacaoPage);
    return ProgramacaoPage;
}());

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltroPage = /** @class */ (function () {
    function FiltroPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datas = [];
        this.locais = [];
        this.datas = this.navParams.data.datas;
        this.locais = this.navParams.data.locais;
        this.dataSelecionada = this.navParams.data.default;
        this.localSelecionado = this.navParams.data.default;
        this.defaultSelecionado = this.navParams.data.default;
    }
    FiltroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltroPage');
    };
    FiltroPage.prototype.aplicarFiltros = function () {
        var levarInfo = { data: this.dataSelecionada, local: this.localSelecionado };
        this.dismiss(levarInfo);
    };
    FiltroPage.prototype.dismiss = function (info) {
        this.viewCtrl.dismiss(info);
    };
    FiltroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filtro',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/filtro/filtro.html"*/'<!--\n    Generated template for the FilterPage page.\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n    Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Filtrar programação\n        </ion-title>\n        <!--\n        <ion-buttons end>\n            <button ion-button (click)="aplicarFiltros()" strong>OK</button>\n        </ion-buttons>\n        -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n    <ion-list>\n        <ion-item>\n            <ion-label>Data</ion-label>\n            <ion-select interface="popover" [(ngModel)]="dataSelecionada">\n                <ion-option selected>{{ defaultSelecionado }}</ion-option>\n                <ion-option *ngFor="let data of datas">{{ data }}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Local</ion-label>\n            <ion-select interface="popover" [(ngModel)]="localSelecionado">\n                <ion-option selected>{{ defaultSelecionado }}</ion-option>\n                <ion-option *ngFor="let local of locais">{{ local }}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <ion-row center>\n        <ion-col text-center>\n            <button ion-button outline (click)="aplicarFiltros()">\n                OK\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/filtro/filtro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], FiltroPage);
    return FiltroPage;
}());

//# sourceMappingURL=filtro.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
            selector: 'page-links',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/links/links.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            JAI - Links\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-list>\n            <ion-card-content>\n                <ion-icon name="link"></ion-icon>\n                <a href="https://www.ufsm.br/">Site da UFSM</a>\n            </ion-card-content>\n             <ion-card-content>\n                <ion-icon name="link"></ion-icon>\n                <a href="http://w3.ufsm.br/jai/">Página da JAI</a>\n            </ion-card-content>\n\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/links/links.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LinksPage);
    return LinksPage;
}());

//# sourceMappingURL=links.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(47);
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
        this.listaFavoritos = this.data.paramData;
    }
    FavoritosPage.prototype.removeFavorito = function (fav, e) {
        e.stopPropagation();
        fav.favorito = false;
        var index = this.listaFavoritos.indexOf(fav, 0);
        if (index > -1)
            this.listaFavoritos.splice(index, 1);
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
        this.data.paramData = this.listaFavoritos;
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/favoritos/favoritos.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            JAI - Favoritos\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <div *ngIf="listaFavoritos?.length > 0; else empty">\n            <ion-card ion-item *ngFor="let fav of listaFavoritos">\n                <ion-card-content>\n                    <h3 text-wrap> {{ fav.trabalho.titulo }} </h3>\n                    <p text-wrap> &mdash; {{ fav.trabalho.apresentador }} </p>\n                    <p> Data: {{ dataFormatada(getDataFav(fav)) }},\n                        {{ getHoraInicioFav(fav) }}\n                    </p>\n                    <p text-wrap>Local: {{ getPredioFav(fav) }}</p>\n                    <p text-wrap>Sala: {{ getSalaFav(fav) }}</p>\n                </ion-card-content>\n                <button ion-button clear icon-only item-end (click)="removeFavorito(fav, $event)">\n                    <ion-icon color="danger" name="trash"></ion-icon>\n                </button>\n            </ion-card>\n        </div>\n        <ng-template #empty>\n            <ion-card>\n                <ion-card-content>\n                    Nenhum favorito encontrado.\n                </ion-card-content>\n            </ion-card>\n        </ng-template>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/favoritos/favoritos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_programacao_programacao__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_links_links__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favoritos_favoritos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modulos_modulos__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_data__ = __webpack_require__(47);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modulos-trabalhos/modulos-trabalhos.module#ModulosTrabalhosPageModule', name: 'ModulosTrabalhosPage', segment: 'modulos-trabalhos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modulos/modulos.module#ModulosPageModule', name: 'ModulosPage', segment: 'modulos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_links_links__["a" /* LinksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            providers: [
                //StatusBar,
                //SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_13__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
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


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
        this.paramData = [];
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(99);
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
    function ModulosPage(navCtrl, navParams, datepipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datepipe = datepipe;
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;
        this.datas = this.navParams.data.datas;
        for (var _i = 0, _a = this.agrupador.modulos; _i < _a.length; _i++) {
            var modulo = _a[_i];
            this.listaModulos.push(modulo);
        }
        console.log(this.datas);
    }
    ModulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosPage');
    };
    ModulosPage.prototype.toggleSection = function (i) {
        this.listaModulos[i].open = !this.listaModulos[i].open;
    };
    ModulosPage.prototype.paginaModulosTrabalhos = function (i, j) {
        this.moduloSelect = this.listaModulos[i];
        this.dataSelect = this.datas[j];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */], { moduloSelect: this.moduloSelect, dataSelect: this.dataSelect });
    };
    ModulosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/modulos/modulos.html"*/'<!--\n    Generated template for the ModulosPage page.\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n    Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Módulos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <ion-list class="accordion-list">\n            <ion-list-header *ngFor="let modulo of listaModulos, let i = index" no-lines no-padding>\n                <button text-wrap ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': modulo.open, \'section\': !modulo.open}">\n                    <ion-icon item-left name="arrow-forward" *ngIf="!modulo.open"></ion-icon>\n                    <ion-icon item-left name="arrow-down" *ngIf="modulo.open"></ion-icon>\n                    {{ modulo.nome }}\n                </button>\n                <ion-list *ngIf="modulo.open" no-lines>\n                    <ion-list-header *ngFor="let data of datas; let j = index" no-padding>\n                        <button ion-item (click)="paginaModulosTrabalhos(i, j)" class="child" detail-none>\n                        {{ dataFormatada(data) }}\n                        </button>\n                    </ion-list-header>\n                </ion-list>\n            </ion-list-header>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/modulos/modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], ModulosPage);
    return ModulosPage;
}());

//# sourceMappingURL=modulos.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosTrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(47);
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
    function ModulosTrabalhosPage(navCtrl, navParams, http, data, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = data;
        this.datepipe = datepipe;
        this.listaFavoritos = this.data.paramData;
        this.dataSelect = this.navParams.data.dataSelect;
        this.moduloSelect = this.navParams.data.moduloSelect;
        this.horasInicio = [];
        this.listaTrabalhosModulo = [];
        var url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" +
            this.dataSelect + "&modulo=" + this.moduloSelect.id;
        this.trabalhosModulo = this.http.get(url);
        this.trabalhosModulo.subscribe(function (info) {
            for (var _i = 0, _a = info.trabalhos; _i < _a.length; _i++) {
                var trabalho = _a[_i];
                _this.setaFavoritos(trabalho);
                _this.listaTrabalhosModulo.push(trabalho);
                _this.addHora(trabalho);
            }
        });
    }
    ModulosTrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosTrabalhosPage');
    };
    ModulosTrabalhosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosTrabalhosPage.prototype.getHoraInicioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(11, 16);
    };
    ModulosTrabalhosPage.prototype.addHora = function (trab) {
        this.horasInicio.push(this.getHoraInicioTrabalho(trab));
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
            var flag = true;
            trab.favorito = false;
            var index = void 0;
            if (flag) {
                index = this.listaFavoritos.indexOf(trab, 0);
                if (index == -1)
                    flag = false;
            }
            if (!flag) {
                for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
                    var favorito = _a[_i];
                    if (favorito.trabalho.id == trab.trabalho.id) {
                        break;
                    }
                }
            }
            if (index > -1)
                this.listaFavoritos.splice(index, 1);
        }
    };
    ModulosTrabalhosPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaFavoritos;
    };
    ModulosTrabalhosPage.prototype.ionViewDidEnter = function () {
        for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
            var fav = _a[_i];
            for (var _b = 0, _c = this.listaTrabalhosModulo; _b < _c.length; _b++) {
                var trab = _c[_b];
                if (!(fav.trabalho.id == trab.trabalho.id)) {
                    trab.favorito = false;
                }
            }
        }
    };
    ModulosTrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos-trabalhos',template:/*ion-inline-start:"/home/andrea/Downloads/ionic-prog-jai/src/pages/modulos-trabalhos/modulos-trabalhos.html"*/'<!--\n    Generated template for the ModulosTrabalhosPage page.\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n    Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{ moduloSelect.nome  }} - {{ dataFormatada(dataSelect) }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="listaTrabalhosModulo.length > 0;then ok else empty"></div>\n    <ng-template #ok>\n        <ion-list>\n            <ion-item-group *ngFor="let hora of horasInicio">\n                <ion-item-divider color="light">{{ hora }}</ion-item-divider>\n                <ng-container *ngFor="let trab of listaTrabalhosModulo">\n                    <ion-card ion-item *ngIf="getHoraInicioTrabalho(trab) == hora">\n                        <ion-card-content>\n                            <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n                            <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n                            <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n                            <p text-wrap> Sala: {{ getSalaTrabalho(trab) }} </p>\n                        </ion-card-content>\n                        <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n                            <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n                        </button>\n                    </ion-card>\n                </ng-container>\n            </ion-item-group>\n        </ion-list>\n    </ng-template>\n    <ng-template #empty>\n        <ion-card>\n            <ion-card-content>\n                <p>Nenhum trabalho deste módulo encontrado para o dia selecionado.</p>\n            </ion-card-content>\n        </ion-card>\n    </ng-template>\n</ion-content>\n'/*ion-inline-end:"/home/andrea/Downloads/ionic-prog-jai/src/pages/modulos-trabalhos/modulos-trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], ModulosTrabalhosPage);
    return ModulosTrabalhosPage;
}());

//# sourceMappingURL=modulos-trabalhos.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map