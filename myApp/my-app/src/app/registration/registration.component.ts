import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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
  return this.http.post("http://localhost:4200/registration",this.newUser).subscribe((response)=>{
    // console.log(response);
  });
  }
}
