import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginUserData = {
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginUser() {
    console.log(this.loginUserData.username);
    if (this.loginUserData.username.length == 0) {
      alert('username field can not be empty');
    } else if (this.loginUserData.password.length == 0) {
      alert('password can not be empty');
    }

    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        if (res.username !== null) {
          localStorage.setItem('user', JSON.stringify(res));
          localStorage['login_status'] = '1';
          this.router.navigate(['/prof-user']);
        }
        console.log(res);
      },
      (err: any) => console.log(err)
    );
  }
}
// onlogin() {
//    else {
//                  this.service.login(this.username, this.password).subscribe((res: any) => {
//                    if (res.username !== null && res.role === 'manager') {
//                              localStorage['login_status'] = '1';
//                                localStorage['_id'] = res._id;
//                                 this.router.navigate(['/navbar']);
//                               } else if (res.role === 'register') {
//                                        localStorage['login_status'] = '1';
//                                          localStorage['_id'] = res._id;
//                                            this.router.navigate(['/member']);
//                                            } else if (res === null) {
//                                                     alert('invaild email or password');
//                                                    }
//                                    });
//           }
//          }
