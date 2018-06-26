import { TestBed, inject } from '@angular/core/testing';

import { AlignedMotifMapService } from './aligned-motif-map.service';

describe('AlignedMotifMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlignedMotifMapService]
    });
  });

  it('should be created', inject([AlignedMotifMapService], (service: AlignedMotifMapService) => {
    expect(service).toBeTruthy();
  }));
});
