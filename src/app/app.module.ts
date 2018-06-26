import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatListModule, MatRadioModule, MatSelectModule,
  MatStepperModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { SelectDbformComponent } from './select-dbform/select-dbform.component';
import {GetCoreDBService} from './getcoredb.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { TreeNodeDataComponent } from './tree-node-data/tree-node-data.component';
import { AlignmentViewerComponent } from './alignment-viewer/alignment-viewer.component';
import {D3Service} from 'd3-ng2-service';
import { ResultViewerComponent } from './result-viewer/result-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SelectDbformComponent,
    TreeNodeDataComponent,
    AlignmentViewerComponent,
    ResultViewerComponent,
  ],
  imports: [
    MatTabsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    GetCoreDBService,
    D3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
