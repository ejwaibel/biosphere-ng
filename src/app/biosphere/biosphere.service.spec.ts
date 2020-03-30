import { TestBed } from '@angular/core/testing';

import { BiosphereService } from './biosphere.service';

describe('BiosphereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiosphereService = TestBed.get(BiosphereService);
    expect(service).toBeTruthy();
  });
});
