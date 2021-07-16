import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ChatMessage } from "../shared/chat-message";

@Injectable()
export abstract class ChatMessageRepository {
    abstract getMessages(): Observable<ChatMessage[]>;
    abstract add(message: ChatMessage) : void;
}
