import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty username', () => {
    var userName = fixture.nativeElement.querySelector('#username');

    expect(userName.textContent).toEqual('');
  });

  it('should display empty password', () => {
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
    userName.value = validValue;
    userName.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();

    var validate = component.validateUsername();

    expect(true).toEqual(validate);
  });

  it('should not validate with invalid username', () => {
    var invalidValue = "";
    var userName = fixture.nativeElement.querySelector('#username');
    userName.value = invalidValue;
    userName.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();

    var validate = component.validateUsername();

    expect(false).toEqual(validate);
  });

  it('should form group have error class when username is not written after selecting input', () => {
    
    var userName = fixture.nativeElement.querySelector('#username');
    var userNameFormGroup = fixture.nativeElement.querySelector('#username-form-group');
    userName.focus();
    userName.dispatchEvent(new Event('input'));
    userName.blur();
    component.loginForm.get('username')?.markAsTouched();
    fixture.detectChanges();

    var hasError = userNameFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should username form group have error with required when input is empty', () => {
    fixture.detectChanges();
    var userName = fixture.nativeElement.querySelector('#username');
   
    userName.focus();
    userName.dispatchEvent(new Event('input'));
    userName.blur();
    component.loginForm.get('username')?.markAsTouched();
    fixture.detectChanges();

    var em = fixture.nativeElement.querySelector('#username-form-group em');
    
    expect(em.textContent).toEqual("Required");
  });

  
  it('should form group have error class when password is not written after selecting input', () => {
    
    var password = fixture.nativeElement.querySelector('#password');
    var passwordFormGroup = fixture.nativeElement.querySelector('#password-form-group');
    password.focus();
    password.dispatchEvent(new Event('input'));
    password.blur();
    component.loginForm.get('password')?.markAsTouched();
    fixture.detectChanges();

    var hasError = passwordFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should password form group have error with required when input is empty', () => {
    
    var password = fixture.nativeElement.querySelector('#password');
   
    password.focus();
    password.dispatchEvent(new Event('input'));
    password.blur();
    component.loginForm.get('password')?.markAsTouched();
    fixture.detectChanges();

    var em = fixture.nativeElement.querySelector('#password-form-group em');
    
    expect(em.textContent).toEqual("Required");
  });

  it('should form group have error class when mouse over submit button ', () => {
    
    var passwordFormGroup = fixture.nativeElement.querySelector('#password-form-group');

    var submitSpan = fixture.nativeElement.querySelector('#submit-span');
    submitSpan.dispatchEvent(new MouseEvent('mouseenter'));

    fixture.detectChanges();

    var hasError = passwordFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });
  
});
