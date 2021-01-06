import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resume-user',
  templateUrl: './resume-user.component.html',
  styleUrls: ['./resume-user.component.scss']
})
export class ResumeUserComponent implements OnInit {
  data: any;
  
  constructor(private router: Router) { }
  currentFriend(friend: any) {
    localStorage.setItem('friend', JSON.stringify(friend));
  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('friend') || 'hello');
    console.log(this.data);
  }

}
