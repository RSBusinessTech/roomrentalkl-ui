import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrtStationsComponent } from './mrt-stations.component';

describe('MrtStationsComponent', () => {
  let component: MrtStationsComponent;
  let fixture: ComponentFixture<MrtStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrtStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrtStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
