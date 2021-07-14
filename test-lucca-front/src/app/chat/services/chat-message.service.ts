import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../shared/chat-message';
import { IChatMessageService } from './ichat-message-service';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService implements IChatMessageService{
  messages: ChatMessage[] = [];
  constructor() { }

  add(message: ChatMessage) {
    this.messages.push(message);
  }

  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }
}
