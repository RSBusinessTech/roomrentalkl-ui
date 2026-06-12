import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitStationsComponent } from './transit-stations.component';

describe('TransitStationsComponent', () => {
  let component: TransitStationsComponent;
  let fixture: ComponentFixture<TransitStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
