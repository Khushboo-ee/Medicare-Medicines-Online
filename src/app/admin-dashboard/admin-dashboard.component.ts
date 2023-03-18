import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit   {

  constructor(
    private router:Router,
    private adminservice:AdminserviceService
  ) { }

  
  ngOnInit(): void {
  }

  AdminLogout(){
    this.adminservice.adminLogout();
  }

}
