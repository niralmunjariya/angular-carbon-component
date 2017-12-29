import { Injectable } from '@angular/core';

@Injectable()
export class CbNotificationConfig {
    public type = 'info'; // info, warning, success, danger
    public modifier = 'inline'; // "inline" or "toast"
    public closable = false;
}
