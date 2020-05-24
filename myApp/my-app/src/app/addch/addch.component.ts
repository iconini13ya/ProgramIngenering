import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SqlServiceService } from '../sql-service.service';

@Component({
  selector: 'app-addch',
  templateUrl: './addch.component.html',
  styleUrls: ['./addch.component.css']
})
export class AddchComponent implements OnInit {
  newCh={
    name:"",
    sname:"",
    age:"",
    sex:"",
    groupNum:""
  }
  constructor(private http: HttpClient,private router: Router,private srv:SqlServiceService) { }

  ngOnInit(): void {
  }
  regCh(){
    this.newCh.groupNum=this.srv.currentGroup;
    this.newCh.sex=this.newCh.sex.toUpperCase();
    this.http.post("http://80.87.194.192:3000/addch",this.newCh).subscribe((result)=>{
      this.router.navigate(['/chlist']);
    });
  }
}
