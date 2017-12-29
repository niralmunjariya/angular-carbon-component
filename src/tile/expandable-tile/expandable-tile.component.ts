import { Component, ElementRef, AfterViewInit, OnDestroy, EventEmitter, Output, NgZone } from '@angular/core';
declare let CarbonComponents: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbExpandableTile',
  template: `
  <div data-tile="expandable" class="bx--tile bx--tile--expandable" tabindex="0" (click)="toggleTile()">
    <button class="bx--tile__chevron">
      <svg width="12" height="8" viewBox="0 0 12 8" fill-rule="evenodd">
        <path d="M10.6 0L6 4.7 1.4 0 0 1.4l6 6.1 6-6.1z"></path>
      </svg>
    </button>
    <div class="bx--tile-content">
      <span data-tile-atf class="bx--tile-content__above-the-fold">
        <ng-content></ng-content>
      </span>
      <span class="bx--tile-content__below-the-fold">
        <ng-content select="[fold]"></ng-content>
      </span>
    </div>
  </div>
  `
})
export class CbExpandableTileComponent implements AfterViewInit, OnDestroy {

  carbonTile: any;
  @Output() onExpand: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef, private zone: NgZone) {
    this.el = el;
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const tile = this.el.nativeElement.firstElementChild;
      this.carbonTile = new CarbonComponents.Tile(tile);
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      this.carbonTile.destroy();
    });
  }

  toggleTile() {
    this.el.nativeElement.firstElementChild.classList.contains('bx--tile--is-expanded') ? this.onClose.emit() : this.onExpand.emit();
  }

}
