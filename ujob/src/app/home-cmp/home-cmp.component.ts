import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders , } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home-cmp.component.html',
  styleUrls: ['./home-cmp.component.scss'],
})
export class HomeCmpComponent implements OnInit {
  commentPostCmp: any[] = [];
  comment: any;
  showModal: boolean = true;
  postCmp: any[] = [];
  filter: any = [];
  name = '';
  image: any = '';
  image1: any = '';
  pathOrigine: string = 'http://localhost:3000/';
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

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
  closeWindow() {
    var modal = document.getElementById('myModal');
    if (modal !== null) modal.style.display = 'none';
    this.commentPostCmp = [];
  }
  showComments(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient
      .get(this.pathOrigine + 'comments/' + id, httpOptions)
      .subscribe((comments: any) => {
        this.commentPostCmp.push(...comments);

        for (var i = 0; i < this.commentPostCmp.length; i++) {
          var x = this.commentPostCmp[i].commenterId.image.toString().split('');
          var img = '';
          for (var j = 12; j < x.length; j++) {
            img += x[j];
          }
          this.image1 = img;
          this.commentPostCmp[i].commenterId.image = this.image1;
        }

        var modal = document.getElementById('myModal');
        if (modal !== null) modal.style.display = 'block';
        this.showModal = true;
      });

    var modal = document.getElementById('myModal');
    if (modal !== null) modal.style.display = 'block';
    this.showModal = true;
  }

  postComment(id: any) {
    let element = document.getElementById( 'elem' + id ) as HTMLInputElement
    if (document.getElementById('elem' + id) !== null) {
      this.comment = element.value;
      var obj = {
        comment: this.comment,
        postId: id,
        commenterId: this.user._id,
      };
      console.log(obj);
      this.httpClient
        .post(this.pathOrigine + 'comment', obj)
        .subscribe((res: any) => {
          console.log(res);

          this.comment = '';
        });
    } else {
      alert('id undefined');
    }
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
