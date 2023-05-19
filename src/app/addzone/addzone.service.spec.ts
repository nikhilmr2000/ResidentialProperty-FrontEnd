import { TestBed } from '@angular/core/testing';

import { AddzoneService } from './addzone.service';

describe('AddzoneService', () => {
  let service: AddzoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddzoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
