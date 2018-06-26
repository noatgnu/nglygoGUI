import {Component, ElementRef, AfterViewInit, ViewChild, Input, OnInit} from '@angular/core';
import Phylocanvas from 'phylocanvas/dist/phylocanvas.js';
import scalebar from 'phylocanvas-plugin-scalebar';
import contextMenu from 'phylocanvas-plugin-context-menu';
import metadata from 'phylocanvas-plugin-metadata';
import exportSvg from 'phylocanvas-plugin-export-svg';
import * as FileSaver from 'file-saver';
import {Query} from '../query';
import {BranchMotif} from '../branch-motif';
import {MotifDataService} from '../motif-data.service';
import {Observable} from 'rxjs/Observable';
import {AlignedMotifMapService} from '../aligned-motif-map.service';
import {AlignedMotifs} from '../aligned-motifs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [MotifDataService, AlignedMotifMapService]
})
export class TreeComponent implements AfterViewInit, OnInit {
  @Input('nwkTree') nwkTree: Query;

  @ViewChild('phylocanvas')phylocanvas: ElementRef;
  treeType = 'rectangular';
  el: HTMLElement;
  tree: any;
  treeTypes = ['rectangular', 'circular', 'hierarchical', 'radial'];
  selectedNodeData: Observable<BranchMotif[]>;
  selectedNode: string;
  selectedNodeName: string;
  connectedNode: string[];
  alignedMotifs: AlignedMotifs[];
  statusList = new Map<string, string>([['conserved', '#002BFF'], ['gain', '#00FF47'], ['loss', '#FF2716'], ['potentially conserved', '#FF0BC0']]);
  constructor(private _motifData: MotifDataService, private _motifMap: AlignedMotifMapService) {
    Phylocanvas.plugin(scalebar);
    Phylocanvas.plugin(contextMenu);
    Phylocanvas.plugin(metadata);
    Phylocanvas.plugin(exportSvg);
    this.selectedNodeData = this._motifData.dataSet;
    console.log(this.statusList);
  }

  ngOnInit() {
    this.alignedMotifs = this._motifMap.GetAlignedMotif(this.nwkTree.motif);
  }

  ngAfterViewInit() {
    this.el = this.phylocanvas.nativeElement;
    this.tree = Phylocanvas.createTree(this.el, {
      metadata: {
        active: true,
        showHeaders: true,
        showLabels: true,
        blockLength: 32,
      }
    });
    this.tree.setTreeType(this.treeType);
    this.tree.alignLabels = true;
    this.tree.branchColour = '#3C7383';
    this.tree.load(this.nwkTree.tree);
    for (const c of Object.keys(this.tree.branches)) {
      if (this.tree.branches[c].leaf) {
        this.tree.branches[c].data = {
          organism: {
            colour: '#ffffff',
            label: this.nwkTree.blastMap.organism[this.tree.branches[c].id],
          }
        };
      } else {
        this.tree.branches[c].label = 'ancestral node ' + this.tree.branches[c].label;
        this.tree.branches[c].data = {
          organism: {
            colour: '#ffffff',
            label: 'ancestral node'
          }
        };
      }
    }
    this.tree.draw();
  }

  GetBranchChangeMap(position: string) {
    for (const motif of this.alignedMotifs) {
      if (motif.Id === position) {
        return motif;
      }
    }
  }

  DrawBranchChanges(position: string) {
    const motif = this.GetBranchChangeMap(position);
    for (const c of motif.Branch) {
      this.tree.branches[c.target].setDisplay({
        colour: this.statusList.get(c.status),
        size: 3,
      });
    }
    console.log(motif);
    this.tree.draw();
  }

  downloadSvg() {
    FileSaver.saveAs(new Blob([this.tree.exportSVG.getSerialisedSVG()], {'type' : 'image/svg+xml;charset=utf-8;'}), 'tree.svg');
  }

  changeType() {
    this.tree.setTreeType(this.treeType);
    this.tree.draw();
  }

  clickNode() {
    for (const c of Object.keys(this.tree.branches)) {
      if (this.tree.branches[c].hovered) {
        this.connectedNode = [];
        const data: BranchMotif[] = [];
        const connected: string[] = [];
        for (const s of this.nwkTree.motif) {
          if (s.origin === this.tree.branches[c].id) {
            data.push(s);
            if (!connected.includes(s.target)) {
              connected.push(s.target);
            }
          } else if (s.target === this.tree.branches[c].id) {
            data.push(s);
            if (!connected.includes(s.origin)) {
              connected.push(s.origin);
            }
          }
        }
        this.connectedNode = connected;
        console.log(this.connectedNode);
        this.selectedNodeName = this.tree.branches[c].label;
        this.selectedNode = this.tree.branches[c].id;
        this._motifData.UpdateMotifDataSet(data);
        break;
      }
    }
  }

  test(t) {
    console.log(t);
  }
}
