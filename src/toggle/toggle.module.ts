import { CbToggleComponent } from './toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CbToggleComponent],
  declarations: [CbToggleComponent],
  entryComponents: [CbToggleComponent]
})
export class CbToggleModule { }
