import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMessageRepository } from '../services/chat-message-repository';
import { LocalChatMessageRepositoryService } from '../services/local-chat-message-repository.service';

import { ChatMessagesComponent } from './chat-messages.component';

describe('ChatMessagesComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;
  let chatMessageRepository: ChatMessageRepository;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ ChatMessagesComponent ],
      providers: [
        { provide: ChatMessageRepository, useClass: LocalChatMessageRepositoryService}
      ],
      imports: [
      ]
    });
    chatMessageRepository = TestBed.inject(ChatMessageRepository);
    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with null input', () => {
    expect(component.currentUsername).toBeUndefined();
  });

  it('messages should bind properly with chatmessageRepository', () => {
    let currentUsername= 'me';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:currentUsername});
    expect(component.messages.length).toEqual(1);
  });

  it('message from current user should have a div with flex-row-reverse and a chidlren with message-bubble-me', () => {
    let currentUsername= 'me';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:currentUsername});
    fixture.detectChanges();

    var messageFromCurrentUser = fixture.nativeElement.querySelector('.flex-row-reverse .message-bubble-me');
    expect(messageFromCurrentUser).not.toBeNull();
  });

  it('message from other user should have a div with flex-row-reverse and a chidlren with message-bubble-me', () => {
    let currentUsername= 'me';
    let otherUsername= 'other';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:otherUsername});
    fixture.detectChanges();

    var messageFromCurrentUser = fixture.nativeElement.querySelector('.flex-row .message-bubble-other');
    expect(messageFromCurrentUser).not.toBeNull();
  });
});
