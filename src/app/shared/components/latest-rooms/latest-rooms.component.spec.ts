import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRoomsComponent } from './latest-rooms.component';

describe('LatestRoomsComponent', () => {
  let component: LatestRoomsComponent;
  let fixture: ComponentFixture<LatestRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
