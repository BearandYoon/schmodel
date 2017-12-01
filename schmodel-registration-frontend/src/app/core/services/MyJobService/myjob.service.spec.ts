import { TestBed, inject } from '@angular/core/testing';

import { MyJobService } from './myjob.service';

describe('MyJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyJobService]
    });
  });

  it('should be created', inject([MyJobService], (service: MyJobService) => {
    expect(service).toBeTruthy();
  }));
});
