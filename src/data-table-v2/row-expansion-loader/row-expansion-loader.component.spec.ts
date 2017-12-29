import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbRowExpansionLoaderComponent } from './row-expansion-loader.component';

describe('RowExpansionLoaderComponent', () => {
  let component: CbRowExpansionLoaderComponent;
  let fixture: ComponentFixture<CbRowExpansionLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CbRowExpansionLoaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbRowExpansionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
