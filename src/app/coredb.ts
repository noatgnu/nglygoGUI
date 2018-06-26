export class CoreDB {
  get dbName(): string {
    return this._dbName;
  }

  set dbName(value: string) {
    this._dbName = value;
  }

  get results(): string[] {
    return this._results;
  }

  set results(value: string[]) {
    this._results = value;
  }
  constructor(dbName: string, results: string[]) {
    this._dbName = dbName;
    this._results = results;
  }
  private _dbName: string;
  private _results: string[];
}
