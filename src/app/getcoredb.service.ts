import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from './response';
import {Subject} from 'rxjs/Subject';
import {CoreDB} from './coredb';
import {Query} from './query';

@Injectable()
export class GetCoreDBService {
  private _coreDBSource = new Subject<CoreDB[]>();
  coreDBO = this._coreDBSource.asObservable();

  private _querySource = new Subject<Query[]>();
  queryO = this._querySource.asObservable();

  private _queryDisplaySource = new Subject<Query[]>();
  queryDO = this._queryDisplaySource.asObservable();

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  private _url = window.location.protocol + '//' + window.location.hostname + ':8080/';
  constructor(private http: HttpClient) { }

  GetDBList() {
    return this.http.get<Response>(this.url + 'db/');
  }

  GetDB(dbName: string) {
    return this.http.get<Response>(this.url + 'db/' + dbName);
  }

  GetQuery(dbName: string, queryID: string) {
    return this.http.get<Response>(this.url + 'query/' + dbName + '/' + queryID);
  }

  UpdateCoreDB(coreDBlist: CoreDB[]) {
    this._coreDBSource.next(coreDBlist);
  }

  UpdateQueryList(queryList: Query[]) {
    this._querySource.next(queryList);
  }

  UpdateQueryDisplayList(queryDisplayList: Query[]) {
    this._queryDisplaySource.next(queryDisplayList);
  }
}
