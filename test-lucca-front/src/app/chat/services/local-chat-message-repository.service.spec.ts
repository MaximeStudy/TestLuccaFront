import { TestBed } from '@angular/core/testing';

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
});
