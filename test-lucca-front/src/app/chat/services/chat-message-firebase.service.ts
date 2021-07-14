import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../shared/chat-message';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { IChatMessageService } from './ichat-message-service';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageFirebaseService implements IChatMessageService {

    itemsRef: AngularFireList<any>;
    items: Observable<ChatMessage[]>;

    constructor(db: AngularFireDatabase) {
      this.itemsRef = db.list('messages');
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    }
  
    add(message: ChatMessage) : void {
      this.itemsRef.push(message);
    }

    getMessages(): Observable<ChatMessage[]> {
      return this.items;
    }
}
