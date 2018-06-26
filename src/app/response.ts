import {CoreDB} from './coredb';
import {Query} from './query';

export class Response {
  get db(): CoreDB[] {
    return this._db;
  }

  set db(value: CoreDB[]) {
    this._db = value;
  }

  get query(): Query[] {
    return this._query;
  }

  set query(value: Query[]) {
    this._query = value;
  }
  constructor(db: CoreDB[], query: Query[]) {
    this._db = db;
    this._query = query;
  }
  private _db: CoreDB[];
  private _query: Query[];
}
