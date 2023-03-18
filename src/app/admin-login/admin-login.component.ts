import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  model:any={};
  getdata : any;
  msg: any;
  constructor(
    private adminservce:AdminserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    var un1 = this.model.username;
    var pwd1 = this.model.password;

    console.log(un1 +" "+pwd1);

    this.adminservce.getAdminData(un1,pwd1).subscribe((res:boolean)=>{
      this.getdata = res;

      if (this.getdata==1)
       {
      this.router.navigate(['/adminDashboard']);  
      } 
      else {
        alert("Invalid login credentials");
        this.msg="Incorrect username/password";
        this.router.navigate(['/adminLogin']);
      }
    });
  }

}
