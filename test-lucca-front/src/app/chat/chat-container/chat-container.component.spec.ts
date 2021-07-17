import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ChatMessageRepository } from '../services/chat-message-repository';
import { LocalChatMessageRepositoryService } from '../services/local-chat-message-repository.service';
import {  ReactiveFormsModule  } from '@angular/forms';

import { ChatContainerComponent } from './chat-container.component';
import { ChatMessagesComponent } from '../chat-messages/chat-messages.component';

describe('ChatContainerComponent', () => {
  let component: ChatContainerComponent;
  let fixture: ComponentFixture<ChatContainerComponent>;

  beforeEach(() => {
    var mockAuthService = new MockAuthServiceWithAuthenticatedUser();

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

    fixture = TestBed.createComponent(ChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  class MockAuthServiceWithAuthenticatedUser extends AuthService {
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(true).asObservable();
    }

    getUsername() : Observable<string> {
      return new BehaviorSubject<string>("Maxime").asObservable();
    }
  }
});
