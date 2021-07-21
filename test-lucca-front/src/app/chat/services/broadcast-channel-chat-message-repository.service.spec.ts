import { TestBed } from '@angular/core/testing';

import { BroadcastChannelChatMessageRepositoryService } from './broadcast-channel-chat-message-repository.service';

describe('BroadcastChannelChatMessageRepositoryService', () => {
  let service: BroadcastChannelChatMessageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastChannelChatMessageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
