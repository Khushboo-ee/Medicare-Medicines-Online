import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  // username:string;
  // password:string;
  adminUrl = "http://localhost:8080/medicare/admin/";

  un:string;
  pwd:string;

  constructor(private http:HttpClient, private router:Router) { }

  getAdminData(username,password){
    this.un=username;
    this.pwd=password;
    return this.http.get(this.adminUrl+username+'/'+password)
  }

  adminLogout(){
    this.un = null;
    this.pwd = null;
    console.log("admin logged out succesfully");
    this.router.navigate(['/adminLogin']);

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
