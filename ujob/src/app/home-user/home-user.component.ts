import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  postCmp: any[] = [];
  filter: any = [];
  name = '';
  image: any = '';
  x = {};
  pathOrigine: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  currentFriend(friend: any) {
    localStorage.setItem('friend', JSON.stringify(friend));
  }
  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    // this.image = this.x.image;
    // console.log('img', this.image);
    // var x = this.x.image.toString().split('');
    // var img = '';
    // for (var i = 12; i < x.length; i++) {
    //   img += x[i];
    // }
    // this.image = img;
    // console.log('result', this.image);

    this.httpClient
      .get(this.pathOrigine + 'postUserInfo', httpOptions)
      .subscribe((data: any) => {
        this.postCmp.push(...data);
        // var x = this.postCmp;
        console.log('hello', this.postCmp[0]);
        this.image = this.postCmp[1].posterId.image;
        console.log('img', this.image);
        var x = this.postCmp[1].posterId.image.toString().split('');
        var img = '';
        for (var i = 12; i < x.length; i++) {
          img += x[i];
        }
        this.image = img;
        console.log('result', this.image);
        this.filter.push(...data);
      });
  }
  onChange(event: any) {
    this.filter = this.postCmp.filter((item: any) => {
      if (
        item?.posterId?.username.includes(this.name) ||
        item.message.includes(this.name)
      ) {
        return item;
      }
    });
  }
}
