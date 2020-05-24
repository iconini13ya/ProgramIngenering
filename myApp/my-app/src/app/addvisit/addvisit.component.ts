import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SqlServiceService } from '../sql-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvisit',
  templateUrl: './addvisit.component.html',
  styleUrls: ['./addvisit.component.css']
})
export class AddvisitComponent implements OnInit {
  Data={
    chID:"",
    date:""
  }
  constructor(private http: HttpClient,private srv:SqlServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  createDate(){
    var myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.Data.chID=this.srv.currentChId;
    this.Data.date=myDate;
    this.http.post("http://80.87.194.192:3000/addvisit",this.Data).subscribe((result)=>{
      this.router.navigate(['/chlist']);
    });
  }
}
