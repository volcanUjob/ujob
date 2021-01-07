import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EditProfUserService {
  private editUrl = 'http://localhost:3000/api/edit/';

  constructor(private http: HttpClient) {}
  editProf(id: any, user: any) {
    return this.http.put(`http://localhost:3000/api/edit/${id}` ,user);
  }
 
}
