import { Injectable } from '@angular/core';

/*
  Generated class for the ApiJaiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiJaiProvider {

  private url = 'https://script.google.com/macros/s/AKfycbyk7ohDB0YxOmRIxWL3msAARpwaL2bJ4F3YFzLzmB_5ybO3Pc1X/exec';
  private trabalhos = null;
  
  constructor() {
    console.log('Hello ApiJaiProvider Provider');
  }

  private getTrabalhosApi() {
    const params = new URLSearchParams();
    params.append('type', 'getTrabalhos');
    const trabalhosPromise = new Promise((resolve, reject) => {
      fetch(this.url, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          if (jsonResponse.success) {
            resolve(jsonResponse.values);
          } else {
            reject();
          }
        }, err => {
          reject(err);
        })
      }, err => {
        reject(err);
      });
    });
    return trabalhosPromise;
  }

  private filterTrabalhos(dia, modulo) {
    return this.trabalhos.filter(trabalho => {
      return trabalho[12].split(' - ')[1] === modulo && trabalho[7] == dia;
    });
  }

  public getTrabalhos(dia, modulo) {
    console.log('getTrabalhos');
    console.log(this.trabalhos);
    const promise = new Promise((resolve, reject) => {
      if(this.trabalhos != null) {
        resolve(this.filterTrabalhos(dia, modulo));
      } else {
        this.getTrabalhosApi().then(trabalhos => {
          this.trabalhos = trabalhos;
          resolve(this.filterTrabalhos(dia, modulo));
        }).catch(err => {
          reject(err);
        });
      }
    });
    return promise;
    
  }

  public getModulos() {
    const params = new URLSearchParams();
    params.append('type', 'getModulos');
    const modulosPromise = new Promise((resolve, reject) => {
      fetch(this.url, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          if (jsonResponse.success) {
            resolve(jsonResponse.values);
          } else {
            reject();
          }
        }, err => {
          reject(err);
        })
      }, err => {
        reject(err);
      })
    });
    return modulosPromise;
  }

  public getPalestras(): Promise<any> {
    const params = new URLSearchParams();
    params.append('type', 'getPalestras');
    const palestrasPromise = new Promise((resolve, reject) => {
      fetch(this.url, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          if (jsonResponse.success) {
            resolve(jsonResponse.values);
          } else {
            reject();
          }
        }, err => {
          reject(err);
        })
      }, err => {
        reject(err);
      })
    });
    return palestrasPromise;
  }

  public getEventos(): Promise<any> {
    const params = new URLSearchParams();
    params.append('type', 'getEventos');
    const eventosPromise = new Promise((resolve, reject) => {
      fetch(this.url, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          if (jsonResponse.success) {
            resolve(jsonResponse.values);
          } else {
            reject();
          }
        }, err => {
          reject(err);
        })
      }, err => {
        reject(err);
      })
    });
    return eventosPromise;
  }

}
