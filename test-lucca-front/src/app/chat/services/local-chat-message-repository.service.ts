import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../shared/chat-message';
import { ChatMessageRepository } from './chat-message-repository';

@Injectable({
  providedIn: 'root'
})
export class LocalChatMessageRepositoryService implements ChatMessageRepository {
  messages: ChatMessage[] = [];
  constructor() { }

  add(message: ChatMessage) {
    this.messages.push(message);
  }

  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }
}
