import { Component, OnInit, Input, Renderer, ElementRef, forwardRef, Output, EventEmitter, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CbToggleComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbToggle',
  template: `
  <div (click)="toggle()" class="bx--form-item">
    <input class="bx--toggle" type="checkbox">
    <label class="bx--toggle__label">
      <span class="bx--toggle__text--left">{{offLabel}}</span>
      <span class="bx--toggle__appearance"></span>
      <span class="bx--toggle__text--right">{{onLabel}}</span>
    </label>
  </div>`,
  providers: [CUSTOM_CHECKBOX_CONTROL_VALUE_ACCESSOR]
})
export class CbToggleComponent implements OnInit, ControlValueAccessor {

  // Options
  @Input() onLabel: any = this.onLabel || 'On';
  @Input() offLabel: any = this.offLabel || 'Off';
  @Input()
  set disabled(value: any) {
    this._disabled = value === 'true';
  }
  @Input()
  set selected(value: any) {
    this._selected = value === 'true';
  }


  // Events
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  private toggleSelector = '.bx--toggle';
  _value = false;
  _disabled = false;
  _selected = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.change.emit(val);
    this.onTouched();
  }

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    if (this._disabled) {
      this.setAttribute('disabled', true);
    } else {
      this.unsetAttribute('disabled');
    }
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
    this.value = this._selected;
    if (this._selected) {
      this.setAttribute('checked', true);
    } else {
      this.unsetAttribute('checked');
    }
  }

  toggle() {
    if (!this._disabled) {
      this.value = !this.value;
      if (this.value) {
        this.setAttribute('checked', true);
      } else {
        this.unsetAttribute('checked');
      }
    }
  }

  setAttribute(attribute: string, value: any): void {
    this.el.nativeElement.querySelector(this.toggleSelector).setAttribute(attribute, value);
  }

  unsetAttribute(attribute: string): void {
    this.el.nativeElement.querySelector(this.toggleSelector).removeAttribute(attribute);
  }


}
