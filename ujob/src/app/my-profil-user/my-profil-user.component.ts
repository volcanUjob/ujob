import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {UserService} from '../services/user-service'
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service.service';
@Component({
  selector: 'app-my-profil-user',
  templateUrl: './my-profil-user.component.html',
  styleUrls: ['./my-profil-user.component.scss'],
})
export class MyProfilUserComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  img : any
  constructor(private _http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    var id = this.user._id;
    
    this.userService.myNewProf(id).subscribe((response) => {
      this.user = response;
      console.log(this.user.image);
      var x = this.user.image.toString().split('');
      var image = ""
      for (var i = 12; i < x.length; i++) {
        image+= x[i];
        
      }
          this.img=image
      console.log(this.img);
    });
  }
}
