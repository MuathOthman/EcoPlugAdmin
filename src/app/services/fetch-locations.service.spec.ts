import { TestBed } from '@angular/core/testing';

import { FetchLocationsService } from './fetch-locations.service';

describe('FetchLocationsService', () => {
  let service: FetchLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
