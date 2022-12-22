import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { RockPaperScissorsComponent } from './components/games/rock-paper-scissors/rock-paper-scissors.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'users-page/:username', component: UserPageComponent },
  { path: 'chatroom', component: ChatroomComponent },
  { path: 'games/rock-paper-scissors', component: RockPaperScissorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
