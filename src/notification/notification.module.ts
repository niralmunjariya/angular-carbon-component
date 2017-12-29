import { CbNotificationConfig } from './notification.config';
import { CbNotificationComponent } from './notification.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CbNotificationComponent],
  providers: [CbNotificationConfig],
  declarations: [CbNotificationComponent],
  entryComponents: [CbNotificationComponent]
})
export class CbNotificationModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: CbNotificationModule, providers: [CbNotificationConfig] };
  }
}
