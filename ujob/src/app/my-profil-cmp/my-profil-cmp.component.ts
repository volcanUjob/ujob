import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service.service';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss'],
})
export class MyProfilCmpComponent implements OnInit {
  postCmp:any[]=[];
  image: any='';
  isLoggedIn = false;
  check: boolean = false;
  id: any = '';
  test: string = '';
  pathOrigine: string = 'http://localhost:3000/';
  user = JSON.parse(localStorage.getItem('user') || '{}');
  img : any
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

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

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.check = true;
      this.httpClient
        .get(this.pathOrigine + 'posts/' + this.id, httpOptions)
        .subscribe((res: any) => {
          if (res !== null) {
            this.test = res.details;
          }
        });
    }
  }
  deletePost(item:any){
    if(item._id){
      this.httpClient.delete(this.pathOrigine+"post/"+item._id)
      .subscribe((res: any) => {
        alert('item deleted from data base')
        this.postCmp=this.postCmp.filter(p=>p._id!==item._id)
      })
    }
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
      console.log(this.user.image);
      var x = this.user.image.toString().split('');
      var image = ""
      for (var i = 12; i < x.length; i++) {
        image+= x[i];
        
      }
          this.img=image
      console.log(this.img);
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
    this.router.navigate(['/login-cmp']);
  }


}




// postClick() {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

//   this.httpClient
//     .post(this.pathOrigine + 'posts', { details: this.test }, httpOptions)
//     .subscribe((res: any) => {
//       console.log(res);
//       this.route.navigate(['/table-posts/']);
//     });
// }
// putClick(){
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

// this.httpClient
//   .put(this.pathOrigine + 'posts/'+this.id, { details: this.test }, httpOptions)
//   .subscribe((res: any) => {
//     console.log(res);
//     alert('post updated')
//     this.route.navigate(['/table-posts/']);
//   });

//   putClick() {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//       }),
//     };

//     this.httpClient
//       .put(
//         this.pathOrigine + 'posts/' + this.id,
//         { details: this.test },
//         httpOptions
//       )
//       .subscribe((res: any) => {
//         console.log(res);
//         alert('post updated');
//         this.route.navigate(['/table-posts/']);
//       });
//   }
// }
