import { TestBed } from '@angular/core/testing';

import { FinacialService } from './finacial.service';

describe('FinacialService', () => {
  let service: FinacialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinacialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
