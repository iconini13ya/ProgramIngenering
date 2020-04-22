import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class SqlServiceService {
  cashUserData={
  name:"",
  sname:"",
  mail:"",
  role:""
  }
  constructor(private http: HttpClient) { }

  // findUserbyLogAndPass(login,password){
  //   const params = new HttpParams().set("login",login).set("password",password);
  //   this.http.get("http://localhost:3000/enter",{params}).subscribe((result)=>{
  //     this.cashUserData.name=result[0].uname;
  //     this.cashUserData.sname=result[0].sname;
  //     this.cashUserData.mail=result[0].mail;
  //     switch(result[0].adminrole){
  //       case 0:
  //           this.cashUserData.role="Пользователь";
  //           break;
  //         case 1:
  //           this.cashUserData.role="Воспитатель";
  //           break;
  //         case 2:
  //           this.cashUserData.role="Админ";
  //         break;
  //     };
        
  //   });
  // }
}
