import { CbDropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { CbDropdownConfig } from './dropdown.config';
import { CbDropdownComponent } from './dropdown.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CbDropdownComponent, CbDropdownItemComponent],
  providers: [CbDropdownConfig],
  declarations: [CbDropdownComponent, CbDropdownItemComponent],
  entryComponents: [CbDropdownComponent]
})
export class CbDropdownModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: CbDropdownModule, providers: [CbDropdownConfig] };
  }
}
