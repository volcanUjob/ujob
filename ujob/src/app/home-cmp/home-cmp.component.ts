import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home-cmp',
  templateUrl: './home-cmp.component.html',
  styleUrls: ['./home-cmp.component.scss']
})
export class HomeCmpComponent implements OnInit {
  postCmp:any[]=[];
  filter: any = [];
  name = '';
  pathOrigine: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  currentFriend(friend: any) {
    localStorage.setItem('friend', JSON.stringify(friend));
  }


  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient.get(this.pathOrigine+'postUserInfo', httpOptions)
     .subscribe((data:any)=>{
       this.postCmp.push(...data);
       this.filter.push(...data);
       console.log(this.postCmp)
     })

  }
  onChange(event: any) {
    this.filter = this.postCmp.filter((item: any) => {
      if (item?.posterId?.username.includes(this.name) || item.message.includes(this.name)) {
        
        return item;
      }
    });
  }
}
