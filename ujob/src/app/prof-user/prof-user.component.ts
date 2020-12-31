import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service.service';

@Component({
  selector: 'app-prof-user',
  templateUrl: './prof-user.component.html',
  styleUrls: ['./prof-user.component.scss'],
})
export class ProfUserComponent implements OnInit {
  isLoggedIn = false
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private _http: HttpClient, private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    var id = this.user._id;
    this.userService.myNewProf(id).subscribe((response) => {
      this.user = response;
    });
  }
  addPost(form: NgForm) {
    console.log(this.user._id);

    var obj = {
      posterId: this.user._id,
      message: form.value.post,
    };

    this.userService.newPost(obj).subscribe((response) => {
      console.log(response);
    });
  }
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    localStorage.clear();
    this.router.navigate(['/login-user']);
  }
}

