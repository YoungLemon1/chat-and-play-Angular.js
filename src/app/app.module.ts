import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import UserService from './services/user.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PersonalUserListComponent } from './components/personal-user-list/personal-user-list.component';
import { FormsModule } from '@angular/forms';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { LoginComponent } from './components/login/login.component';
import MessageService from './services/message.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RockPaperScissorsComponent } from './components/games/rock-paper-scissors/rock-paper-scissors.component';
import GameService from './services/game.service';
import GameInviteService from './services/game-invite.service';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    PersonalUserListComponent,
    ChatroomComponent,
    SignUpComponent,
    RockPaperScissorsComponent,
    GameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, MessageService, GameService, GameInviteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
