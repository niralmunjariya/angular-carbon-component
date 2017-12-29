import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { CbPaginationConfig } from '../pagination.config';
declare let _: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbPagination',
  template: `
      <style>.bx--pagination .bx--select--inline {
        width: auto;
        min-width: 3rem;
      }</style>
      <div class="bx--pagination">
      <div class="bx--pagination__left">
        <span class="bx--pagination__text">Items per page:</span>
        <div class="bx--select bx--select--inline" style="border-right: 1px solid #dfe3e6;">
          <label class="bx--visually-hidden">Number of items per page</label>
          <select [(ngModel)]="itemsPerPage" (change)="onItemsPerPageChange(itemsPerPage)" class="bx--select-input">
            <option *ngFor="let item of _config.itemsPerPage;let i=index;" class="bx--select-option" [value]="item">{{item}}</option>
          </select>
          <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
        </div>
        <span class="bx--pagination__text" style="margin-left:8px;">
          <span>{{((currentPage-1) * itemsPerPage) + 1}} &ndash; {{currentPage * itemsPerPage > _config.total ? _config.total : currentPage
            * itemsPerPage}}</span> of
          <span>{{_config.total}}</span> items</span>
      </div>
      <div class="bx--pagination__right bx--pagination--inline">
        <span class="bx--pagination__text">
          <span>{{currentPage}}</span> of
          <span>{{pages.length}}</span> pages
        </span>
        <button [ngStyle]="{'cursor': currentPage === 1 ? 'not-allowed': 'pointer'}" [disabled]="currentPage === 1" (click)="onPageChange('backward')"
          class="bx--pagination__button bx--pagination__button--backward" aria-label="Backward button">
          <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
            <path d="M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z"></path>
          </svg>
        </button>
        <label for="page-number-input" class="bx--visually-hidden">Page number input</label>
        <div class="bx--select bx--select--inline">
          <label class="bx--visually-hidden">Number of items per page</label>
          <select [(ngModel)]="currentPage" (change)="onPageChange()" class="bx--select-input">
            <option *ngFor="let page of pages; let i=index;" class="bx--select-option" [value]="page">{{page}}</option>
          </select>
          <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
        </div>
        <button [ngStyle]="{'cursor': currentPage === pages.length ? 'not-allowed': 'pointer'}" [disabled]="currentPage === pages.length"
          (click)="onPageChange('forward')" class="bx--pagination__button bx--pagination__button--forward" aria-label="Forward button">
          <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
            <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
          </svg>
        </button>
      </div>
    </div>
  `
})
export class CbPaginationComponent implements OnInit, AfterViewInit {

  _config: CbPaginationConfig = { total: 0, itemsPerPage: [] };
  paginator: any;
  carbonPaginator: any;
  itemsPerPage: any;
  currentPage: number = 1;
  pages: number[] = [];
  startIndex: number = 0;
  endIndex: number = 0;
  @Input()
  set config(value: any) {
    this._config = value;
  }
  @Input()
  set totalItems(value: any) {
    this._config.total = value;
  }
  @Input()
  set itemsPerPageSelection(value: any) {
    this._config.itemsPerPage = value;
  }
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.itemsPerPage = this._config.itemsPerPage[0];
    this.resetPages();
    this.getCurrentPage();
    // this.pageChange.emit({ currentPage: this.currentPage, start: this.startIndex, end: this.endIndex });
  }

  resetPages() {
    this.currentPage = 1;
    this.pages = [];
    const totalPages = Math.ceil(this._config.total / this.itemsPerPage);
    this.pages = _.range(1, totalPages + 1);
  }

  onItemsPerPageChange(event: any) {
    this.resetPages();
    this.getCurrentPage();
    this.pageChange.emit({ currentPage: this.currentPage, start: this.startIndex, end: this.endIndex });
  }

  onPageChange(direction?: any) {
    if (direction) {
      if (direction === 'forward') {
        this.currentPage++;
      } else {
        this.currentPage--;
      }
    }
    this.getCurrentPage();
    this.pageChange.emit({ currentPage: this.currentPage, start: this.startIndex, end: this.endIndex });
  }

  getCurrentPage(): any {
    this.startIndex = ((this.currentPage - 1) * this.itemsPerPage) + 1;
    this.endIndex = this.currentPage * this.itemsPerPage > this._config.total ? this._config.total : this.currentPage * this.itemsPerPage;
    this.startIndex--;
    this.endIndex--;
  }

  ngAfterViewInit() { }
}
