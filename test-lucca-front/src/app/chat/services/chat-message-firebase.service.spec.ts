import { TestBed } from '@angular/core/testing';

import { ChatMessageFirebaseService } from './chat-message-firebase.service';

describe('ChatMessageFirebaseService', () => {
  let service: ChatMessageFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMessageFirebaseService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
