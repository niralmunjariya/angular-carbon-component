import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare let CarbonComponents: any;
CarbonComponents.settings.disableAutoInit = true;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'ngx-carbon-component';
  items = [];
  toggle = false;
  ngOnInit() {
    setTimeout(() => {
      this.items = [
        {
          name: 'name 1',
          value: 'value 1'
        },
        {
          name: 'name 2',
          value: 'value 2'
        },
        {
          name: 'name 3',
          value: 'value 3'
        },
        {
          name: 'name 4',
          value: 'value 4'
        },
        {
          name: 'name 5',
          value: 'value 5'
        }
      ];
    }, 0);
  }

  ngAfterViewInit(): void {
  }

  onBeforeDelete(event: any): void {
    console.log('Notification before delete called');
  }

  onAfterDelete(event: any): void {
    console.log('Notification after delete called');
  }

  alertMe(item): void {
    alert(item.value);
  }

  onSelect(item: any): void {
    console.log('item selected from dropdown', item);
  }

  onChange(event: any): void {
    console.log('on change called', event);
  }

  onTabSelect(event: any) {
    console.log('tab selected', event);
  }
}
