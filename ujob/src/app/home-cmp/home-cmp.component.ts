import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home-cmp.component.html',
  styleUrls: ['./home-cmp.component.scss'],
})
export class HomeCmpComponent implements OnInit {
  commentPostCmp:any[]=[]
  comment: any;
  showModal: boolean = true;
  postCmp: any[] = [];
  filter: any = [];
  name = '';
  image: any = '';
  pathOrigine: string = 'http://localhost:3000/';
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private httpClient: HttpClient,  @Inject(DOCUMENT) document) {}

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
    if(modal!==null)
        modal.style.display='none';
        this.commentPostCmp=[]
   
  }
  showComments(id: any) {

     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient
    .get(this.pathOrigine+'comments/'+id,httpOptions)
    .subscribe((comments:any)=>{
        this.commentPostCmp.push(...comments)
        var modal = document.getElementById('myModal');
    if(modal!==null)
        modal.style.display='block';
    this.showModal = true;
    })
    
    var modal = document.getElementById('myModal');
    if(modal!==null)
        modal.style.display='block';
    this.showModal = true;
  }

  postComment(id: any) {
    if(document.getElementById('elem'+id)!== null){
    this.comment=document.getElementById('elem'+ id).value;
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
        alert('comment created');
        this.comment = '';
      });
    }else{
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
