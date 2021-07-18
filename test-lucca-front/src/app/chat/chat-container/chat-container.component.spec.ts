import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ChatMessageRepository } from '../services/chat-message-repository';
import { LocalChatMessageRepositoryService } from '../services/local-chat-message-repository.service';
import {  FormGroup, ReactiveFormsModule  } from '@angular/forms';

import { ChatContainerComponent } from './chat-container.component';
import { ChatMessagesComponent } from '../chat-messages/chat-messages.component';
import { ChatMessage } from '../shared/chat-message';

describe('ChatContainerComponent', () => {
  let component: ChatContainerComponent;
  let fixture: ComponentFixture<ChatContainerComponent>;
  let mockAuthService:MockAuthServiceWithAuthenticatedUser;
  let chatMessageRepository: ChatMessageRepository;
  let mockUsername = "Maxime";

  beforeEach(() => {
    mockAuthService = new MockAuthServiceWithAuthenticatedUser();

    TestBed.configureTestingModule({
      declarations: [
         ChatContainerComponent,
         ChatMessagesComponent
      ],
      providers: [
        { provide: ChatMessageRepository, useClass: LocalChatMessageRepositoryService},
        { provide: AuthService, useValue: mockAuthService},
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();

    chatMessageRepository = TestBed.inject(ChatMessageRepository);
    fixture = TestBed.createComponent(ChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ChatMessagesComponent', () => {
    let chatMessages = fixture.nativeElement.querySelector('app-chat-messages');
    expect(chatMessages).not.toEqual(null);
  });

  it('should create ChatMessagesComponent with current username', () => {
    let expectedValue!:string;
    let chatMessages = fixture.nativeElement.querySelector('app-chat-messages');

    let currentNameBindedValue = chatMessages.attributes.getNamedItem('ng-reflect-current-username').value;
    mockAuthService.getUsername().subscribe(username => expectedValue = username );

    expect(expectedValue).toEqual(currentNameBindedValue);
  });

  it('should disable submit button when create', () => {

    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    let isDisabled = submitButton.disabled;

    expect(true).toEqual(isDisabled);
  });

  it('should enable submit button when message is not empty', () => {

    let messageNotEmpty="hello world!";
    let message = fixture.nativeElement.querySelector('#message');
    message.value = messageNotEmpty;
    message.dispatchEvent(new Event('input'));
    component.sendMessageForm.get('message')?.markAsTouched();
    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    let isDisabled = submitButton.disabled;

    expect(false).toEqual(isDisabled);
  });

  it('should not enable submit button when message is empty and touched', () => {

    let emptyMessage="";
    let message = fixture.nativeElement.querySelector('#message');
    message.value = emptyMessage;
    message.dispatchEvent(new Event('input'));
    component.sendMessageForm.get('message')?.markAsTouched();
    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    let isDisabled = submitButton.disabled;

    expect(true).toEqual(isDisabled);
  });


  it('should add new message when submit', () => {
    const spy = spyOn(chatMessageRepository, 'add');

    let messageNotEmpty="hello world!";
    let message = fixture.nativeElement.querySelector('#message');
    message.value = messageNotEmpty;
    message.dispatchEvent(new Event('input'));
    component.sendMessageForm.get('message')?.markAsTouched();
    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    submitButton.click();

    expect(spy).toHaveBeenCalledOnceWith({sender: mockUsername, content:messageNotEmpty});
  });

  it('should reset form after sending a valid message', () => {
    const spy = spyOn(component.sendMessageForm, 'reset');

    let messageNotEmpty="hello world!";
    let message = fixture.nativeElement.querySelector('#message');
    message.value = messageNotEmpty;
    message.dispatchEvent(new Event('input'));
    component.sendMessageForm.get('message')?.markAsTouched();
    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    submitButton.click();

    expect(spy).toHaveBeenCalled();
  });


  it('should not add new message when submit invalid form', () => {
    const spy = spyOn(chatMessageRepository, 'add');

    let emptyMessage="";
    let message = fixture.nativeElement.querySelector('#message');
    message.value = emptyMessage;
    message.dispatchEvent(new Event('input'));
    component.sendMessageForm.get('message')?.markAsTouched();
    fixture.detectChanges();

    let submitButton = fixture.nativeElement.querySelector('#send-message');
    submitButton.click();

    expect(spy).not.toHaveBeenCalled();
  });

  class MockAuthServiceWithAuthenticatedUser extends AuthService {
    
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(true).asObservable();
    }

    getUsername() : Observable<string> {
      return new BehaviorSubject<string>(mockUsername).asObservable();
    }
  }
});
