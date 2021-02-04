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
  imgpostcmp: any = [];
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

    this.httpClient
      .get(this.pathOrigine + 'postUserInfo', httpOptions)
      .subscribe((data: any) => {
        this.postCmp.push(...data);
        localStorage.setItem('allposts', JSON.stringify(this.postCmp));

        this.filter.push(...data);

        for (var i = 0; i < this.filter.length; i++) {
          var x = this.filter[i].posterId.image.toString().split('');
          var img = '';
          for (var j = 12; j < x.length; j++) {
            img += x[j];
          }
          this.image = img;
          this.filter[i].posterId.image = this.image;
        }
      });
  }

  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
    console.log(this.numberOfLikes);
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
    console.log(this.numberOfLikes);
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