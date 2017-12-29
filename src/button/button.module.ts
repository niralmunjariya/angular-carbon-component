import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbButtonDirective } from './button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbButtonDirective],
  declarations: [CbButtonDirective]
})
export class CbButtonModule { }
