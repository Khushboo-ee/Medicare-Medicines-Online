import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarVisible=false;
  
  constructor(
    private adminservice:AdminserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  AdminLogout(){
    this.adminservice.adminLogout();
  }

  adminloggedIn(){
   
    if (this.adminservice.isLoggedIn){
      console.log("user logged in") ; 
      return true;
    }
     
    else{
      console.log("user logged out") ;  
      return false;
    }   
  }

  ngDoCheck():void
  {
      let currentUrl = this.router.url;
      console.log(currentUrl);
      
      if(currentUrl=="/adminLogin" || currentUrl=="/userLogin" || currentUrl=="/userReg" ||  currentUrl=="/adminDashboard")
      {
        this.isNavbarVisible = false;
      }
      else
      {
        this.isNavbarVisible =true;
      }
  }

}
