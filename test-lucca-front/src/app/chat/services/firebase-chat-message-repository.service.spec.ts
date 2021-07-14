import { TestBed } from '@angular/core/testing';

import { FirebaseChatMessageRepositoryService } from './firebase-chat-message-repository.service';

describe('FirebaseChatMessageRepositoryService', () => {
  let service: FirebaseChatMessageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseChatMessageRepositoryService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
