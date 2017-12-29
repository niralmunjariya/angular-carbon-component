import { FormsModule } from '@angular/forms';
import { CbNumberInputComponent } from './number-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CbNumberInputComponent],
  declarations: [CbNumberInputComponent]
})
export class CbNumberInputModule { }
