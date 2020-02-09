import { TestBed } from '@angular/core/testing';

import { AngularCesiumLibraryService } from './angular-cesium-library.service';

describe('AngularCesiumLibraryService', () => {
  let service: AngularCesiumLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCesiumLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
