import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  isLoggedIn = false
  data: any;
  postCmp: any[] = [];
  constructor(private router: Router,private httpClient: HttpClient) { }
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
