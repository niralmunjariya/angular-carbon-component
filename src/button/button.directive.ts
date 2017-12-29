import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cbButton]'
})
export class CbButtonDirective implements OnInit {

  _isSmall: any;
  _buttonType: any;
  @Input()
  set cbButton(value: any) {
    this._buttonType = value || 'primary';
  }
  @Input()
  set small(value: any) {
    this._isSmall = true;
  }
  constructor(private el: ElementRef) {
    this.el = el;
    this.el.nativeElement.classList.add('bx--btn');
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add(`bx--btn--${this._buttonType}`);
    if (this._isSmall) {
      this.el.nativeElement.classList.add('bx--btn--sm');
    }
  }

}
