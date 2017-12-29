import { CbTooltipDirective } from './tooltip.directive';
import { CbTooltipConfig } from './tooltip.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CbTooltipDirective],
  declarations: [CbTooltipDirective]
})
export class CbTooltipModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: CbTooltipModule, providers: [CbTooltipConfig] };
  }
}
