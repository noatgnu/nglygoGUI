export class BlastMap {
  constructor(id: Map<string, string>, organism: Map<string, string>, accession: Map<string, string>, filename: string) {
    this._id = id;
    this._organism = organism;
    this._accession = accession;
    this._filename = filename;
  }
  get id(): Map<string, string> {
    return this._id;
  }

  set id(value: Map<string, string>) {
    this._id = value;
  }

  get organism(): Map<string, string> {
    return this._organism;
  }

  set organism(value: Map<string, string>) {
    this._organism = value;
  }

  get accession(): Map<string, string> {
    return this._accession;
  }

  set accession(value: Map<string, string>) {
    this._accession = value;
  }

  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }
  private _id: Map<string, string>;
  private _organism: Map<string, string>;
  private _accession: Map<string, string>;
  private _filename: string;
}
