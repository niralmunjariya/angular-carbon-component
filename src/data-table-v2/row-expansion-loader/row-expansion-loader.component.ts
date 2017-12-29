import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, TemplateRef, EmbeddedViewRef, ViewContainerRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbRowExpansionLoader',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class CbRowExpansionLoaderComponent implements OnInit, OnDestroy {

  @Input() template: TemplateRef<any>;
  @Input() rowData: any;
  @Input() rowIndex: any;
  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.template, {
      '\$implicit': this.rowData,
      'rowIndex': this.rowIndex
    });
  }

  ngOnDestroy() {
    this.view.destroy();
    console.log('destroyer called');
  }

}
