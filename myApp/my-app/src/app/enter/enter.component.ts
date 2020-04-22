import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import { SqlServiceService } from '../sql-service.service';

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
  constructor(private http: HttpClient,private router: Router,private srv:SqlServiceService) { }
  
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
      this.srv.cashUserData.name=result[0].uname;
      this.srv.cashUserData.sname=result[0].sname;
      this.srv.cashUserData.mail=result[0].mail;
      switch(result[0].adminrole){
          case 0:
            this.srv.cashUserData.role="Пользователь";
            break;
          case 1:
            this.srv.cashUserData.role="Воспитатель";
            this.router.navigate(['/teacher']);
            break;
          case 2:
            this.srv.cashUserData.role="Администратор";
          break;
      };

        // switch(result[0].adminrole){
        //   case 0:
        //     console.log("Это пользователь");
        //     break;
        //   case 1:
           
        //     break;
        //   case 2:
        //   console.log("Это админ");
        //   break;
        // }
        
        // this.router.navigate(['']);
      }
    });
  }
}
