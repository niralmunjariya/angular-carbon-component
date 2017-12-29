import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableV2Component } from './data-table-v2.component';

describe('DataTableV2Component', () => {
  let component: DataTableV2Component;
  let fixture: ComponentFixture<DataTableV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
