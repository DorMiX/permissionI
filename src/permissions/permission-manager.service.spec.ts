import { TestBed } from '@angular/core/testing';

import { PermissionManagerService } from './permission-manager.service';

describe('PermissionManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionManagerService = TestBed.get(PermissionManagerService);
    expect(service).toBeTruthy();
  });
});
