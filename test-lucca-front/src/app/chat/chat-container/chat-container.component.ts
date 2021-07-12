import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ChatMessageService } from '../services/chat-message.service';
import { ChatMessage } from '../shared/chat-message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  currentChatMessage: ChatMessage = { content: '', sender: '' };

  username!:string;
  
  constructor(private chatMessageService: ChatMessageService, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      user => {
        this.username = user.userName
      });
  }

  sendMessage(): void {
    this.chatMessageService.add(this.currentChatMessage);
    this.currentChatMessage = { content: '', sender: this.username };
  }
}