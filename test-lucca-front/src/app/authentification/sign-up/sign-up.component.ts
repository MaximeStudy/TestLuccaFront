import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userName!:any;
  password!:any;
  confirmPassword!:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   
  }

  login(formValues:any) {
    this.authService.signUpUser(formValues.userName, formValues.password, formValues.confirmPassword);
  }

}
