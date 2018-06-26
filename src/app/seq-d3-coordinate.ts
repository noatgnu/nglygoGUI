export class SeqD3Coordinate {
  constructor(seqId: string, yCoord: number) {
    this._seqId = seqId;
    this._yCoord = yCoord;
  }
  get seqId(): string {
    return this._seqId;
  }

  set seqId(value: string) {
    this._seqId = value;
  }

  get yCoord(): number {
    return this._yCoord;
  }

  set yCoord(value: number) {
    this._yCoord = value;
  }
  private _seqId: string;
  private _yCoord: number;
}
