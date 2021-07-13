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

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
   let userName = new FormControl();
   let password = new FormControl();
   let confirmPassword = new FormControl();

   this.signupForm = new FormGroup({
    userName:userName,
    password: password,
    confirmPassword: confirmPassword
   });
  }

  signUp(formValues:any) {
    this.authService.signUpUser(formValues.userName, formValues.password, formValues.confirmPassword);
    this.router.navigate(['/chat']);
  }

}
