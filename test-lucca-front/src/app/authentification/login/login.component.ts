import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private username!:FormControl;
  private password!:FormControl;

  mouseoverLogin!:any;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
     });
  }

  login(formValues:any) {
    if(this.loginForm.valid) {
      this.authService.loginUser(formValues.username, formValues.password);
      this.router.navigate(['/chat']);
    }
   
  }

  validatePassword()  : boolean {
    return this.password.valid || (this.password.untouched && !this.mouseoverLogin);
  }

  validateUsername() : boolean {
    return (this.username.valid)  || (this.username.untouched && !this.mouseoverLogin);
  }

}
