import { TestBed } from '@angular/core/testing';

import { PropertyformService } from './propertyform.service';

describe('PropertyformService', () => {
  let service: PropertyformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
