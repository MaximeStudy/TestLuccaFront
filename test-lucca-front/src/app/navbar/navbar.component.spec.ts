import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../authentification/services/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAuthService: AuthService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        AuthService,
      ],
    });
  });


  async function initializerWithoutAuthenticatedUser() {
    mockAuthService = new MockAuthServiceWithoutAuthenticatedUser();
    TestBed.overrideProvider(AuthService, { useValue: mockAuthService });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  async function initializerWithAuthenticatedUser() {
    mockAuthService = new MockAuthServiceWithAuthenticatedUser();
    TestBed.overrideProvider(AuthService, { useValue: mockAuthService });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }


  it('should create', () => {
    initializerWithoutAuthenticatedUser();
    expect(component).toBeTruthy();
  });


  it('should contains Login when not connected', () => {
    initializerWithoutAuthenticatedUser();

    var login = fixture.nativeElement.querySelector('#login');
    expect(login.textContent).toEqual('Login');

    expect(component).toBeTruthy();
  });

  it('should contains Sign up when not connected', () => {
    initializerWithoutAuthenticatedUser();

    var signup = fixture.nativeElement.querySelector('#sign-up');
    expect(signup.textContent).toEqual('Sign up');

    expect(component).toBeTruthy();
  });

  it('should not contains contains Logout when not connected', () => {
    initializerWithoutAuthenticatedUser();

    var logout = fixture.nativeElement.querySelector('#logout');

    expect(logout).toBeNull();
  });

  it('should not contains contains hello user when not connected', () => {
    initializerWithoutAuthenticatedUser();

    var helloUser = fixture.nativeElement.querySelector('#hello');

    expect(helloUser).toBeNull();
  });

  
  it('should not contains Chat when not connected', () => {
    initializerWithoutAuthenticatedUser();

    var chat = fixture.nativeElement.querySelector('#chat');

    expect(chat).toBeNull();
  });


  it('should contains Chat when connected', () => {
    initializerWithAuthenticatedUser();
    
    var chat = fixture.nativeElement.querySelector('#chat');
    
    expect(chat.textContent).toEqual('Chat');
  });

  it('should contains hello user when connected', () => {
    initializerWithAuthenticatedUser();
    
    var helloUser = fixture.nativeElement.querySelector('#hello');
    
    expect(helloUser.textContent).toEqual('Hello Maxime');
  });


  class MockAuthServiceWithoutAuthenticatedUser extends AuthService {
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(false).asObservable();
    }
  }

  class MockAuthServiceWithAuthenticatedUser extends AuthService {
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(true).asObservable();
    }

    getUsername() : Observable<string> {
      return new BehaviorSubject<string>("Maxime").asObservable();
    }
  }

});
