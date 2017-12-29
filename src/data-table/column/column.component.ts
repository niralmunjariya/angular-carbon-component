import { CbDataTableComponent } from './../data-table.component';
import { Component, OnInit, ElementRef, Inject, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbColumn',
  template: ``
})
export class CbColumnComponent implements OnInit, AfterViewInit, OnDestroy {

  _field: any;
  _header: any;
  protected dataTable: CbDataTableComponent;
  @Input()
  set field(value: any) {
    this._field = value;
  }
  @Input()
  set header(value: any) {
    this._header = value;
  }

  constructor(private el: ElementRef, @Inject(CbDataTableComponent) dataTable: CbDataTableComponent) {
    this.dataTable = dataTable;
  }

  ngOnInit() {
    this.dataTable.add(this);
    this.dataTable._headers.push(this._header);
    this.dataTable._fields.push(this._field);
  }

  ngAfterViewInit() { }

  ngOnDestroy() {
    this.dataTable.remove(this);
  }

}
