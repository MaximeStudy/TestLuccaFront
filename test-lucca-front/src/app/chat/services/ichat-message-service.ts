import { Observable } from "rxjs";
import { ChatMessage } from "../shared/chat-message";

export interface IChatMessageService {
    getMessages(): Observable<ChatMessage[]>;
    add(message: ChatMessage) : void;
}
