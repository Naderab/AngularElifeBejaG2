import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../core/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl:string='/api/users'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private httpClient: HttpClient) { }
  

  get():Observable<User[]>{
    return this.httpClient.get<User[]>(this.usersUrl);
  }
  add(user: User): Observable<User> {
    
    return this.httpClient.post<User>(this.usersUrl, user,
    this.httpOptions);}
}
