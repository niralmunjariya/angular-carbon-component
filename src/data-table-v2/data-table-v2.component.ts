import { CbColumnV2Component } from './column/column-v2.component';
import { Component, OnInit, AfterViewInit, ElementRef, Input, TemplateRef, NgZone } from '@angular/core';
import { ViewChild, OnDestroy, AfterViewChecked, EventEmitter, Output, ViewChildren } from '@angular/core';
// import { DataTableV2 } from 'carbon-components';
import { PaginatorConfig } from './paginator.config';
import { CbPaginationConfig } from '../pagination/pagination.config';
declare let CarbonComponents: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbDataTableV2',
  template: `
      <style>
      .bx--table-expand-v2:focus {
        outline: none;
      }

    </style>
    <div class="bx--data-table-v2-container" data-table-v2>
      <section class="bx--table-toolbar" style="padding:1.5rem;">
        <div class="bx--batch-actions" aria-label="Table Action Bar">
          <div class="bx--batch-summary">
            <p class="bx--batch-summary__para">
              <span data-items-selected>3</span> items selected</p>
            <button data-event="action-bar-cancel" class="bx--batch-summary__cancel">Cancel</button>
          </div>
        </div>
      </section>
      <table class="bx--data-table-v2 bx--data-table-v2--zebra">
        <thead>
          <tr>
            <th *ngIf="expandableRow" class="bx--table-header"></th>
            <th *ngIf="_selection" class="bx--table-header bx--table-select">
              <input [attr.id]="cBox" data-event="select-all" class="bx--checkbox" type="checkbox" value="green" name="checkbox-20">
              <label [attr.for]="cBox" class="bx--checkbox-label" aria-label="Label name">
                <span class="bx--checkbox-appearance">
                  <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                    <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                  </svg>
                </span>
              </label>
            </th>
            <th *ngFor="let header of _headers;let i=index;">
              <button class="bx--table-sort-v2" [attr.data-label]="_fields[i]" data-event="sort">
                <span class="bx--table-header-label">{{header}}</span>
                <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                  <path d='M10 0L5 5 0 0z'></path>
                </svg>
              </button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngFor="let item of _dataSource;let i=index;">
            <tr class="bx--parent-row-v2" data-parent-row>
              <td *ngIf="expandableRow" tabindex="0" class="bx--table-expand-v2" style="width: 3rem;" data-event="expand">
                <button class="bx--table-expand-v2__button">
                  <svg class="bx--table-expand-v2__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
                    <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
                  </svg>
                </button>
              </td>
              <td *ngIf="_selection" class="bx--table-select" style="width: 3rem;">
                <input (change)="onRowSelect($event, item)" data-event="select" id="dataCheck{{i+1}}" class="bx--checkbox" type="checkbox"
                  value="green" name="checkbox-8">
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
            <tr *ngIf="expandableRow" class="bx--expandable-row-v2 bx--expandable-row--hidden-v2" data-child-row>
              <td [attr.colspan]="_fields.length + _difference">
                <!--- <cbRowExpansionLoader [rowData]="item" [rowIndex]="i" [template]="expandableRow"></cbRowExpansionLoader> -->
                <ng-container [ngTemplateOutlet]="expandableRow" [ngOutletContext]="{$implicit: item}"></ng-container>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
      <ng-container *ngIf="isPaginationEnabled">
        <cbPagination (pageChange)="onPageChange($event)" [totalItems]="_paginationConfig.total"
        [itemsPerPageSelection]="_paginationConfig.itemsPerPage"></cbPagination>
      </ng-container>
    </div>
  `
})
export class CbDataTableV2Component implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  protected columns: CbColumnV2Component[] = [];
  carbonDataTable: any;
  // DataTable variables
  _fields: any[] = [];
  _headers: any[] = [];
  _difference: number = 3;
  _selection: boolean;
  _dataSource: any[] = [];
  originalDataSource: any[] = [];
  cBox: any;

  // Pagination variables
  _paginationConfig: CbPaginationConfig = { total: 0, itemsPerPage: [10, 20, 30, 50, 100] };
  _totalItems: number = 0;
  isPaginationEnabled: boolean = false;

  // DataTable Inputs
  @Input()
  set dataSource(value: any) {
    this._dataSource = JSON.parse(JSON.stringify(value));
  }
  @Input() expandableRow: TemplateRef<any>;
  @Input()
  set selection(value: any) {
    this._selection = value;
  }

  // Pagination Inputs
  @Input()
  set paginationConfig(value: any) {
    this._paginationConfig = value;
    this.isPaginationEnabled = true;
  }
  @Input()
  set totalItems(value: any) {
    this._paginationConfig.total = value;
    this.isPaginationEnabled = true;
  }
  @Input()
  set itemsPerPageSelection(value: any) {
    this._paginationConfig.itemsPerPage = value;
    this.isPaginationEnabled = true;
  }

  // DataTable Output Events
  @Output() sort: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowSelect: EventEmitter<any> = new EventEmitter<any>();

  // Pagination Output Events
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
    this.cBox = Date.now(); // work-around to handle select-all event of carbon data table
    this.originalDataSource = JSON.parse(JSON.stringify(this._dataSource));
    if (this.isPaginationEnabled) {
      this._dataSource = this.originalDataSource.slice(0, 10);
    }
  }

  ngAfterViewInit() {
    if (!this.expandableRow) {
      this._difference--;
    }
    if (!this._selection) {
      this._difference--;
    }

    this.zone.runOutsideAngular(() => {
      const table = this.el.nativeElement.querySelector('[data-table-v2]');
      this.carbonDataTable = new CarbonComponents.DataTableV2(table);

      table.addEventListener('data-table-v2-aftertogglesort', (event: any) => {
        const sortableColumns = document.querySelectorAll('.bx--table-sort-v2');
        for (let i = 0; i < sortableColumns.length; i++) {
          sortableColumns[i].classList.remove('bx--table-sort-v2--active');
        }
        event.detail.element.classList.add('bx--table-sort-v2--active');
        if (event && event.detail) {
          let order: any;
          order = event.detail.element.dataset.previousValue === 'ascending' ? 'desc' : 'asc';
          this.sort.emit({ sortOrder: order, sortColumn: event.detail.label });
        }
        this.carbonDataTable.refreshRows();
      });
    });
  }

  ngAfterViewChecked() {
    this.zone.runOutsideAngular(() => {
      this.carbonDataTable.refreshRows();
    });
  }

  public add(column: CbColumnV2Component) {
    this.columns.push(column);
  }

  public remove(column: CbColumnV2Component) {
    const index = this.columns.indexOf(column);
    if (index !== -1) {
      this.columns.splice(index, 1);
    }
  }

  /**
   * Row selection event handler and notifier
   * @param event
   * @param item
   */
  onRowSelect(event: any, item: any) {
    this.rowSelect.emit({ selected: event.target.checked, item: item });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      this.carbonDataTable.release();
    });
  }

  /**
   * page change event handler of the pagination component
   * @param event {start: number, end: number, currentPage: number}
   */
  onPageChange(event: { start: number, end: number, currentPage: number }) {
    this.pageChange.emit(event);
    this._dataSource = this.originalDataSource.slice(event.start, event.end + 1);
  }

}
