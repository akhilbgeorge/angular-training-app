import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getUserList(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
