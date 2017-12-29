// Imports
import { CbToggleModule } from './toggle/toggle.module';
import { CbTooltipModule } from './tooltip/tooltip.module';
import { CbTabsModule } from './tabs/tabs.module';
import { CbOverflowMenuModule } from './overflow-menu/overflow-menu.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CbNotificationModule } from './notification/notification.module';
import { CbDropdownModule } from './dropdown/dropdown.module';
import { CbTileModule } from './tile/tile.module';
import { CbTagComponent } from './tag/tag.component';
import { CbButtonDirective } from './button/button.directive';
import { CbTagModule } from './tag/tag.module';
import { CbButtonModule } from './button/button.module';
import { CbColumnComponent } from './data-table/column/column.component';
import { CbDataTableComponent } from './data-table/data-table.component';

import { CbColumnV2Component } from './data-table-v2/column/column-v2.component';
import { CbDataTableV2Component } from './data-table-v2/data-table-v2.component';
import { CbDataTableV2Module } from './data-table-v2/data-table-v2.module';

import { CbNumberInputComponent } from './number-input/number-input.component';
import { CbAccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { CbAccordionComponent } from './accordion/accordion.component';
import { CbDataTableModule } from './data-table/data-table.module';
import { CbNumberInputModule } from './number-input/number-input.module';
import { CbAccordionModule } from './accordion/accordion.module';
import { CbPaginationModule } from './pagination';
// Exports
export { CbDropdownModule, CbDropdownConfig, CbDropdownComponent, CbDropdownItemComponent } from './dropdown';
export { CbNotificationModule, CbNotificationComponent } from './notification';
export { CbOverflowMenuModule, CbOverflowMenuConfig, CbOverflowMenuComponent, CbOverflowMenuItemComponent } from './overflow-menu';
export { CbTabsModule, CbTabComponent, CbTabsComponent } from './tabs';
export { CbToggleModule, CbToggleComponent } from './toggle';
export { CbTooltipModule, CbTooltipConfig, CbTooltipDirective } from './tooltip';
export { CbAccordionModule, CbAccordionComponent, CbAccordionItemComponent } from './accordion';
export { CbNumberInputComponent, CbNumberInputModule } from './number-input';
export { CbDataTableComponent, CbDataTableModule, CbColumnComponent } from './data-table';
export { CbDataTableV2Component, CbDataTableV2Module, CbColumnV2Component } from './data-table-v2';
export { CbButtonDirective, CbButtonModule } from './button';
export { CbTagComponent, CbTagModule } from './tag';
export { CbTileModule } from './tile';
export { CbPaginationModule } from './pagination';


const CB_MODULES = [
  CbDropdownModule, CbNotificationModule, CbOverflowMenuModule, CbTabsModule,
  CbToggleModule, CbTooltipModule, CbAccordionModule, CbNumberInputModule,
  CbDataTableModule, CbDataTableV2Module, CbButtonModule, CbTagModule, CbTileModule,
  CbPaginationModule
];

@NgModule({
  imports: [
    CbDropdownModule.forRoot(),
    CbNotificationModule.forRoot(),
    CbOverflowMenuModule.forRoot(),
    CbTooltipModule.forRoot(),
    CbToggleModule,
    CbTabsModule,
    CbAccordionModule,
    CbNumberInputModule,
    CbDataTableModule,
    CbDataTableV2Module,
    CbButtonModule,
    CbTagModule,
    CbTileModule,
    CbPaginationModule
  ],
  exports: CB_MODULES
})
export class CbRootModule {
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({ imports: CB_MODULES, exports: CB_MODULES })
export class CbModule {
  static forRoot(): ModuleWithProviders { return { ngModule: CbRootModule }; }
}
