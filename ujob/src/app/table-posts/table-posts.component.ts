import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-table-posts',
  templateUrl: './table-posts.component.html',
  styleUrls: ['./table-posts.component.scss']
})
export class TablePostsComponent implements OnInit {
  pathOrigine: string = 'http://localhost:3000/';
  tableData: any[]=[];
  constructor(private httpClient: HttpClient, private route:Router) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient.get(this.pathOrigine+'posts', httpOptions)
    .subscribe((res: any) => {
      this.tableData=res;
      console.log(res);
    });
  }
  
  deletePost(data:any){
    console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.httpClient.delete(this.pathOrigine+'posts/'+data._id, httpOptions)
    .subscribe((res: any) => {
      this.tableData = this.tableData.filter(item => item !== data);
      alert('post deleted')
      console.log(res);
      
    });
   
  }
  updatePost(data:any){
    this.route.navigate(['/myprofile-cmp/', data._id]);
    

  }

}
