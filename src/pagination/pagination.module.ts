import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbPaginationComponent } from './pagination/pagination.component';
import { CbPaginationConfig } from './pagination.config';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CbPaginationComponent],
  exports: [CbPaginationComponent],
  providers: [CbPaginationConfig]
})
export class CbPaginationModule { }
