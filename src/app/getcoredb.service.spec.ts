import { TestBed, inject } from '@angular/core/testing';

import { GetCoreDBService } from './getcoredb.service';

describe('GetCoreDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCoreDBService]
    });
  });

  it('should be created', inject([GetCoreDBService], (service: GetCoreDBService) => {
    expect(service).toBeTruthy();
  }));
});
