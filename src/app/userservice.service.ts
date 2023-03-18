import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userUrl = "http://localhost:8080/medicare/user/";

  un:string;
  pwd:string;
  constructor(
    private httpClient:HttpClient,
    private router:Router
    ) { }

  getAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.userUrl}/getall`);
  }

  newUser(user:User) :Observable<Object>{
    return this.httpClient.post(this.userUrl+'create',user);
  }

  // getEmployeeInfoById(id:number):Observable<User>{

  //   return this.httpClient.get<User(this.userUrl+'/'+id);
  // }

  deleteUserById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  updateUserById(id:number, user:User):Observable<Object>{
    return this.httpClient.put(`${this.userUrl}/${id}`, user);
  }

  getUserData(username,password){
    this.un=username;
    this.pwd=password;
    return this.httpClient.get(this.userUrl+username+'/'+password)
  }

  userLogout(){
    this.un = null;
    this.pwd = null;
    console.log("user logged out succesfully");
    this.router.navigate(['/userLogin']);

  }

  isLoggedIn(){
    if ((this.un==null)&&(this.pwd==null)) {
      console.log("user logged out") ;   
      return false; 
          
    } else {
      console.log("user logged in") ;   
      return true;      
    }
  }

}
