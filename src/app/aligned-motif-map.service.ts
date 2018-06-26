import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BranchMotif} from './branch-motif';
import {AlignedMotifs} from './aligned-motifs';

@Injectable()
export class AlignedMotifMapService {
  private _alignedMotifMapSource = new Subject<AlignedMotifs[]>();
  alignMotifMap = this._alignedMotifMapSource.asObservable();
  constructor() { }

  GetAlignedMotif(branchMotif: BranchMotif[]) {
    const alignedMotifs = new Map<string, BranchMotif[]>();
    for (const b of branchMotif) {
      let col: string;
      if (b.origin === b.source) {
        col = 'origin';
      } else {
        col = 'target';
      }
      if (col === 'target') {
        this.SetAlignedMotifMap(b.targetStart, b, alignedMotifs);
      } else if (col === 'origin') {
        this.SetAlignedMotifMap(b.originStart, b, alignedMotifs);
      }
    }
    const alignedMotifsArray: AlignedMotifs[] = [];
    alignedMotifs.forEach((value, key, map) => {
      alignedMotifsArray.push(new AlignedMotifs(key, value));
    });
    console.log(alignedMotifsArray);
    console.log(alignedMotifs);
    return alignedMotifsArray;
  }

  SetAlignedMotifMap(position: string, branch: BranchMotif, alignedMotifs: Map<string, BranchMotif[]>) {
    if (!alignedMotifs.has(position)) {
      alignedMotifs.set(position, []);
    }
    alignedMotifs.get(position).push(branch);
  }

  UpdateAlignMotifMap(m: AlignedMotifs[]) {
    console.log(m);
    this._alignedMotifMapSource.next(m);
  }
}
