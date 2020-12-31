import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signe-user',
  templateUrl: './signe-user.component.html',
  styleUrls: ['./signe-user.component.scss'],
})
export class SigneUserComponent implements OnInit {
  registerUserData = {
    firstName: '',
    lastName: '',
    username: '',
    job: '',
    email: '',
    password: '',

    image: '',
    phone: '',
    webSite: '',
    github: '',
    twitter: '',
    diploma: '',
    School: '',
    dateSc: '',
    language1: '',
    language2: '',
    language3: '',
    interest1: '',
    interest2: '',
    interest3: '',
    careerProfile: '',
    experienceJob1: '',
    experiencePlace1: '',
    experienceDate1: '',
    experience1: '',
    experienceJob2: '',
    experiencePlace2: '',
    experienceDate2: '',
    experience2: '',
    experienceJob3: '',
    experiencePlace3: '',
    experienceDate3: '',
    experience3: '',
    project1: '',
    aboutProject1: '',
    project2: '',
    aboutProject2: '',
    skill1: '',
    skill2: '',
    skill3: '',

    googleId:''

  };
  
  // getUserData = {
  //   googleId: '',
  // };
  constructor(private _auth: AuthService,  private router: Router) {}

  ngOnInit(): void {}
  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
      
    );
    this.router.navigate(['/login-user']);
  }

}
