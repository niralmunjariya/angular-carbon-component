import { CbAccordionItemComponent } from './accordion-item/accordion-item.component';
import { CbAccordionComponent } from './accordion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbAccordionComponent, CbAccordionItemComponent],
  declarations: [CbAccordionComponent, CbAccordionItemComponent]
})
export class CbAccordionModule { }
