import { CbOverflowMenuItemComponent } from './overflow-menu-item/overflow-menu-item.component';
import { CbOverflowMenuConfig } from './overflow-menu.config';
import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, ViewChildren, ContentChildren, OnDestroy, Input } from '@angular/core';
import { NgZone } from '@angular/core';
// import { OverflowMenu } from 'carbon-components';
declare let CarbonComponents: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbOverflowMenu',
  template: `
      <div class="bx--overflow-menu">
        <ng-content select="[overflow-menu-trigger]"></ng-content>
        <ul class="bx--overflow-menu-options" [ngClass]="{'bx--overflow-menu--flip': placement === 'left'}">
          <ng-content></ng-content>
        </ul>
      </div>`
})
export class CbOverflowMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  _placement = 'left';
  @Input()
  set placement(value: any) {
    this._placement = value;
  }
  get placement(): any {
    return this._placement;
  }
  protected menuItems: CbOverflowMenuItemComponent[] = [];
  carbonOverflowMenu: any;
  constructor(private el: ElementRef, _config: CbOverflowMenuConfig, private zone: NgZone) {
    Object.assign(this, _config);
  }
  ngOnInit() {
  }

  /**
   * Adds menu item to the overflow menu
   * @param item OverflowMenuItemComponent
   */
  public add(item: CbOverflowMenuItemComponent): void {
    this.menuItems.push(item);
  }

  /**
   * Removes a menu item from the overflow menu
   * @param item OverflowMenuItemComponent
   */
  public remove(item: CbOverflowMenuItemComponent): void {
    const i = this.menuItems.indexOf(item);
    if (i !== -1) {
      this.menuItems.splice(i, 1);
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const menuItems = this.el.nativeElement.querySelector('ul.bx--overflow-menu-options');
      if (menuItems) {
        menuItems.style['z-index'] = 9999;
      }
      this.carbonOverflowMenu = new CarbonComponents.OverflowMenu(this.el.nativeElement.firstElementChild);
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      this.carbonOverflowMenu.release();
      this.el.nativeElement.remove();
    });
  }

}
