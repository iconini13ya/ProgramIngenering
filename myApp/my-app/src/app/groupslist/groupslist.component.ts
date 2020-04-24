import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SqlServiceService } from '../sql-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.css']
})
export class GroupslistComponent implements OnInit {
  groups:any;
  constructor(private http: HttpClient,private srv:SqlServiceService,private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/groups").subscribe((response)=>{
      this.groups=response;
    });
  }
  getGroupNum(groupNum){
    this.srv.currentGroup=groupNum;
    this.router.navigate(['/chlist']);
  }
}
