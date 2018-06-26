import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BranchMotif} from './branch-motif';

@Injectable()
export class MotifDataService {
  private _motifDataSet = new Subject<BranchMotif[]>();
  dataSet = this._motifDataSet.asObservable();
  constructor() { }

  UpdateMotifDataSet(data: BranchMotif[]) {
    this._motifDataSet.next(data);
  }
}
