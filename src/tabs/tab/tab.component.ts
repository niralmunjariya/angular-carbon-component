import { CbTabsComponent } from './../tabs.component';
import { Component, OnInit, ElementRef, Inject, AfterViewInit, OnDestroy, TemplateRef, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbTab',
  template: `
    <ng-container *ngIf="selected">
      <div role="tabpanel">
        <ng-content></ng-content>
      </div>
    </ng-container>`
})
export class CbTabComponent implements OnInit, AfterViewInit, OnDestroy {

  tabs: CbTabsComponent;
  public _heading: any;
  selected: boolean;
  @Input()
  set heading(value: any) {
    this._heading = value;
  }

  @Input()
  set active(value: any) {
    this.selected = value;
  }
  constructor(private el: ElementRef, @Inject(CbTabsComponent) tabs: CbTabsComponent) {
    this.tabs = tabs;
  }

  ngAfterViewInit(): void { }

  ngOnInit() {
    this.tabs.add(this);
  }

  ngOnDestroy(): void {
    this.tabs.remove(this);
  }

}
