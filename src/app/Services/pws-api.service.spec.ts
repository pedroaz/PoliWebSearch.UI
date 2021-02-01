import { TestBed } from '@angular/core/testing';

import { PwsApiService } from './pws-api.service';

describe('PwsApiService', () => {
  let service: PwsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
