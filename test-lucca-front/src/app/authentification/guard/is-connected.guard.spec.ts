import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { IsConnectedGuard } from './is-connected.guard';

describe('IsConnectedGuard', () => {
  let guard: IsConnectedGuard;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
      ],
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthService);
    guard = TestBed.inject(IsConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false for canActivate() when no user is logged in', ()=> {
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBe(false);
  });

  it('should return true for canActivate() when a user is logged in', ()=> {
    var user: string = "";
    var pwd: string= "";
    service.loginUser(user, pwd);
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBe(true);
  });

});
