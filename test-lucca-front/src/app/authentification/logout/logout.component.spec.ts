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
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
   
    
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {

    let spyLogout = spyOn(authService, 'logoutUser');
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(spyLogout).toHaveBeenCalled();
  });

  it('should redirect on login when logout', () => {
    spyOn(authService, 'logoutUser');
    let spyRouter = spyOn(router, 'navigate');

    component.ngOnInit();
  
    expect(spyRouter).toHaveBeenCalledWith(['/authentification/login']);
  });
});
