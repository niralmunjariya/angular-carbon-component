import { CbTabComponent } from './tab/tab.component';
import { CbTabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbTabsComponent, CbTabComponent],
  declarations: [CbTabsComponent, CbTabComponent],
  entryComponents: [CbTabsComponent]
})
export class CbTabsModule { }
