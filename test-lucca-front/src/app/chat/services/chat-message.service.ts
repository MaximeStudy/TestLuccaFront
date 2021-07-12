import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../shared/chat-message';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  messages: ChatMessage[] = [];
  constructor() { }

  add(message: ChatMessage) {
    this.messages.push(message);
  }

  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }
}