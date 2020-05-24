import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacherregistration',
  templateUrl: './teacherregistration.component.html',
  styleUrls: ['./teacherregistration.component.css']
})
export class TeacherregistrationComponent implements OnInit {
  newUser={
    name:"",
    sname:"",
    login:"", 
    password:"", 
    mail:""
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.http.post("http://80.87.194.192:3000/teacherregistration",this.newUser).subscribe((response)=>{
  });
}
}
