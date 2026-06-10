import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGuideComponent } from './area-guide.component';

describe('AreaGuideComponent', () => {
  let component: AreaGuideComponent;
  let fixture: ComponentFixture<AreaGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
