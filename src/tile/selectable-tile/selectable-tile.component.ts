import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SELECTABLE_TILE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CbSelectableTileComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbSelectableTile',
  template: `
  <label aria-label="tile" class="bx--tile bx--tile--selectable" data-tile="selectable" tabindex="0">
    <input tabindex="-1" data-tile-input class="bx--tile-input" [(ngModel)]="_selected" (change)="onClick(_selected)"  type="checkbox" />
    <div class="bx--tile__checkmark">
    <svg width='16' height='16' viewBox='0 0 16 16' fill-rule='evenodd'>
      <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z'></path>
    </svg>
    </div>
    <div class="bx--tile-content">
      <ng-content></ng-content>
    </div>
  </label>
  `,
  providers: [SELECTABLE_TILE_CONTROL_VALUE_ACCESSOR]
})
export class CbSelectableTileComponent implements OnInit, ControlValueAccessor {

  @Input()
  set selected(value: any) {
    this._selected = value;
    this.onChange(value);
  }
  _selected: any = false;
  onChange: any = () => { };
  onTouched: any = () => { };
  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    if (value) {
      this.selected = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onClick(event: any) {
    this.onChange(this._selected);
  }

}
