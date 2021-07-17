import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    let userName = fixture.nativeElement.querySelector('#username');

    expect(userName.textContent).toEqual('');
  });

  it('should display empty password', () => {
    let userName = fixture.nativeElement.querySelector('#password');

    expect(userName.textContent).toEqual('');
  });

  it('should databind with username form control', () => {
    let expectedValue = "hello";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = expectedValue;
    userName.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.loginForm.get('username')?.value);
  });

  it('should databind with password form control', () => {
    let expectedValue = "hello password";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = expectedValue;
    password.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.loginForm.get('password')?.value);
  });

  it('should validate with valid username', () => {
    let validValue = "hello";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = validValue;
    userName.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();

    let validate = component.validateUsername();

    expect(true).toEqual(validate);
  });

  it('should not validate with invalid username', () => {
    let invalidValue = "";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = invalidValue;
    userName.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();

    let validate = component.validateUsername();

    expect(false).toEqual(validate);
  });

  it('should form group have error class when username is not written after selecting input', () => {
    
    let userName = fixture.nativeElement.querySelector('#username');
    let userNameFormGroup = fixture.nativeElement.querySelector('#username-form-group');
    userName.focus();
    userName.dispatchEvent(new Event('input'));
    userName.blur();
    component.loginForm.get('username')?.markAsTouched();
    fixture.detectChanges();

    let hasError = userNameFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should username form group have error with required when input is empty', () => {
    fixture.detectChanges();
    let userName = fixture.nativeElement.querySelector('#username');
   
    userName.focus();
    userName.dispatchEvent(new Event('input'));
    userName.blur();
    component.loginForm.get('username')?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#username-form-group em');
    
    expect(em.textContent).toEqual("Required");
  });

  
  it('should form group have error class when password is not written after selecting input', () => {
    
    let password = fixture.nativeElement.querySelector('#password');
    let passwordFormGroup = fixture.nativeElement.querySelector('#password-form-group');
    password.focus();
    password.dispatchEvent(new Event('input'));
    password.blur();
    component.loginForm.get('password')?.markAsTouched();
    fixture.detectChanges();

    let hasError = passwordFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should password form group have error with required when input is empty', () => {
    
    let password = fixture.nativeElement.querySelector('#password');
   
    password.focus();
    password.dispatchEvent(new Event('input'));
    password.blur();
    component.loginForm.get('password')?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#password-form-group em');
    
    expect(em.textContent).toEqual("Required");
  });

  it('should password form group have error class when mouse over submit button when input not touched', () => {
    
    let passwordFormGroup = fixture.nativeElement.querySelector('#password-form-group');

    let submitSpan = fixture.nativeElement.querySelector('#submit-span');
    submitSpan.dispatchEvent(new MouseEvent('mouseenter'));

    fixture.detectChanges();

    let hasError = passwordFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });
  
  it('should username form group have error class when mouse over submit button when input not touched', () => {
    
    let usernameFormGroup = fixture.nativeElement.querySelector('#username-form-group');

    let submitSpan = fixture.nativeElement.querySelector('#submit-span');
    submitSpan.dispatchEvent(new MouseEvent('mouseenter'));

    fixture.detectChanges();

    let hasError = usernameFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should password form group not have error class when mouse over submit button and input touched/valid', () => {
    
    let passwordFormGroup = fixture.nativeElement.querySelector('#password-form-group');

    let validValue = "hello";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = validValue;
    password.dispatchEvent(new Event('input'));
    component.loginForm.get('password')?.markAsTouched();
    
    let submitSpan = fixture.nativeElement.querySelector('#submit-span');
    submitSpan.dispatchEvent(new MouseEvent('mouseenter'));

    fixture.detectChanges();

    let hasError = passwordFormGroup.classList.contains("error");

    expect(false).toEqual(hasError);
  });

  it('should username form group not have error class when mouse over submit button and input touched/valid', () => {
    
    let usernameFormGroup = fixture.nativeElement.querySelector('#username-form-group');

    let validValue = "hello";
    let username = fixture.nativeElement.querySelector('#username');
    username.value = validValue;
    username.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();
    
    let submitSpan = fixture.nativeElement.querySelector('#submit-span');
    submitSpan.dispatchEvent(new MouseEvent('mouseenter'));

    fixture.detectChanges();

    let hasError = usernameFormGroup.classList.contains("error");

    expect(false).toEqual(hasError);
  });

  it('should disable submit button if form is invalid', () => {

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#login-submit');
    let isDisabled = submitButton.disabled;

    expect(true).toEqual(isDisabled);
  });


  it('should enable submit button if form is valid', () => {
    let validValue = "hello";
    let username = fixture.nativeElement.querySelector('#username');
    username.value = validValue;
    username.dispatchEvent(new Event('input'));
    component.loginForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validValue;
    password.dispatchEvent(new Event('input'));
    component.loginForm.get('password')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#login-submit');
    let isDisabled = submitButton.disabled;

    expect(false).toEqual(isDisabled);
  });
});
