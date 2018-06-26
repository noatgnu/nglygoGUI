import {BranchMotif} from './branch-motif';

export class AlignedMotifs {
  constructor(Id: string, Branch: BranchMotif[]) {
    this._Id = Id;
    this._Branch = Branch;
  }
  get Branch(): BranchMotif[] {
    return this._Branch;
  }

  set Branch(value: BranchMotif[]) {
    this._Branch = value;
  }

  get Id(): string {
    return this._Id;
  }

  set Id(value: string) {
    this._Id = value;
  }

  get SeqMap(): Map<string, string[]> {
    return this._SeqMap;
  }

  set SeqMap(value: Map<string, string[]>) {
    this._SeqMap = value;
  }
  private _Id: string;
  private _SeqMap: Map<string, string[]>;
  private _Branch: BranchMotif[];
}
