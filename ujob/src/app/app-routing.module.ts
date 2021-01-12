import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SigneUserComponent } from './signe-user/signe-user.component';
import { SigneCmpComponent } from './signe-cmp/signe-cmp.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MyProfilUserComponent } from './my-profil-user/my-profil-user.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { MyProfilCmpComponent } from './my-profil-cmp/my-profil-cmp.component';
import { TablePostsComponent } from './table-posts/table-posts.component';
import { PaymeComponent } from './payme/payme.component';

import { ProfUserComponent } from './prof-user/prof-user.component';
import { EditProfileCmpComponent } from './edit-profile-cmp/edit-profile-cmp.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { PeerComponent } from './peer/peer.component';
import { RoomComponent } from './room/room.component';

import { MapComponent } from './map/map.component';
import { ResumeUserComponent } from './resume-user/resume-user.component';
import { LoginRoomComponent } from './login-room/login-room.component';
import { CmpRoomComponent } from './cmp-room/cmp-room.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-cmp', component: LoginCmpComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'sign-user', component: SigneUserComponent },
  { path: 'sign-cmp', component: SigneCmpComponent },
  { path: '', component: FirstPageComponent },

  { path: 'profile-cmp', component: ProfileCmpComponent },
  { path: 'profile-user', component: ProfileUserComponent },
  { path: 'myprofile-user', component: MyProfilUserComponent },
  { path: 'edit-profile-user', component: EditProfileUserComponent },
  { path: 'myprofile-cmp', component: MyProfilCmpComponent },
  { path: 'myprofile-cmp/:id', component: MyProfilCmpComponent },
  { path: 'table-posts', component: TablePostsComponent },
  { path: 'payme', component: PaymeComponent },

  { path: 'room/:room_id', component: RoomComponent },
  { path: 'prof-user', component: ProfUserComponent },
  { path: 'edit-profile-cmp', component: EditProfileCmpComponent },

  { path: 'peer', component: PeerComponent },
  { path: 'prof-user', component: ProfUserComponent },
  { path: 'edit-profile-cmp', component: EditProfileCmpComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'home-cmp', component: HomeCmpComponent },
  { path: 'map', component: MapComponent },
  { path: 'resume-user', component: ResumeUserComponent },
  { path: 'login-room', component: LoginRoomComponent },
  { path: 'cmp-room', component:CmpRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  FirstPageComponent,
  HomeComponent,
  LoginCmpComponent,
  LoginUserComponent,
  SigneUserComponent,
  SigneCmpComponent,
  ProfileCmpComponent,
  ProfileUserComponent,
  MyProfilUserComponent,
  EditProfileUserComponent,
  MyProfilCmpComponent,
  ProfUserComponent,
  HomeUserComponent,
  TablePostsComponent,
  EditProfileCmpComponent,
  HomeCmpComponent,
  MapComponent,
  ResumeUserComponent,
  PeerComponent,
  LoginRoomComponent,
  CmpRoomComponent
];
