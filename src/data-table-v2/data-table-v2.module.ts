import { CbColumnV2Component } from './column/column-v2.component';
import { CbDataTableV2Component } from './data-table-v2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbPaginationModule } from '../pagination/pagination.module';
import { CbRowExpansionLoaderComponent } from './row-expansion-loader/row-expansion-loader.component';

@NgModule({
  imports: [
    CommonModule,
    CbPaginationModule
  ],
  exports: [CbDataTableV2Component, CbColumnV2Component],
  declarations: [CbDataTableV2Component, CbColumnV2Component, CbRowExpansionLoaderComponent]
})
export class CbDataTableV2Module { }
