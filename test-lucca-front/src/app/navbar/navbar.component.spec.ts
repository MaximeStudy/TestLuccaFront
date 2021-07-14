import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../authentification/services/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        AuthService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contains Login', () => {
    var a = fixture.nativeElement.querySelector('#login');
    expect(a.textContent).toEqual('Login');

    expect(component).toBeTruthy();
  });

  it('should contains Sign up', () => {
    var a = fixture.nativeElement.querySelector('#sign-up');
    expect(a.textContent).toEqual('Sign up');

    expect(component).toBeTruthy();
  });

  it('should not contains contains Logout', () => {
    var logout = fixture.nativeElement.querySelector('#logout');

    expect(logout).toBeNull();
  });

  
  it('should not contains Chat', () => {
    var chat = fixture.nativeElement.querySelector('#chat');

    expect(chat).toBeNull();
  });

  it('should contains Chat when connected', () => {
    authSpy =
    jasmine.createSpyObj('AuthService', ['isAuthenticated']);

    authSpy.isAuthenticated.and.returnValue(isAuthenticated);
    component = new NavbarComponent(authSpy);
    var chat = fixture.nativeElement.querySelector('#chat');
    debugger;
    expect(chat.textContent).toEqual('Chat');

    expect(chat).toBeTruthy();
  });

  function isAuthenticated() : Observable<boolean> {
    console.log("hello");
    return new BehaviorSubject<boolean>(true).asObservable();
  }
});
