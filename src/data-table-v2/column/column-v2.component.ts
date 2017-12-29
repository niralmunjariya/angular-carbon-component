import { CbDataTableV2Component } from './../data-table-v2.component';
import { Component, OnInit, ElementRef, Inject, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { ContentChild } from '@angular/core/src/metadata/di';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbColumnV2',
  template: ` `
})
export class CbColumnV2Component implements OnInit, AfterViewInit, OnDestroy {

  _field: any;
  _header: any;
  dataTable: CbDataTableV2Component;
  @Input()
  set field(value: any) {
    this._field = value;
  }
  @Input()
  set header(value: any) {
    this._header = value;
  }

  constructor(private el: ElementRef, @Inject(CbDataTableV2Component) dataTable: CbDataTableV2Component) {
    this.dataTable = dataTable;
  }

  ngOnInit() {
    this.dataTable._headers.push(this._header);
    this.dataTable._fields.push(this._field);
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }

}
