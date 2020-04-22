import { Component, OnInit } from '@angular/core';
import { SqlServiceService } from '../sql-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  cashRole="";
  cashName="";
  cashSname="";
  constructor(private srv:SqlServiceService) { }

  ngOnInit(): void {
    this.cashRole=this.srv.cashUserData.role;
    this.cashName=this.srv.cashUserData.name;
    this.cashSname=this.srv.cashUserData.sname;
  }

}
