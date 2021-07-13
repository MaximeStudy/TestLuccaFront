import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  username: BehaviorSubject<string> = new BehaviorSubject<string>("");

  isAuthenticated() : Observable<boolean> {
    return this.connected.asObservable();
  }

  logoutUser() {
    this.connected.next(false);
    this.username.next("");
  }

  getUsername() : Observable<string> {
    return this.username.asObservable();
  }

  signUpUser(userName:string, password:string, confirmedPassword:string) {
    this.loginUser(userName, password);
  }
  
  loginUser(userName:string, password:string) {
    this.username.next(userName);
    this.connected.next(true);
  }
}
