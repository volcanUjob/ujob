import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service.service';

@Component({
  selector: 'app-prof-user',
  templateUrl: './prof-user.component.html',
  styleUrls: ['./prof-user.component.scss'],
})
export class ProfUserComponent implements OnInit {
  postCmp:any[]=[];
  image: any='';
  isLoggedIn = false
  user = JSON.parse(localStorage.getItem('user') || '{}');
  pathOrigine: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient, private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient.get(this.pathOrigine+'post', httpOptions)
     .subscribe((data:any)=>{
       this.postCmp.push(...data);
       this.postCmp=this.postCmp.filter(p=>p.posterId==this.user._id)
       console.log(this.postCmp)
     })

  }

  fileChoosen(event:any){
    if(event.target.value){
      this.image=<File>event.target.files[0]

      console.log(this.image)
    }  
  }

  getUserById() {
    var id = this.user._id;
    this.userService.myNewProf(id).subscribe((response) => {
      this.user = response;
    });
  }
 addPost(form: NgForm) {
    let fd=new FormData();
    if(this.image!==''){
      fd.append('image', this.image, this.image.name);
      this.httpClient.post(this.pathOrigine +'api/upload', fd)
      .subscribe((res:any)=>{
        console.log(this.user._id);

    var obj = {
      posterId: this.user._id,
      message: form.value.post,
      imageURL: res.urlImage
    }
    

    this.userService.newPost(obj).subscribe((response) => {
      console.log(response);
      if(this.postCmp.length>0){
      this.postCmp.unshift({message:obj.message , imageURL:obj.imageURL})
      }else{
        this.postCmp.push({message:obj.message , imageURL:obj.imageURL})
      }
    });
        console.log(res);
      })
    }
    
  }
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    localStorage.clear();
    this.router.navigate(['/login-user']);
  }
}

