import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CbModule } from 'angular-carbon-component';
import { CommonModule } from '@angular/common/src/common_module';
import { AccordionComponent } from './accordion/accordion.component';
import { OverflowMenuComponent } from './overflow-menu/overflow-menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DataTableV2Component } from './data-table-v2/data-table-v2.component';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    OverflowMenuComponent,
    TabsComponent,
    DropdownComponent,
    DataTableV2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CbModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
