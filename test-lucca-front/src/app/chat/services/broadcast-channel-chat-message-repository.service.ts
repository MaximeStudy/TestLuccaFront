import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../shared/chat-message';
import { ChatMessageRepository } from './chat-message-repository';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelChatMessageRepositoryService implements ChatMessageRepository{
  //Working only with same browser
  broadcastChannel!: BroadcastChannel;
  messages: ChatMessage[] = [];

  constructor() {
    this.broadcastChannel = new BroadcastChannel('test_channel');
    this.broadcastChannel.addEventListener('message', (msg) => {
      this.addMessage(msg.data);
    });
   }

  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }

  add(message: ChatMessage): void {
    this.addMessage(message);
    this.broadcastChannel.postMessage(message);
  }

  private addMessage(message: ChatMessage) : void {
    this.messages.push(message);
  }
}
