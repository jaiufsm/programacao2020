import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  public paramData: any[];
  public paramData2: any[];
  public paramData3: any[];
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
      this.paramData = [];
      this.paramData2 = [];
      this.paramData3 = [];
  }

}
