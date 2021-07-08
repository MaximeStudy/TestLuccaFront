import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
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

  it('should contains Chat', () => {
    var a = fixture.nativeElement.querySelector('#chat');
    expect(a.textContent).toEqual('Chat');

    expect(component).toBeTruthy();
  });

  it('should contains Home', () => {
    var a = fixture.nativeElement.querySelector('#home');
    expect(a.textContent).toEqual('Home');

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
});
