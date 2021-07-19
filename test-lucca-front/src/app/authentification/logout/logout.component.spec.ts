import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let authService: AuthService;
  let router: Router;
  let spyRouterNavigate: jasmine.Spy;
  let spyAuthLogout: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [
        AuthService,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    spyRouterNavigate = spyOn(router, 'navigate');
    spyAuthLogout = spyOn(authService, 'logoutUser');

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
    expect(spyAuthLogout).toHaveBeenCalled();
  });

  it('should redirect on login when logout', () => {  
    expect(spyRouterNavigate).toHaveBeenCalledWith(['/authentification/login']);
  });
});
