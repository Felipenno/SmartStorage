import { TestBed } from '@angular/core/testing';

import { SecurityHandlerService } from './security-handler.service';

describe('SecurityHandlerService', () => {
  let service: SecurityHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
