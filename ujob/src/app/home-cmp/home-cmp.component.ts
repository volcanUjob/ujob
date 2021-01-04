import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home-cmp',
  templateUrl: './home-cmp.component.html',
  styleUrls: ['./home-cmp.component.scss']
})
export class HomeCmpComponent implements OnInit {
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
