import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAreasComponent } from './compare-areas.component';

describe('CompareAreasComponent', () => {
  let component: CompareAreasComponent;
  let fixture: ComponentFixture<CompareAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
