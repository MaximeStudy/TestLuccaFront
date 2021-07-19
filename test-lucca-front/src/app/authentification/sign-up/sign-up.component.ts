import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup;
  private username!:FormControl;
  private password!:FormControl;
  private confirmPassword!:FormControl;
  mouseoverSignup!:any;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
   this.username = new FormControl(null, [Validators.required, Validators.maxLength(10)]);
   this.password = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
   this.confirmPassword = new FormControl(null, [Validators.required]);

   this.signupForm = new FormGroup({
    username: this.username,
    password: this.password,
    confirmPassword: this.confirmPassword
   }, [this.match('password','confirmPassword')]
   );
  }

  signUp(formValues:any) {
    if(this.signupForm.valid) {
      this.authService.signUpUser(formValues.username, formValues.password, formValues.confirmPassword);
      this.router.navigate(['/chat']);
    }
    
  }

  validatePassword()  : boolean {
    return this.password.valid || (this.password.untouched && !this.mouseoverSignup);
  }

  validateConfirmPassword() : boolean {
    return this.confirmPassword.valid || (this.confirmPassword.untouched  && !this.mouseoverSignup);
  }

  validateUsername() : boolean {
    return (this.username.valid)  || (this.username.untouched && !this.mouseoverSignup);
  }

  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl?.errors.matching) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        checkControl?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
