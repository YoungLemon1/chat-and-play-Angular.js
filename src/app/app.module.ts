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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    PersonalUserListComponent,
    ChatroomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
