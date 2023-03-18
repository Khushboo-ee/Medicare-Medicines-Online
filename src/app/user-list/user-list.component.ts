import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userinfo:User[];

  constructor(
    private userservice:UserserviceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers()
  {
    this.userservice.getAllUser().subscribe(data=>{
      this.userinfo = data;
    });
  }

  updateUserDetails(id:number){
      this.router.navigate(['.updateUser',id]);
  }

  deleteUserDetails(id:number)
  {
    this.userservice.deleteUserById(id).subscribe(data=>{
      console.log(data);
      this.showAllUsers();
    });
  }

}
