import { TestBed } from '@angular/core/testing';
import { ChatMessage } from '../shared/chat-message';

import { LocalChatMessageRepositoryService } from './local-chat-message-repository.service';

describe('LocalChatMessageRepositoryService', () => {
  let service: LocalChatMessageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalChatMessageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with 0 messages', () => {
    var currentMessages!:ChatMessage[];
    service.getMessages().subscribe(messages => currentMessages = messages);
    expect(currentMessages.length).toEqual(0);
  });

  it('should contains a message when add', () => {
    var currentMessages!:ChatMessage[];
    service.add({content:"hello",sender:"me"});
    service.getMessages().subscribe(messages => currentMessages = messages);
    expect(currentMessages.length).toEqual(1);
  });
});
