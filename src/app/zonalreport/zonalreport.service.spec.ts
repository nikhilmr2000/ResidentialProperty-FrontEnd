import { TestBed } from '@angular/core/testing';

import { ZonalreportService } from './zonalreport.service';

describe('ZonalreportService', () => {
  let service: ZonalreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonalreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
