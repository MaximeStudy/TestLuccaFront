import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ChatMessageRepository } from '../services/chat-message-repository';
import { LocalChatMessageRepositoryService } from '../services/local-chat-message-repository.service';

import { ChatMessagesComponent } from './chat-messages.component';

describe('ChatMessagesComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;
  let mockAuthService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessagesComponent ],
      providers: [
        { provide: ChatMessageRepository, useClass: LocalChatMessageRepositoryService}
      ],
      imports: [
      ]
    });

    mockAuthService = new MockAuthServiceWithoutAuthenticatedUser();
    TestBed.overrideProvider(AuthService, { useValue: mockAuthService });
    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class MockAuthServiceWithoutAuthenticatedUser extends AuthService {
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(false).asObservable();
    }
  }

  class MockAuthServiceWithAuthenticatedUser extends AuthService {
    isAuthenticated() : Observable<boolean> {
      return  new BehaviorSubject<boolean>(true).asObservable();
    }

    getUsername() : Observable<string> {
      return new BehaviorSubject<string>("Maxime").asObservable();
    }
  }
});
