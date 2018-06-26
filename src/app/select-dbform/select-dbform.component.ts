import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetCoreDBService} from '../getcoredb.service';
import {Observable} from 'rxjs/Observable';
import {CoreDB} from '../coredb';
import {Query} from '../query';
import {DomSanitizer} from '@angular/platform-browser';
import {BranchMotif} from '../branch-motif';

@Component({
  selector: 'app-select-dbform',
  templateUrl: './select-dbform.component.html',
  styleUrls: ['./select-dbform.component.css']
})
export class SelectDbformComponent implements OnInit {
  isLinear = true;
  coreDBFormGroup: FormGroup;
  queryListFormGroup: FormGroup;
  coreDBList: Observable<CoreDB[]>;
  queryList: Observable<Query[]>;
  queryDisplayList: Observable<Query[]>;
  selected = [];
  @ViewChild('myTable') table: any;
  @ViewChild('resultel') resultel: ElementRef;
  constructor(private _formBuilder: FormBuilder, private _getDB: GetCoreDBService, private sanitizer: DomSanitizer) {
    this.coreDBList = _getDB.coreDBO;
    this.queryList = _getDB.queryO;
    this.queryDisplayList = _getDB.queryDO;
  }

  ngOnInit() {
    this.coreDBFormGroup = this._formBuilder.group({
      dbName: ['', Validators.required]
    });
    this.queryListFormGroup = this._formBuilder.group({
      query: ['', Validators.required],
      queryList: [[], Validators.required]
    });
    this._getDB.GetDBList().subscribe(data => {this._getDB.UpdateCoreDB(data.db); console.log(data.db); });
  }

  OnSubmitDB() {
    this._getDB.GetDB(this.coreDBFormGroup.value.dbName).subscribe(data => {
      this._getDB.UpdateQueryList(data.query);
    });
  }

  toggleExpandRow(row) {
    console.log(row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.queryListFormGroup.controls['queryList'].setValue(this.selected);
  }

  display() {
    let query = '';
    for (const q of this.queryListFormGroup.value.queryList) {
      query += q.id + ';';
    }
    this._getDB.GetQuery(this.coreDBFormGroup.value.dbName, query).subscribe(data => {
      this._getDB.UpdateQueryDisplayList(data.query);
      this.resultel.nativeElement.scrollIntoView(false);
    });
  }

  sanitizeLink(s: string) {
    return this.sanitizer.bypassSecurityTrustUrl(s);
  }
}
