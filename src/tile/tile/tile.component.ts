import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbTile',
  template: `
  <div class="bx--tile">
    <ng-content></ng-content>
  </div>
  `
})
export class CbTileComponent {

  constructor() {
  }

}
