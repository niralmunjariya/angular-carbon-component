import { CbAccordionComponent } from './../accordion.component';
import { Component, OnInit, Input, AfterViewInit, ElementRef, Inject, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbAccordionItem',
  template: `
  <li data-accordion-item class="bx--accordion__item" [ngClass]="{'bx--accordion__item--active' : _opened, 'disabled': _disabled === true}">
  <button class="bx--accordion__heading" (click)="toggle()" aria-expanded="false">
      <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
        <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
      </svg>
      <p class="bx--accordion__title">{{_heading}}</p>
    </button>
  <div class="bx--accordion__content">
    <ng-content></ng-content>
  </div>
</li>`,
  styles: [
    `.disabled > * { opacity: 0.5;cursor: not-allowed;}`
  ]
})
export class CbAccordionItemComponent implements OnInit, AfterViewInit, OnDestroy {

  _opened: boolean = false;
  _disabled: boolean = false;
  _heading: string;
  protected accordion: CbAccordionComponent;
  @Input()
  set opened(value: any) {
    if (typeof value === 'boolean') {
      this._opened = value;
    } else {
      this._opened = value === 'true' ? true : false;
    }
  }
  @Input()
  set disabled(value: any) {
    if (typeof value === 'boolean') {
      this._disabled = value;
    } else {
      this._disabled = value === 'true' ? true : false;
    }
  }
  @Input()
  set heading(value: string) {
    this._heading = value;
  }
  constructor(private el: ElementRef, @Inject(CbAccordionComponent) accordion: CbAccordionComponent) {
    this.el = el;
    this.accordion = accordion;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.accordion.add(this);
  }

  ngOnDestroy() {
    this.accordion.remove(this);
  }

  toggle() {
    if (!this._disabled) {
      if (this.accordion._closeOthers === true) {
        this.accordion.closeAll();
      }
      this._opened = !this._opened;
    }
  }

}
