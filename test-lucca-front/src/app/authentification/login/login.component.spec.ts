import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        AuthService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty username', () => {
    fixture.detectChanges();
    var userName = fixture.nativeElement.querySelector('#username');

    expect(userName.textContent).toEqual('');
  });

  it('should display empty password', () => {
    fixture.detectChanges();
    var userName = fixture.nativeElement.querySelector('#password');

    expect(userName.textContent).toEqual('');
  });

  it('should databind with username form control', () => {
    
    var expectedValue = "hello";
    var userName = fixture.nativeElement.querySelector('#username');
    userName.value = expectedValue;
    userName.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.loginForm.get('username')?.value);
  });

  it('should databind with password form control', () => {
    
    var expectedValue = "hello password";
    var password = fixture.nativeElement.querySelector('#password');
    password.value = expectedValue;
    password.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.loginForm.get('password')?.value);
  });

  it('should validate with valid username', () => {
    
    var validValue = "hello";
    var userName = fixture.nativeElement.querySelector('#username');
    userName.focus();
    userName.value = validValue;
    userName.dispatchEvent(new Event('input'));
    userName.blur();

    var validate = component.validateUsername();

    expect(true).toEqual(validate);
  });

  it('should not validate with invalid username', () => {
    
    var validValue = "";
    var userName = fixture.nativeElement.querySelector('#username');
    userName.focus();
    userName.value = validValue;
    userName.dispatchEvent(new Event('input'));
    userName.blur();

    var validate = component.validateUsername();

    expect(false).toEqual(validate);
  });
});
