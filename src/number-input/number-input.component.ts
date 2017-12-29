import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, forwardRef, ElementRef } from '@angular/core';

export const CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CbNumberInputComponent),
  multi: true
};
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbNumberInput',
  template: `
    <div class="bx--form-item">
    <label for="number-input" class="bx--label">{{_label}}</label>
    <div data-numberinput class="bx--number">
      <input type="number" [min]="_min" [max]="_max" [step]="_step" (change)="onChange(_value)" 
      (keyup)="onChange(_value)" [(ngModel)]="_value">
      <div class="bx--number__controls">
        <svg class="up-icon" viewBox="0 -6 10 5" (click)="increment()" width="10" height="5" fill-rule="evenodd">
          <path d="M10 5L5 0 0 5z"></path>
        </svg>
        <svg class="down-icon" viewBox="0 6 10 5" (click)="decrement()" width="10" height="5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
    </div>
  </div>
  `,
  providers: [CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CbNumberInputComponent implements ControlValueAccessor {
  _disabled: any;
  _value: number = this._value || 0;
  _max: any;
  _min: any;
  _step: any = 1;
  _label: string = 'Label';
  onChange: any = () => { };
  onTouched: any = () => { };
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  set value(value: number) {
    this._value = value;
    this.onChange(value);
  }
  @Input()
  set max(value: number) {
    this._max = value;
  }
  @Input()
  set min(value: number) {
    this._min = value;
  }
  @Input()
  set step(value: number) {
    this._step = value || 1;
  }
  @Input()
  set label(value: string) {
    this._label = value;
  }

  constructor(private el: ElementRef) {
    this.el = el;
  }

  increment() {
    if (this._max && this._value < this._max) {
      this._value += Number(this._step);
      this.onChange(this._value);
    }
  }

  decrement() {
    if (this._min && this._value > this._min) {
      this._value -= Number(this._step);
      this.onChange(this._value);
    }
  }

  writeValue(value: any): void {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

}
