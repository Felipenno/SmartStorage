import { TestBed } from '@angular/core/testing';

import { BaseRestCommunicationService } from './base-rest-communication.service';

describe('BaseRestCommunicationService', () => {
  let service: BaseRestCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRestCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
