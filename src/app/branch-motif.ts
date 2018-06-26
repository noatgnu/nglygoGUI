export class BranchMotif {
  constructor(origin: string, target: string, source: string, originStart: string, originEnd: string, originSeq: string, targetStart: string, targetEnd: string, targetSeq: string, status: string) {
    this._origin = origin;
    this._target = target;
    this._source = source;
    this._originStart = originStart;
    this._originEnd = originEnd;
    this._originSeq = originSeq;
    this._targetStart = targetStart;
    this._targetEnd = targetEnd;
    this._targetSeq = targetSeq;
    this._status = status;
  }
  get origin(): string {
    return this._origin;
  }

  set origin(value: string) {
    this._origin = value;
  }

  get target(): string {
    return this._target;
  }

  set target(value: string) {
    this._target = value;
  }

  get source(): string {
    return this._source;
  }

  set source(value: string) {
    this._source = value;
  }

  get originStart(): string {
    return this._originStart;
  }

  set originStart(value: string) {
    this._originStart = value;
  }

  get originEnd(): string {
    return this._originEnd;
  }

  set originEnd(value: string) {
    this._originEnd = value;
  }

  get originSeq(): string {
    return this._originSeq;
  }

  set originSeq(value: string) {
    this._originSeq = value;
  }

  get targetStart(): string {
    return this._targetStart;
  }

  set targetStart(value: string) {
    this._targetStart = value;
  }

  get targetEnd(): string {
    return this._targetEnd;
  }

  set targetEnd(value: string) {
    this._targetEnd = value;
  }

  get targetSeq(): string {
    return this._targetSeq;
  }

  set targetSeq(value: string) {
    this._targetSeq = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
  private _origin: string;
  private _target: string;
  private _source: string;
  private _originStart: string;
  private _originEnd: string;
  private _originSeq: string;
  private _targetStart: string;
  private _targetEnd: string;
  private _targetSeq: string;
  private _status: string;
}
