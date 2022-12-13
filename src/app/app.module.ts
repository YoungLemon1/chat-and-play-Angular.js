import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import UserService from './services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PersonalUserListComponent } from './components/personal-user-list/personal-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    HomeComponent,
    UserDetailsComponent,
    UsersListComponent,
    UserPageComponent,
    PersonalUserListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
