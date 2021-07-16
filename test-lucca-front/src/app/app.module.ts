import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './authentification/login/login.component';
import { LogoutComponent } from './authentification/logout/logout.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './authentification/services/auth.service';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';
import { ChatMessagesComponent } from './chat/chat-messages/chat-messages.component';
import { LocalChatMessageRepositoryService } from './chat/services/local-chat-message-repository.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseChatMessageRepositoryService } from './chat/services/firebase-chat-message-repository.service';
import { ChatMessageRepository } from './chat/services/chat-message-repository';

var firebaseConfig = {
  apiKey: "AIzaSyA0bWptZKWm7jLTOjQEcv8qo51eUVyJBWY",
  authDomain: "test-front-lucca-f9dbe.firebaseapp.com",
  databaseURL: "https://test-front-lucca-f9dbe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-front-lucca-f9dbe",
  storageBucket: "test-front-lucca-f9dbe.appspot.com",
  messagingSenderId: "77990782566",
  appId: "1:77990782566:web:e419cb014f74f233a42fa7",
  measurementId: "G-Y0659P8PSX"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    ChatContainerComponent,
    ChatMessagesComponent
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    AuthService,
    LocalChatMessageRepositoryService,
    FirebaseChatMessageRepositoryService,
    { provide: ChatMessageRepository, useClass: FirebaseChatMessageRepositoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
