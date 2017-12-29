import { CbTabComponent } from './tab/tab.component';
import { Component, OnInit, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbTabs',
  template: `
  <style>
    .bx--tabs{
      font-weight: initial;
    }
  </style>
  <ng-container *ngIf="tabs && tabs.length > 0">
  <nav data-tabs class="bx--tabs" role="navigation">
    <div class="bx--tabs-trigger" tabindex="0">
      <a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1"></a>
      <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z"></path>
      </svg>
    </div>
    <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist" style="position:unset;">
      <li class="bx--tabs__nav-item" role="presentation" *ngFor="let tab of tabs;let i=index;"
      (click)="tabSelect(tab, i)" [ngClass]="{'bx--tabs__nav-item--selected' :tab.selected }">
        <a class="bx--tabs__nav-link" href="javascript:void(0)" role="tab">{{tab._heading}}</a>
      </li>
    </ul>
    <div>
      <ng-content></ng-content>
    </div>
  </nav>
  </ng-container>`
})
export class CbTabsComponent implements OnInit, AfterViewInit {

  tabs: CbTabComponent[] = [];
  carbonTabs: any;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef) { }

  public add(tab: CbTabComponent): void {
    this.tabs.push(tab);
  }

  public remove(tab: CbTabComponent): void {
    const i = this.tabs.indexOf(tab);
    if (i !== -1) {
      this.tabs.splice(i, 1);
    }
  }

  ngOnInit() {
    if (this.tabs && this.tabs.length > 0) {
      this.tabs[0].selected = true;
    }
  }

  ngAfterViewInit() { }

  tabSelect(tab: CbTabComponent, index: any): void {
    this.tabs.map((item) => item.selected = false);
    tab.selected = true;
    this.select.emit({ index: index, tab: tab });
  }

}
