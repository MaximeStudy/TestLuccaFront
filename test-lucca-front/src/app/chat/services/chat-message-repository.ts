import { Observable } from "rxjs";
import { ChatMessage } from "../shared/chat-message";

export interface ChatMessageRepository {
    getMessages(): Observable<ChatMessage[]>;
    add(message: ChatMessage) : void;
}
