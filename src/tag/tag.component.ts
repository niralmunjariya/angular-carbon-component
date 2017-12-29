import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbTag',
  template: `<span class="bx--tag"><ng-content></ng-content></span>`
})
export class CbTagComponent implements OnInit {

  _tagType: any;
  @Input()
  set type(value: any) {
    this._tagType = value || '';
  }
  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.firstElementChild.classList.add(this.getClassFromType());
  }


  getClassFromType(): string {
    switch (this._tagType) {
      case 'primary':
        return 'bx--tag--ibm';
      case 'success':
        return 'bx--tag--community';
      case 'warning':
        return 'bx--tag--private';
      default:
        return 'bx--tag--beta';
    }
  }

}
