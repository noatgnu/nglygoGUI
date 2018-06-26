import { TestBed, inject } from '@angular/core/testing';

import { MotifDataService } from './motif-data.service';

describe('MotifDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotifDataService]
    });
  });

  it('should be created', inject([MotifDataService], (service: MotifDataService) => {
    expect(service).toBeTruthy();
  }));
});
