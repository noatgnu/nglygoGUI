import {SeqD3Coordinate} from './seq-d3-coordinate';

export class Alignment {
  constructor(header: string, alignment: Map<string, string>, noGap: Map<string, string>, ancestralNodes: string[], length: number, seqIdArray: SeqD3Coordinate[], conserveMap: Map<number, number>) {
    this._header = header;
    this._alignment = alignment;
    this._noGap = noGap;
    this._ancestralNodes = ancestralNodes;
    this._length = length;
    this._seqIdArray = seqIdArray;
    this._conserveMap = conserveMap;
  }
  get conserveMap(): Map<number, number> {
    return this._conserveMap;
  }

  set conserveMap(value: Map<number, number>) {
    this._conserveMap = value;
  }

  get seqIdArray(): SeqD3Coordinate[] {
    return this._seqIdArray;
  }

  set seqIdArray(value: SeqD3Coordinate[]) {
    this._seqIdArray = value;
  }

  get header(): string {
    return this._header;
  }

  set header(value: string) {
    this._header = value;
  }

  get alignment(): Map<string, string> {
    return this._alignment;
  }

  set alignment(value: Map<string, string>) {
    this._alignment = value;
  }

  get noGap(): Map<string, string> {
    return this._noGap;
  }

  set noGap(value: Map<string, string>) {
    this._noGap = value;
  }

  get ancestralNodes(): string[] {
    return this._ancestralNodes;
  }

  set ancestralNodes(value: string[]) {
    this._ancestralNodes = value;
  }

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }
  private _header: string;
  private _alignment: Map<string, string>;
  private _noGap: Map<string, string>;
  private _ancestralNodes: string[];
  private _length: number;
  private _seqIdArray: SeqD3Coordinate[];
  private _conserveMap: Map<number, number>;
}
