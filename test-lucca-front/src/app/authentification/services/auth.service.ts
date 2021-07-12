import { Injectable } from '@angular/core';
import { IUser } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!:IUser;
  constructor() { }

  signUpUser(userName:string, password:string, confirmedPassword:string) {
    this.currentUser = {
      userName:userName
    }
  }

  isAuthenticated() {
    return !!this.currentUser; //cast to boolean
  }

  logoutUser() {
    this.currentUser=null as any; 
  }

  getUser() : IUser{
    return this.currentUser;
  }

  loginUser(userName:string, password:string) {
    this.currentUser = {
      userName:userName
    }
  }
}
