import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.scss'],
})
export class LoginCmpComponent implements OnInit {
  loginCompanyData = {
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService,  private router: Router) {}

  ngOnInit(): void {}
  loginCompany() {
    console.log(this.loginCompanyData.username);
    if (this.loginCompanyData.username.length == 0) {
      alert('username field can not be empty');
    } else if (this.loginCompanyData.password.length == 0) {
      alert('password can not be empty');
    }

    this._auth.loginCompany(this.loginCompanyData).subscribe(
      (res: any) => {
        if (res.username !== null) {
          localStorage.setItem('user', JSON.stringify(res));
          localStorage['login_status'] = '1';
          this.router.navigate(['/myprofile-cmp']);
        }
        console.log(res);
      },
      (err: any) => console.log(err)
    );
  }
}