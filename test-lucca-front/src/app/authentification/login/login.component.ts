import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!:any;
  password!:any;
  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues:any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/chat']);
  }

}
