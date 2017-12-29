import { element } from 'protractor';
import { CbDropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { CbDropdownConfig } from './dropdown.config';
import { Component, OnInit, AfterViewInit, OnDestroy, Input, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';
// import { Dropdown } from 'carbon-components';
declare let CarbonComponents: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbDropdown',
  template: `
    <ul class="bx--dropdown">
    <li class="bx--dropdown-text">{{placeholder}}</li>
    <svg class="bx--dropdown__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
      <path d="M10 0L5 5 0 0z"></path>
    </svg>
    <li>
      <ul class="bx--dropdown-list">
        <ng-content></ng-content>
      </ul>
    </li>
  </ul>`
})
export class CbDropdownComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() placeholder: any = this.placeholder || 'Choose an option';
  _navigate: any;
  @Input()
  public set navigate(value: any) {
    this._navigate = value;
  }
  @Output()
  public select: EventEmitter<any> = new EventEmitter<any>();
  protected dropdownItems: CbDropdownItemComponent[] = [];
  carbonDropdown: any;
  constructor(_config: CbDropdownConfig, private el: ElementRef, private zone: NgZone) {
    Object.assign(this, _config);
  }

  ngOnInit() {
  }

  /**
   * Adds a dropdown item to the dropdown menu
   * @param item DropdownItemComponent
   */
  public add(item: CbDropdownItemComponent): void {
    this.dropdownItems.push(item);
  }

  /**
   * Removes a dropdown item from the dropdown menu
   * @param item DropdownItemComponent
   */
  public remove(item: CbDropdownItemComponent): void {
    const i = this.dropdownItems.indexOf(item);
    if (i !== -1) {
      this.dropdownItems.splice(i, 1);
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const dropdown = this.el.nativeElement.firstElementChild;
      this.carbonDropdown = new CarbonComponents.Dropdown(dropdown);
      const parent = this;
      dropdown.addEventListener('dropdown-selected', (event: any) => {
        parent.select.emit(event.target.getAttribute('data-value'));
      });
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      this.carbonDropdown.release();
    });
  }

}
