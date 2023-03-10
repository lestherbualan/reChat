import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { MessageListTileComponent } from './components/message-list-tile/message-list-tile.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessageComponent } from './pages/message/message.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    MessageListTileComponent,
    MessageBoardComponent,
    BadgeComponent,
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    MessageComponent,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
