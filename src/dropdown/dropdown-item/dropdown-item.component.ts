import { CbDropdownComponent } from './../dropdown.component';
import { Component, OnInit, ElementRef, Inject, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbDropdownItem',
  template: `
      <li data-option data-value="{{value}}" class="bx--dropdown-item">
      <a class="bx--dropdown-link" href="javascript:void(0)">
        <ng-content></ng-content>
      </a>
     </li>`
})
export class CbDropdownItemComponent implements OnInit, OnDestroy, AfterViewInit {

  public _value: any;
  @Input()
  public set value(value: any) {
    this._value = value;
  }
  public get value(): any {
    return this._value;
  }
  @Output()
  public afterSelect: EventEmitter<any> = new EventEmitter<any>();
  protected dropdown: CbDropdownComponent;
  constructor(private el: ElementRef, @Inject(CbDropdownComponent) dropdown: CbDropdownComponent) {
    this.dropdown = dropdown;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.firstElementChild.setAttribute('data-value', this.value);
    this.dropdown.add(this);
  }

  ngOnDestroy(): void {
    this.dropdown.remove(this);
  }

}
