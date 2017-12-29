import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbClickableTile',
  template: `
  <a href="javascript:void(0)" data-tile="clickable" class="bx--tile bx--tile--clickable">
    <ng-content></ng-content>
  </a>
  `
})
export class CbClickableTileComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
