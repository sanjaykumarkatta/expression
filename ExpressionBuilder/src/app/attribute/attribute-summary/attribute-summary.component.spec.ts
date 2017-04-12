import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSummaryComponent } from './attribute-summary.component';

describe('AttributeSummaryComponent', () => {
  let component: AttributeSummaryComponent;
  let fixture: ComponentFixture<AttributeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
