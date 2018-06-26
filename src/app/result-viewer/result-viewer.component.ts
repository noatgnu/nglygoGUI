import { Component, OnInit, Input } from '@angular/core';
import {Query} from '../query';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.css']
})
export class ResultViewerComponent implements OnInit {
  @Input('query') query: Query;
  constructor() { }

  ngOnInit() {
  }

}
