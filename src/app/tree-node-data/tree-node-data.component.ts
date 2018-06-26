import {Component, Input, OnInit} from '@angular/core';
import {BranchMotif} from '../branch-motif';

@Component({
  selector: 'app-tree-node-data',
  templateUrl: './tree-node-data.component.html',
  styleUrls: ['./tree-node-data.component.css']
})
export class TreeNodeDataComponent implements OnInit {
  @Input('nodeMotifData') nodeMotifData: BranchMotif[];
  @Input('nodeName') nodeName: string;
  @Input('nodeID') nodeID: string;
  @Input('connected') connected: string[];

  constructor() { }

  ngOnInit() {

  }

  ConnectedString() {
    return this.connected.join(',');
  }
}
