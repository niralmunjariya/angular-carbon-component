import { CbOverflowMenuComponent } from './overflow-menu.component';
import { CbOverflowMenuItemComponent } from './overflow-menu-item/overflow-menu-item.component';
import { CbOverflowMenuConfig } from './overflow-menu.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CbOverflowMenuComponent, CbOverflowMenuItemComponent],
  providers: [CbOverflowMenuConfig],
  declarations: [CbOverflowMenuComponent, CbOverflowMenuItemComponent],
  entryComponents: [CbOverflowMenuComponent, CbOverflowMenuItemComponent]
})
export class CbOverflowMenuModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: CbOverflowMenuModule, providers: [CbOverflowMenuConfig] };
  }
}
