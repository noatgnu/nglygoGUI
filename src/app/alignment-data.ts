export class AlignmentData {
  constructor(seqid: number, aa: string, pos: number, value: number, yCoord: number, extra: Map<string, string>) {
    this._seqid = seqid;
    this._aa = aa;
    this._pos = pos;
    this._value = value;
    this._yCoord = yCoord;
    this._extra = extra;
  }
  get extra(): Map<string, string> {
    return this._extra;
  }

  set extra(value: Map<string, string>) {
    this._extra = value;
  }

  get yCoord(): number {
    return this._yCoord;
  }

  set yCoord(value: number) {
    this._yCoord = value;
  }

  get seqid(): number {
    return this._seqid;
  }

  set seqid(value: number) {
    this._seqid = value;
  }

  get aa(): string {
    return this._aa;
  }

  set aa(value: string) {
    this._aa = value;
  }

  get pos(): number {
    return this._pos;
  }

  set pos(value: number) {
    this._pos = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
  private _seqid: number;
  private _aa: string;
  private _pos: number;
  private _value: number;
  private _yCoord: number;
  private _extra: Map<string, string>;
}
