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

  it('should bind properly messages with chatmessageRepository messages', () => {
    let currentUsername= 'me';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:currentUsername});
    expect(component.messages.length).toEqual(1);
  });

  it('should have a div with flex-row-reverse and a children with message-bubble-me when message comes from current user', () => {
    let currentUsername= 'me';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:currentUsername});
    fixture.detectChanges();

    var messageFromCurrentUser = fixture.nativeElement.querySelector('.flex-row-reverse .message-bubble-me');
    expect(messageFromCurrentUser).not.toBeNull();
  });

  it('should have a div with flex-row-reverse and a children with message-bubble-me when message comes from other user', () => {
    let currentUsername= 'me';
    let otherUsername= 'other';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:'hello',sender:otherUsername});
    fixture.detectChanges();

    var messageFromCurrentUser = fixture.nativeElement.querySelector('.flex-row .message-bubble-other');
    expect(messageFromCurrentUser).not.toBeNull();
  });

  it('should display the sender and content properly when sender is current sender', () => {
    let currentUsername= 'me';
    let content = 'hello';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:content,sender:currentUsername});
    fixture.detectChanges();

    var usernameFromMessage = fixture.nativeElement.querySelector('.username');
    var contentFromMessage = fixture.nativeElement.querySelector('.message');
    expect(currentUsername).toEqual(usernameFromMessage.textContent.trim());
    expect(content).toEqual(contentFromMessage.textContent.trim());
  });

  it('should display the sender and content properly when sender is other sender', () => {
    let currentUsername= 'me';
    let otherUsername= 'other';
    let content = 'hello';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:content,sender:otherUsername});
    fixture.detectChanges();

    var usernameFromMessage = fixture.nativeElement.querySelector('.username');
    var contentFromMessage = fixture.nativeElement.querySelector('.message');
    expect(otherUsername).toEqual(usernameFromMessage.textContent.trim());
    expect(content).toEqual(contentFromMessage.textContent.trim());
  });


  it('should display messages in right order', () => {
    let currentUsername= 'me';
    let otherUsername= 'other';
    let contentCurrent = 'hello me';
    let contentOther = 'hello other';
    component.currentUsername  = currentUsername;
    chatMessageRepository.add({content:contentCurrent,sender:currentUsername});
    chatMessageRepository.add({content:contentOther,sender:otherUsername});
    fixture.detectChanges();

    var usernameFromMessage = fixture.nativeElement.querySelectorAll('.username');
    var contentFromMessage = fixture.nativeElement.querySelectorAll('.message');
 
    expect(currentUsername).toEqual(usernameFromMessage[0].textContent.trim());
    expect(contentCurrent).toEqual(contentFromMessage[0].textContent.trim());

    expect(otherUsername).toEqual(usernameFromMessage[1].textContent.trim());
    expect(contentOther).toEqual(contentFromMessage[1].textContent.trim());
  });
});
