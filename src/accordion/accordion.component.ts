import { CbAccordionItemComponent } from './accordion-item/accordion-item.component';
import { Component, OnInit, ElementRef, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbAccordion',
  template: `
  <ul data-accordion class="bx--accordion">
    <ng-content></ng-content>
  </ul>`,
  styles: [`
    .bx--accordion > cbaccordionitem:last-child > li.bx--accordion__item{
      border-bottom: 1px solid #dfe3e6;
    }
    .bx--accordion__item:last-child{
      border-bottom: 0;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class CbAccordionComponent implements OnInit, AfterViewInit {

  _closeOthers: boolean = false;
  @Input()
  set closeOthers(value: boolean) {
    if (typeof value === 'boolean') {
      this._closeOthers = value;
    } else {
      this._closeOthers = value === 'true' ? true : false;
    }
  }
  protected accordionItems: CbAccordionItemComponent[] = [];

  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  /**
   * Adds a accordion item to the accodion
   * @param item CbAccordionItemComponent
   */
  public add(item: CbAccordionItemComponent) {
    this.accordionItems.push(item);
  }

  /**
   * Removes a accordion item from the accordion
   * @param item CbAccordionItemComponent
   */
  public remove(item: CbAccordionItemComponent) {
    const index = this.accordionItems.indexOf(item);
    if (index !== -1) {
      this.accordionItems.splice(index, 1);
    }
  }

  public closeAll() {
    this.accordionItems.forEach(item => {
      item._opened = false;
      return item;
    });
  }



}
