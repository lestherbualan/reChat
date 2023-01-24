import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessageComponent } from './pages/message/message.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', component: AuthenticationComponent, pathMatch: 'full' },
  { path: 'messages', component: MessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
