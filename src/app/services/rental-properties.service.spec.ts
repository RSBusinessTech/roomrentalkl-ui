import { TestBed } from '@angular/core/testing';

import { RentalPropertiesService } from './rental-properties.service';

describe('RentalPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentalPropertiesService = TestBed.get(RentalPropertiesService);
    expect(service).toBeTruthy();
  });
});
