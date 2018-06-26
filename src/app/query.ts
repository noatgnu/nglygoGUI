import {BlastMap} from './blast-map';
import {BranchMotif} from './branch-motif';
import {Alignment} from './alignment';
import {AlignmentData} from './alignment-data';
import {TopDomDF} from './top-dom-df';

export class Query {
  constructor(id: string, tree: string, blastMap: BlastMap, hasTree: boolean, hasAlign: boolean, treeFile: string, alignFile: string, hasMotif: string, motifFile: string, motif: BranchMotif[], hasTopDom: boolean, topDomFile: string, alignment: Alignment, alignmentDF: AlignmentData[], topDomDF: TopDomDF[]) {
    this._id = id;
    this._tree = tree;
    this._blastMap = blastMap;
    this._hasTree = hasTree;
    this._hasAlign = hasAlign;
    this._treeFile = treeFile;
    this._alignFile = alignFile;
    this._hasMotif = hasMotif;
    this._motifFile = motifFile;
    this._motif = motif;
    this._hasTopDom = hasTopDom;
    this._topDomFile = topDomFile;
    this._alignment = alignment;
    this._alignmentDF = alignmentDF;
    this._topDomDF = topDomDF;
  }
  get topDomDF(): TopDomDF[] {
    return this._topDomDF;
  }

  set topDomDF(value: TopDomDF[]) {
    this._topDomDF = value;
  }

  get alignmentDF(): AlignmentData[] {
    return this._alignmentDF;
  }

  set alignmentDF(value: AlignmentData[]) {
    this._alignmentDF = value;
  }

  get alignment(): Alignment {
    return this._alignment;
  }

  set alignment(value: Alignment) {
    this._alignment = value;
  }

  get hasTopDom(): boolean {
    return this._hasTopDom;
  }

  set hasTopDom(value: boolean) {
    this._hasTopDom = value;
  }

  get topDomFile(): string {
    return this._topDomFile;
  }

  set topDomFile(value: string) {
    this._topDomFile = value;
  }

  get hasMotif(): string {
    return this._hasMotif;
  }

  set hasMotif(value: string) {
    this._hasMotif = value;
  }

  get motifFile(): string {
    return this._motifFile;
  }

  set motifFile(value: string) {
    this._motifFile = value;
  }

  get motif(): BranchMotif[] {
    return this._motif;
  }

  set motif(value: BranchMotif[]) {
    this._motif = value;
  }

  get treeFile(): string {
    return this._treeFile;
  }

  set treeFile(value: string) {
    this._treeFile = value;
  }

  get alignFile(): string {
    return this._alignFile;
  }

  set alignFile(value: string) {
    this._alignFile = value;
  }

  get hasTree(): boolean {
    return this._hasTree;
  }

  set hasTree(value: boolean) {
    this._hasTree = value;
  }

  get hasAlign(): boolean {
    return this._hasAlign;
  }

  set hasAlign(value: boolean) {
    this._hasAlign = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get tree(): string {
    return this._tree;
  }

  set tree(value: string) {
    this._tree = value;
  }

  get blastMap(): BlastMap {
    return this._blastMap;
  }

  set blastMap(value: BlastMap) {
    this._blastMap = value;
  }
  private _id: string;
  private _tree: string;
  private _blastMap: BlastMap;
  private _hasTree: boolean;
  private _hasAlign: boolean;
  private _treeFile: string;
  private _alignFile: string;
  private _hasMotif: string;
  private _motifFile: string;
  private _motif: BranchMotif[];
  private _hasTopDom: boolean;
  private _topDomFile: string;
  private _alignment: Alignment;
  private _alignmentDF: AlignmentData[];
  private _topDomDF: TopDomDF[];
}
