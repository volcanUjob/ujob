import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { SigneUserComponent } from './signe-user/signe-user.component';
import { SigneCmpComponent } from './signe-cmp/signe-cmp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';
import { PaymeComponent } from './payme/payme.component';
import { SocketIoModule } from 'ngx-socket-io';

import { AuthService } from './auth.service';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MyProfilUserComponent } from './my-profil-user/my-profil-user.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { MyProfilCmpComponent } from './my-profil-cmp/my-profil-cmp.component';

import { ProfUserComponent } from './prof-user/prof-user.component';

import { TablePostsComponent } from './table-posts/table-posts.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { RoomComponent } from './room/room.component';
import { PeerComponent } from './peer/peer.component';

import { MapComponent } from './map/map.component';
import { ResumeUserComponent } from './resume-user/resume-user.component';
import { LoginRoomComponent } from './login-room/login-room.component';
import { CmpRoomComponent } from './cmp-room/cmp-room.component';

// import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FirstPageComponent,
    ProfileCmpComponent,
    ProfileUserComponent,
    MyProfilUserComponent,
    EditProfileUserComponent,
    MyProfilCmpComponent,

    PaymeComponent,
    ProfUserComponent,

    LoginCmpComponent,
    LoginUserComponent,
    SigneUserComponent,
    SigneCmpComponent,
    TablePostsComponent,
    HomeUserComponent,
    HomeCmpComponent,

    // ChatComponent,
    RoomComponent,
    PeerComponent,

    MapComponent,
    ResumeUserComponent,
    LoginRoomComponent,
    CmpRoomComponent,

    // ChatComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    SocketIoModule.forRoot({
      url: '/',
    }),
  ],

  providers: [
    AuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('clientId'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
