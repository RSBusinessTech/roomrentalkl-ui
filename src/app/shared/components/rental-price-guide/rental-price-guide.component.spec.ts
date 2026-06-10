import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPriceGuideComponent } from './rental-price-guide.component';

describe('RentalPriceGuideComponent', () => {
  let component: RentalPriceGuideComponent;
  let fixture: ComponentFixture<RentalPriceGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPriceGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPriceGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
