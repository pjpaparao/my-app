import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Demo } from './demo.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  private userUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(this.userUrl);
  }

  public createUser(user) {
    console.log("userdetails - >" + user);
    return this.http.post<User>(this.userUrl + "/", user);
  }
}
