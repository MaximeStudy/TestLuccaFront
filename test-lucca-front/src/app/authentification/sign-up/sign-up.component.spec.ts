import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
  });

  beforeEach(() => {
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
});
