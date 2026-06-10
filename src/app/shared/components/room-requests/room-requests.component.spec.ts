import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRequestsComponent } from './room-requests.component';

describe('RoomRequestsComponent', () => {
  let component: RoomRequestsComponent;
  let fixture: ComponentFixture<RoomRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
