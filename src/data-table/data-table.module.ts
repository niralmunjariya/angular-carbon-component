import { CbColumnComponent } from './column/column.component';
import { CbDataTableComponent } from './data-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbDataTableComponent, CbColumnComponent],
  declarations: [CbDataTableComponent, CbColumnComponent]
})
export class CbDataTableModule { }
