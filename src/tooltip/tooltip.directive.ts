import { Directive, ElementRef, AfterViewInit, Input, ContentChild, NgZone } from '@angular/core';
import { TemplateRef, Renderer, OnDestroy, ViewContainerRef } from '@angular/core';
// import { Tooltip } from 'carbon-components';
declare let CarbonComponents: any;
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cbTooltip]'
})
export class CbTooltipDirective implements AfterViewInit, OnDestroy {

  _tooltip: any;
  @Input()
  public set cbTooltip(value: any) {
    if (value instanceof TemplateRef) {
      // handling of template
      const templateEl = value.elementRef.nativeElement;
      this._tooltip = value;
    } else {
      this._tooltip = value;
    }
  }

  @Input()
  public direction = 'bottom';
  carbonTooltip: any;
  constructor(private el: ElementRef,
    private renderer: Renderer,
    private vr: ViewContainerRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.parentElement.setAttribute('data-floating-menu-container', '');
      const generatedId = 'tooltip' + Math.round(Math.random() * 99999999);
      this.el.nativeElement.setAttribute('data-tooltip-target', '#' + generatedId);
      const tooltipElement = this.renderer.createElement(this.el.nativeElement.parentNode, 'div');
      tooltipElement.innerHTML = this._tooltip;
      tooltipElement.setAttribute('id', generatedId);
      tooltipElement.setAttribute('class', 'bx--tooltip');
      tooltipElement.setAttribute('data-floating-menu-direction', this.direction);
      tooltipElement.style['z-index'] = 9999;
      this.carbonTooltip = new CarbonComponents.Tooltip(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      this.carbonTooltip.release();
    });
  }

}
