import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-cmp',
  templateUrl: './profile-cmp.component.html',
  styleUrls: ['./profile-cmp.component.scss'],
})
export class ProfileCmpComponent implements OnInit {
  isLoggedIn = false
  data: any;
  constructor(private router: Router) {}
  currentFriend(friend: any) {
    localStorage.setItem('friend', JSON.stringify(friend));
  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('friend') || 'hello');
    console.log(this.data);
  }
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    localStorage.clear();
    this.router.navigate(['/login-user']);
  }
}
