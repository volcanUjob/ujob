import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EditProfUserService } from '../edit-prof-user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.component.html',
  styleUrls: ['./edit-profile-user.component.scss'],
})
export class EditProfileUserComponent implements OnInit {
  user: any;
  editProfData = {
    firstName: '',
    lastName: '',
    username: '',
    job: '',
    email: '',
    password: '',
    image: '',
    phone: '',
    webSite: '',
    github: '',
    twitter: '',
    diploma: '',
    School: '',
    dateSc: '',
    language1: '',
    language2: '',
    language3: '',
    interest1: '',
    interest2: '',
    interest3: '',
    careerProfile: '',
    experienceJob1: '',
    experiencePlace1: '',
    experienceDate1: '',
    experience1: '',
    experienceJob2: '',
    experiencePlace2: '',
    experienceDate2: '',
    experience2: '',
    experienceJob3: '',
    experiencePlace3: '',
    experienceDate3: '',
    experience3: '',
    project1: '',
    aboutProject1: '',
    project2: '',
    aboutProject2: '',
    skill1: '',
    skill2: '',
    skill3: '',
  };
  
  constructor(private edit: EditProfUserService,private router: Router) {}

  ngOnInit(): void {
    // this..subscribe(user=>{
    //   this.editProfData=user
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user);
    // })
  }
  editProf(form: NgForm) {
    // console.log(form);
    var obj = form.value;
    console.log(obj);
    var id = this.user._id;

    this.edit.editProf(id, obj).subscribe(
      (res: any) => console.log(res)
      // (err: any) => console.log(err)

    );
    this.router.navigate(['/myprofile-user'])
  }
}
