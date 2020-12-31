import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service.service';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss'],
})
export class MyProfilCmpComponent implements OnInit {
  isLoggedIn = false
  check: boolean = false;
  id: any = '';
  test: string = '';
  pathOrigine: string = 'http://localhost:3000/';
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserById();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.check = true;
      this.httpClient
        .get(this.pathOrigine + 'posts/' + this.id, httpOptions)
        .subscribe((res: any) => {
          if (res !== null) {
            this.test = res.details;
          }
        });
    }
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
    this.router.navigate(['/login-cmp']);
  }


}




// postClick() {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

//   this.httpClient
//     .post(this.pathOrigine + 'posts', { details: this.test }, httpOptions)
//     .subscribe((res: any) => {
//       console.log(res);
//       this.route.navigate(['/table-posts/']);
//     });
// }
// putClick(){
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

// this.httpClient
//   .put(this.pathOrigine + 'posts/'+this.id, { details: this.test }, httpOptions)
//   .subscribe((res: any) => {
//     console.log(res);
//     alert('post updated')
//     this.route.navigate(['/table-posts/']);
//   });

//   putClick() {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//       }),
//     };

//     this.httpClient
//       .put(
//         this.pathOrigine + 'posts/' + this.id,
//         { details: this.test },
//         httpOptions
//       )
//       .subscribe((res: any) => {
//         console.log(res);
//         alert('post updated');
//         this.route.navigate(['/table-posts/']);
//       });
//   }
// }
