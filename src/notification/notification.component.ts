import { ElementRef, NgZone } from '@angular/core';
import { Input, Component, HostListener, AfterViewChecked, Output, EventEmitter, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CbNotificationConfig } from './notification.config';
// import { Notification } from 'carbon-components';
declare let CarbonComponents: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cbNotification',
  template: `
  <ng-container *ngIf="!isClosed">
  <div #notification data-notification [class]="'bx--'+modifier+'-notification bx--'+modifier+'-notification--' + type" role="alert">
    <div class="'bx--'+modifier+'-notification__details'">
      <div [class]="'bx--'+modifier+'-notification__text-wrapper'">
        <ng-content></ng-content>
      </div>
    </div>
    <ng-container *ngIf="closable">
      <button data-notification-btn [class]="'bx--'+modifier+'-notification__close-button'" type="button">
            <svg class="'bx--'+modifier+'-notification__close-icon'" aria-label="close" width="10" height="10"
            viewBox="0 0 10 10" fill-rule="evenodd">
               <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
            </svg>
      </button>
    </ng-container>
  </div>
</ng-container> `
})
export class CbNotificationComponent implements AfterViewInit, OnDestroy {

  @Input() public type = 'info';
  @Input() public closable = false;
  @Input() public modifier = 'inline';
  @Output()
  public beforeDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public afterDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('notification') elNotification: ElementRef;
  public isClosed = false;
  notification: any;
  carbonNotification: any;

  constructor(_config: CbNotificationConfig, private zone: NgZone) {
    Object.assign(this, _config);
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.notification = this.elNotification.nativeElement;
      this.carbonNotification = new CarbonComponents.Notification(this.notification);
      this.notification.addEventListener('notification-before-delete', () => {
        this.beforeDelete.emit();
      });
      this.notification.addEventListener('notification-after-delete', () => {
        this.afterDelete.emit();
      });
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      this.carbonNotification.release();
    });
  }

}
