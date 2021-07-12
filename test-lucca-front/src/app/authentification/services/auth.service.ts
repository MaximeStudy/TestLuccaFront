import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../shared/user';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  currentUser!:IUser;
  constructor() { }

  signUpUser(userName:string, password:string, confirmedPassword:string) {
    this.isLoggedIn = true;
    this.currentUser = {
      userName:userName
    }
  }

  isAuthenticated() : boolean {
    return this.isLoggedIn;
  }

  logoutUser() {
    this.isLoggedIn = false;
  }

  getUser() : IUser{
    return this.currentUser;
  }

  loginUser(userName:string, password:string) {
    this.isLoggedIn = true;
    this.currentUser = {
      userName:userName
    }
  }
}
