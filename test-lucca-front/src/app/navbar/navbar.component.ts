import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated!:boolean;
  username!:string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      }
    );

    this.authService.getUsername().subscribe(
      username => {
        this.username = username as string
      });
  }

}
