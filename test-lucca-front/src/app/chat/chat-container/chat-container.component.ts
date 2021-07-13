import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ChatMessageFirebaseService } from '../services/chat-message-firebase.service';
import { ChatMessage } from '../shared/chat-message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  username!:any;
  currentMessage!:any;

  sendMessageForm!: FormGroup;
  private message!:FormControl;

  constructor(private chatMessageService: ChatMessageFirebaseService, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsername().subscribe(
      username => {
        this.username = username;
      });
      
    this.message = new FormControl(null, [Validators.required]);
    this.sendMessageForm = new FormGroup({
      message: this.message
     });
  }

  sendMessage(formValues:any) {
    if(this.sendMessageForm.valid) {
      this.chatMessageService.add({sender: this.username, content:formValues.message});
      this.sendMessageForm.reset();
    }
  }
}
