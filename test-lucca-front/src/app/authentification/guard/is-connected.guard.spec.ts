import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { IsConnectedGuard } from './is-connected.guard';

describe('IsConnectedGuard', () => {
  let guard: IsConnectedGuard;
  let service: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
      ],
      imports: [
        RouterTestingModule
      ]
    });
    router = TestBed.inject(Router);
    service = TestBed.inject(AuthService);
    guard = TestBed.inject(IsConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false for canActivate() when no user are logged in', ()=> {
    spyOn(router, 'navigate');
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBe(false);
  });


  it('should return true for canActivate() when a user are logged in', ()=> {
    spyOn(router, 'navigate');
    var user: string = "";
    var pwd: string= "";
    service.loginUser(user, pwd);
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBe(true);
  });

  it('should redirect to /authentification/login when authentication not valid', ()=> {
    let spyRouter = spyOn(router, 'navigate');

    guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(spyRouter).toHaveBeenCalledWith(['/authentification/login']);
  });
});