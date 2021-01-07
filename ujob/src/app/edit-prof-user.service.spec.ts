import { TestBed } from '@angular/core/testing';

import { EditProfUserService } from './edit-prof-user.service';

describe('EditProfUserService', () => {
  let service: EditProfUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProfUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
