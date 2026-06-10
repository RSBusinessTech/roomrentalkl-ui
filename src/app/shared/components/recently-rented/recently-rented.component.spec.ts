import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyRentedComponent } from './recently-rented.component';

describe('RecentlyRentedComponent', () => {
  let component: RecentlyRentedComponent;
  let fixture: ComponentFixture<RecentlyRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
