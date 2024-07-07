import { TestBed } from '@angular/core/testing';

import { HangGameService } from './hang-game.service';

describe('HangGameService', () => {
  let service: HangGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
