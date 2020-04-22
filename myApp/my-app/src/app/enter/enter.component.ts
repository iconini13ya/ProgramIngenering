import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  badPassVisible;
  userData={
    loginCash:"",
    passwordCash:""
  }
  constructor(private http: HttpClient,private router: Router) { }
  
  ngOnInit(): void {
    this.badPassVisible="hidden";
  }
  findUserAndEnter(){
    const params = new HttpParams().set("login",this.userData.loginCash).set("password",this.userData.passwordCash);
    this.http.get("http://localhost:3000/enter",{params}).subscribe((result)=>{
      if(result==0){
        this.badPassVisible="visible";
      }
      else{
        console.log("Найден, он тут");
      }
    });
  }
}
