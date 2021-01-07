import { TestBed } from '@angular/core/testing';

import { SocialLogService } from './social-log.service';

describe('SocialLogService', () => {
  let service: SocialLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
