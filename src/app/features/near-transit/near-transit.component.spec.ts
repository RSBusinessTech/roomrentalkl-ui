import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearTransitComponent } from './near-transit.component';

describe('NearTransitComponent', () => {
  let component: NearTransitComponent;
  let fixture: ComponentFixture<NearTransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearTransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
