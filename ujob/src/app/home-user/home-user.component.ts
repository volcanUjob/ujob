import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  postCmp:any[]=[];
  pathOrigine: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient.get(this.pathOrigine+'postUserInfo', httpOptions)
     .subscribe((data:any)=>{
       this.postCmp.push(...data);
      
       console.log(this.postCmp)
     })

  }
}
