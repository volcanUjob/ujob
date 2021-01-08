import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  isLoggedIn = false;
  data: any;
  allpost: any;
  posts: any = [];
  image: any = '';
  constructor(private router: Router) {}
  currentFriend(friend: any) {
    localStorage.setItem('friend', JSON.stringify(friend));
  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('friend') || 'hello');

    this.allpost = JSON.parse(localStorage.getItem('allposts') || 'hello');

    var id = this.data._id;

    for (var i = 0; i < this.allpost.length; i++) {
      if (this.allpost[i].posterId._id === id) {
        this.posts.push(this.allpost[i]);
      }
    }
    console.log('all', this.posts);

    console.log('newposts', this.posts);
  }
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    localStorage.clear();
    this.router.navigate(['/login-user']);
  }
}
