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
      userName:"Maxime"
    }
  }

  isAuthenticated() {
    return !!this.currentUser; //cast to boolean
  }
}
