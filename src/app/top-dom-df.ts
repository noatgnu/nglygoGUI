export class TopDomDF {
  constructor(start: number, end: number, type: string) {
    this._start = start;
    this._end = end;
    this._type = type;
  }
  get start(): number {
    return this._start;
  }

  set start(value: number) {
    this._start = value;
  }

  get end(): number {
    return this._end;
  }

  set end(value: number) {
    this._end = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
  private _start: number;
  private _end: number;
  private _type: string;

}
