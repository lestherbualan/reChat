import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { MessageListTileComponent } from './components/message-list-tile/message-list-tile.component';
import { BadgeComponent } from './components/badge/badge.component';
import { MessageComponent } from './message.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
];

@NgModule({
  declarations: [
    MessageComponent,
    MainComponent,
    SidebarComponent,
    MessageBoardComponent,
    MessageListTileComponent,
    BadgeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class MessageModule { }
