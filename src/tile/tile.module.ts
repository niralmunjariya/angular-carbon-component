import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbTileComponent } from './tile/tile.component';
import { CbClickableTileComponent } from './clickable-tile/clickable-tile.component';
import { CbSelectableTileComponent } from './selectable-tile/selectable-tile.component';
import { CbExpandableTileComponent } from './expandable-tile/expandable-tile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CbTileComponent, CbClickableTileComponent, CbSelectableTileComponent, CbExpandableTileComponent],
  declarations: [CbTileComponent, CbClickableTileComponent, CbSelectableTileComponent, CbExpandableTileComponent],
  entryComponents: [CbTileComponent, CbClickableTileComponent, CbSelectableTileComponent, CbExpandableTileComponent]
})
export class CbTileModule { }
