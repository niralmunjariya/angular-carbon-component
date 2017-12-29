import { CbColumnComponent } from './column/column.component';
import { Component, OnInit, AfterViewInit, ElementRef, Input, TemplateRef } from '@angular/core';
import { ViewChild, OnDestroy, AfterViewChecked, EventEmitter, Output } from '@angular/core';
import { NgZone } from '@angular/core';
declare let CarbonComponents: any;
// import { DataTable } from 'carbon-components';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbDataTable',
  template: `
  <div class="bx--responsive-table-container" data-responsive-table>
  <table class="bx--responsive-table" data-table>
    <thead class="bx--table-head">
      <tr class="bx--table-row">
        <th *ngIf="expandableRow" class="bx--table-header"></th>
        <th *ngIf="_selection" class="bx--table-header bx--table-select">
          <input data-event="select-all" id="bx--checkbox-1" class="bx--checkbox" type="checkbox" value="green" name="checkbox-1">
          <label for="bx--checkbox-1" class="bx--checkbox-label" aria-label="Label name">
            <span class="bx--checkbox-appearance">
              <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
              </svg>
            </span>
          </label>
        </th>
        <th *ngFor="let header of _headers;let i=index;" tabindex="0" class="bx--table-header bx--table-sort" data-event="sort">
          <span>{{header}}</span>
          <svg class="bx--table-sort__svg" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
        </th>
        <th class="bx--table-header"></th>
      </tr>
    </thead>
    <tbody class="bx--table-body">
      <ng-container *ngFor="let item of _dataSource;let i=index;">
        <tr class="bx--table-row bx--parent-row" [ngClass]="{'bx--parent-row--even' : i%2 === 0}" data-parent-row>
          <td *ngIf="expandableRow" tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td *ngIf="_selection" class="bx--table-select">
            <input id="dataCheck{{i+1}}" class="bx--checkbox" type="checkbox" value="green" name="checkbox-8">
            <label for="dataCheck{{i+1}}" class="bx--checkbox-label" aria-label="Label name">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <ng-container *ngFor="let field of _fields">
            <td>{{item[field]}}</td>
          </ng-container>
          <td></td>
        </tr>
        <tr *ngIf="expandableRow" class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td [attr.colspan]="_fields.length + _difference">
          <ng-container [ngTemplateOutlet]="expandableRow" [ngOutletContext]="{$implicit: item}"></ng-container>
          </td>
        </tr>
      </ng-container>
    </tbody>
  </table>
</div> `
})
export class CbDataTableComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  _dataSource: any[];
  _fields: any[] = [];
  _headers: any[] = [];
  _difference: number = 3;
  _selection: boolean;
  protected columns: CbColumnComponent[] = [];
  @Input()
  set dataSource(value: any) {
    this._dataSource = value;
  }
  @Input()
  expandableRow: TemplateRef<any>;
  @Input()
  set selection(value: any) {
    this._selection = value;
  }
  carbonDataTable: any;
  @Output() beforeExpand: EventEmitter<any> = new EventEmitter<any>();
  @Output() afterExpand: EventEmitter<any> = new EventEmitter<any>();
  @Output() beforeSort: EventEmitter<any> = new EventEmitter<any>();
  @Output() afterSort: EventEmitter<any> = new EventEmitter<any>();
  @Output() beforeSelectAll: EventEmitter<any> = new EventEmitter<any>();
  @Output() afterSelectAll: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.expandableRow) {
      this._difference--;
    }
    if (!this._selection) {
      this._difference--;
    }
    this.zone.runOutsideAngular(() => {
      const table = this.el.nativeElement.querySelector('[data-responsive-table]');
      this.carbonDataTable = new CarbonComponents.DataTable(table);
      if (this.expandableRow) {
        table.addEventListener('responsive-table-beforetoggleexpand', (event: any) => {
          this.beforeExpand.emit(event);
        });
        table.addEventListener('responsive-table-aftertoggleexpand', (event: any) => {
          this.afterExpand.emit(event);
        });
      }
      table.addEventListener('responsive-table-beforetogglesort', (event: any) => {
        this.beforeSort.emit(event);
      });
      table.addEventListener('responsive-table-aftertogglesort', (event: any) => {
        this.afterSort.emit(event);
      });
      table.addEventListener('responsive-table-beforetoggleselectall', (event: any) => {
        this.beforeSelectAll.emit(event);
      });
      table.addEventListener('responsive-table-aftertoggleselectall', (event: any) => {
        this.afterSelectAll.emit(event);
      });
    });
  }

  ngAfterViewChecked() {
    this.zone.runOutsideAngular(() => {
      this.carbonDataTable.refreshRows();
    });
  }

  public add(column: CbColumnComponent) {
    this.columns.push(column);
  }

  public remove(column: CbColumnComponent) {
    const index = this.columns.indexOf(column);
    if (index !== -1) {
      this.columns.splice(index, 1);
    }
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      this.carbonDataTable.release();
    });
  }

}
