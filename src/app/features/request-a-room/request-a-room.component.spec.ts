import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestARoomComponent } from './request-a-room.component';

describe('RequestARoomComponent', () => {
  let component: RequestARoomComponent;
  let fixture: ComponentFixture<RequestARoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestARoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestARoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
