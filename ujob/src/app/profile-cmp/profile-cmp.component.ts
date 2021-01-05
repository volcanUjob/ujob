import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-cmp',
  templateUrl: './profile-cmp.component.html',
  styleUrls: ['./profile-cmp.component.scss'],
})
export class ProfileCmpComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('friend') || 'hello');
    console.log(this.data);
  }
}
