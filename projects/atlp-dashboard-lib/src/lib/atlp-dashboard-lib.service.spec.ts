import { TestBed } from '@angular/core/testing';

import { AtlpDashboardLibService } from './atlp-dashboard-lib.service';

describe('AtlpDashboardLibService', () => {
  let service: AtlpDashboardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtlpDashboardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
