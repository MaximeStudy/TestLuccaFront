import { AfterViewChecked, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ChatMessageRepository } from '../services/chat-message-repository';
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
  constructor(private chatMessageRepository: ChatMessageRepository) { }
  

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.getMessages();
    this.scrollToBottom();
  }

  getMessages(): void {
    this.chatMessageRepository.getMessages()
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
