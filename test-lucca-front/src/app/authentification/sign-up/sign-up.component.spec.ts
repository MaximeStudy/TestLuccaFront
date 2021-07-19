import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let router: Router;
  let auth: AuthService;

  beforeEach(async () => {
    
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        AuthService
      ],
    })
    .compileComponents();
    router = TestBed.inject(Router);
    auth =  TestBed.inject(AuthService);

    fixture = TestBed.createComponent(SignUpComponent);
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

  it('should display empty confirmPassword', () => {
    let userName = fixture.nativeElement.querySelector('#confirm-password');

    expect(userName.textContent).toEqual('');
  });

  it('should databind with username form control', () => {
    let expectedValue = "hello";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = expectedValue;
    userName.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.signupForm.get('username')?.value);
  });

  it('should databind with password form control', () => {
    let expectedValue = "hello password";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = expectedValue;
    password.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.signupForm.get('password')?.value);
  });

  it('should databind with confirmPassword form control', () => {
    let expectedValue = "hello confirmPassword";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = expectedValue;
    confirmPassword.dispatchEvent(new Event('input'));

    expect(expectedValue).toEqual(component.signupForm.get('confirmPassword')?.value);
  });

  it('should validate with valid username', () => {
    let validValue = "hello";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = validValue;
    userName.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let validate = component.validateUsername();

    expect(true).toEqual(validate);
  });

  it('should username have maxLength equals to 10', () => {
    let invalidValue = "abcdefghijk";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = invalidValue;
    userName.dispatchEvent(new Event('input'));
    var usernameControl = component.signupForm.get('username');
    usernameControl?.markAsTouched();

    expect(usernameControl?.hasError('maxlength')).toBeTruthy();
  });

  it('should username display "Username must not exceed 10 characters" error when input length greater than 10', () => {
    let invalidValue = "abcdefghijk";
    let username = fixture.nativeElement.querySelector('#username');
    username.value = invalidValue;

    username.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('username');
    passwordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#username-form-group em');
    expect(em.textContent).toEqual("Username must not exceed 10 characters");
  });

  it('should username be required', () => {
    let invalidValue = "";
    let userName = fixture.nativeElement.querySelector('#username');
    userName.value = invalidValue;
    userName.dispatchEvent(new Event('input'));
    var usernameControl = component.signupForm.get('username');
    usernameControl?.markAsTouched();

    expect(usernameControl?.hasError('required')).toBeTruthy();
  });

  it('should username display "querySelector" error when input is empty', () => {
    let invalidValue = "";
    let username = fixture.nativeElement.querySelector('#username');
    username.value = invalidValue;

    username.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('username');
    passwordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#username-form-group em');
    expect(em.textContent).toEqual("Required");
  });

  it('password should have maxLength to 20', () => {
    let invalidValue = "abcdefghijkbcdefghijkbcdefghijkbcdefghijk";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;
    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();

    expect(passwordControl?.hasError('maxlength')).toBeTruthy();
  });

  it('should password display "Password must not exceed 20 characters" error when input length greater than 20', () => {
    let invalidValue = "abcdefghijkbcdefghijkbcdefghijkbcdefghijk";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;

    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#password-form-group em');
    expect(em.textContent).toEqual("Password must not exceed 20 characters");
  });

  it('should password have minlength when input length <6', () => {
    let invalidValue = "abc";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;
    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();

    expect(passwordControl?.hasError('minlength')).toBeTruthy();
  });

  it('should password display "Password must be at least 6 characters" error when input length lower than 6', () => {
    let invalidValue = "abc";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;

    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#password-form-group em');
    expect(em.textContent).toEqual("Password must be at least 6 characters");
  });

  it('should password have no empty value', () => {
    let invalidValue = "";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;
    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();

    expect(passwordControl?.hasError('required')).toBeTruthy();
  });

  it('should password display "Required" error when input input is empty', () => {
    let invalidValue = "";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = invalidValue;

    password.dispatchEvent(new Event('input'));
    var passwordControl = component.signupForm.get('password');
    passwordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#password-form-group em');
    expect(em.textContent).toEqual("Required");
  });
  

  it('confirm password is required', () => {
    let invalidValue = "";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = invalidValue;
    confirmPassword.dispatchEvent(new Event('input'));
    var confirmPasswordControl = component.signupForm.get('confirmPassword');
    confirmPasswordControl?.markAsTouched();

    expect(confirmPasswordControl?.hasError('required')).toBeTruthy();
  });

  it('confirm password should match password', () => {
    let invalidValue = "confirm pwd";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = invalidValue;
    confirmPassword.dispatchEvent(new Event('input'));
    var confirmPasswordControl = component.signupForm.get('confirmPassword');
    confirmPasswordControl?.markAsTouched();

    expect(component.signupForm?.hasError('matching')).toBeTruthy();
  });

  it('should confirm password display "Required" error when input does not match with password', () => {
    let invalidValue = "";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = invalidValue;

    confirmPassword.dispatchEvent(new Event('input'));
    var confirmPasswordControl = component.signupForm.get('confirmPassword');
    confirmPasswordControl?.markAsTouched();
    fixture.detectChanges();

    let em = fixture.nativeElement.querySelector('#confirm-password-form-group em');
    expect(em.textContent).toEqual("Required");
  });
  
  it('should confirm password display "Confirm password does not match" error when input does not match with password', () => {
    let invalidValue = "confirm pwd";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = invalidValue;

    confirmPassword.dispatchEvent(new Event('input'));
    var confirmPasswordControl = component.signupForm.get('confirmPassword');
    confirmPasswordControl?.markAsTouched();
    fixture.detectChanges();


    let em = fixture.nativeElement.querySelector('#confirm-password-form-group em');
    expect(em.textContent).toEqual("Confirm password does not match");
  });
  

  it('should add error class when confirm password does not match with password', () => {
    let invalidValue = "confirm pwd";
    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = invalidValue;

    confirmPassword.dispatchEvent(new Event('input'));
    var confirmPasswordControl = component.signupForm.get('confirmPassword');
    confirmPasswordControl?.markAsTouched();
    fixture.detectChanges();

    let confirmPasswordFormGroup = fixture.nativeElement.querySelector('#confirm-password-form-group');
    let hasError = confirmPasswordFormGroup.classList.contains("error");

    expect(true).toEqual(hasError);
  });

  it('should not add error class when confirm password is valid', () => {
    let validPassword = "confirm pwd";
    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();
    fixture.detectChanges();

    let confirmPasswordFormGroup = fixture.nativeElement.querySelector('#confirm-password-form-group');
    let hasError = confirmPasswordFormGroup.classList.contains("error");

    expect(false).toEqual(hasError);
  });


  it('should enable submit button if form is valid', () => {
    let validUsername = "hello";
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = validUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    let isDisabled = submitButton.disabled;

    expect(false).toEqual(isDisabled);
  });

  it('should disable submit button if form is not valid', () => {
    let invalidUsername = "";
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = invalidUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    let isDisabled = submitButton.disabled;

    expect(true).toEqual(isDisabled);
  });

  it('should redirect to "/chat" when submitting valid form', () => {
    let spyRouter = spyOn(router, 'navigate');

    let validUsername = "hello";
    
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = validUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    submitButton.click();

    expect(spyRouter).toHaveBeenCalledWith(['/chat']);
  });

  it('should call signUpUser when submitting valid form', () => {
    spyOn(router, 'navigate');
    let spyAuth = spyOn(auth, 'signUpUser');

    let validUsername = "hello";
    
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = validUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    submitButton.click();

    expect(spyAuth).toHaveBeenCalledWith(validUsername, validPassword, validPassword);
  });

  it('should not redirect to "/chat" when sumbitting invalid form', () => {
    let spyRouter = spyOn(router, 'navigate');

    let invalidUsername = "";
    
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = invalidUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    submitButton.click();

    expect(spyRouter).not.toHaveBeenCalledWith(['/chat']);
  });

  it('should call signUpUser when submitting invalid form', () => {
    spyOn(router, 'navigate');
    let spyAuth = spyOn(auth, 'signUpUser');

    let invalidUsername = "";
    
    let validPassword = "password123";

    let username = fixture.nativeElement.querySelector('#username');
    username.value = invalidUsername;
    username.dispatchEvent(new Event('input'));
    component.signupForm.get('username')?.markAsTouched();

    let password = fixture.nativeElement.querySelector('#password');
    password.value = validPassword;
    password.dispatchEvent(new Event('input'));
    component.signupForm.get('password')?.markAsTouched();

    let confirmPassword = fixture.nativeElement.querySelector('#confirm-password');
    confirmPassword.value = validPassword;
    confirmPassword.dispatchEvent(new Event('input'));
    component.signupForm.get('confirmPassword')?.markAsTouched();

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#signup-submit');
    submitButton.click();

    expect(spyAuth).not.toHaveBeenCalledWith(invalidUsername, validPassword, validPassword);
  });
});
