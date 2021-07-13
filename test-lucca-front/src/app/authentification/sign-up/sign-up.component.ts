import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup;
  private userName!:FormControl;
  private password!:FormControl;
  private confirmPassword!:FormControl;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
   this.userName = new FormControl(null,Validators.required);
   this.password = new FormControl(null, Validators.required);
   this.confirmPassword = new FormControl(null, Validators.required);

   this.signupForm = new FormGroup({
    userName: this.userName,
    password: this.password,
    confirmPassword: this.confirmPassword
   });
  }

  signUp(formValues:any) {
    if(this.signupForm.valid) {
      this.authService.signUpUser(formValues.userName, formValues.password, formValues.confirmPassword);
      this.router.navigate(['/chat']);
    }
    
  }

  validatePassword()  : boolean {
    return this.password.valid || this.password.untouched;
  }

  validateConfirmPassword() : boolean {
    return this.confirmPassword.valid || this.confirmPassword.untouched;
  }

  validateUserName() : boolean {
    return this.userName.valid || this.userName.untouched;
  }
}
