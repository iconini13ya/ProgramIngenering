import { Component, OnInit } from '@angular/core';
import { SqlServiceService } from '../sql-service.service';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-chlist',
  templateUrl: './chlist.component.html',
  styleUrls: ['./chlist.component.css']
})
export class ChlistComponent implements OnInit {
  children:any;
  Data={
    groupNum:""
  }
  constructor(private http: HttpClient,private router: Router,private srv:SqlServiceService) { }

  ngOnInit(): void {
    const params = new HttpParams().set("grNum",this.srv.currentGroup);
    this.http.get("http://localhost:3000/chlist",{params}).subscribe((result)=>{
      this.children=result;
    });
  }
  seeVisits(id){
    this.srv.currentChId=id;
    this.router.navigate(['/visits']);
  }
}
