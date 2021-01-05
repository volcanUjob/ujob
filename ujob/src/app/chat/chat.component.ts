import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
// import uuidv4 from 'uuid/dist/v4';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  createRoom() {
    console.log('createRoom');
    this.router.navigate([`/room/${uuidv4()}`]);
  }
}
