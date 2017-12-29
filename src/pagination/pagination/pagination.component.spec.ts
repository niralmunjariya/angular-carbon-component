import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbPaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: CbPaginationComponent;
  let fixture: ComponentFixture<CbPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CbPaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
