// ng serve --host 0.0.0.0 --disable-host-check

import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  constructor() {

  }
  ngAfterViewInit() {

  }
}
