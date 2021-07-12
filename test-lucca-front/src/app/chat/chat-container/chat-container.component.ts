import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/services/auth.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  public username!: string;


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(): void {
    this.username = this.authService.getUser().userName;
  }
}
