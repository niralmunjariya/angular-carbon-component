import { element } from 'protractor';
import { CbOverflowMenuComponent } from './../overflow-menu.component';
import { Component, OnInit, ElementRef, AfterViewInit, Inject, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbOverflowMenuItem',
  template: `<li class="bx--overflow-menu-options__option">
                <ng-content></ng-content>
             </li>`
})
export class CbOverflowMenuItemComponent implements OnInit, AfterViewInit, OnDestroy {

  protected overflowMenu: CbOverflowMenuComponent;
  constructor(private el: ElementRef, @Inject(CbOverflowMenuComponent) overflowMenu: CbOverflowMenuComponent) {
    this.overflowMenu = overflowMenu;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add('bx--overflow-menu-options__option');
    if (this.el.nativeElement.firstElementChild.firstElementChild) {
      this.el.nativeElement.firstElementChild.firstElementChild.classList.add('bx--overflow-menu-options__btn');
    }
    this.overflowMenu.add(this);
  }

  ngOnDestroy(): void {
    this.overflowMenu.remove(this);
  }

}
