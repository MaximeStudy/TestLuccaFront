import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FirebaseChatMessageRepositoryService } from '../services/firebase-chat-message-repository.service';
import { ChatMessage } from '../shared/chat-message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements  OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  @Input() currentUsername!: string;

  messages: ChatMessage[] = [];
  private messageLength = 0;
  constructor(private chatMessageService: FirebaseChatMessageRepositoryService) { }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.getMessages();
    this.scrollToBottom();
  }

  getMessages(): void {
    this.chatMessageService.getMessages()
    .subscribe(messages => this.messages = messages);
  }

  scrollToBottom(): void {
    try {
      const hasNewMessage = this.messages.length !== this.messageLength;
      if (hasNewMessage) {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        this.messageLength = this.messages.length;
      }
    } catch (err) { }
  }

}
