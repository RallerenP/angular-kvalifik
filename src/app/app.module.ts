import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { EventsComponent } from './events/events.component';
import { PostsComponent } from './posts/posts.component';
import { CollectionsComponent } from './collections/collections.component';
import { ChatsComponent } from './chats/chats.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InvitationComponent } from './dashboard/invitation/invitation.component';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'public-profile', component: PublicProfileComponent},
  { path: 'events', component: EventsComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'new-post', component: PostEditorComponent},
  { path: 'edit/:id', component: PostEditorComponent},
  { path: 'collections', component: CollectionsComponent},
  { path: 'chats', component: ChatsComponent},
  { path: 'volunteers', component:VolunteersComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    PublicProfileComponent,
    EventsComponent,
    PostsComponent,
    CollectionsComponent,
    ChatsComponent,
    VolunteersComponent,
    SidebarItemComponent,
    InvitationComponent,
    PostEditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
