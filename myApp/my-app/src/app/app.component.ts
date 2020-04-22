import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  MyData:any;
  constructor(private http: HttpClient){}
      
  // FindSomeText(){
  //     this.http.get('http://localhost:3000/posts').subscribe((response)=>{
  //       this.MyData=response;
  //       console.log(this.MyData);  
  //     });
  // }
}
