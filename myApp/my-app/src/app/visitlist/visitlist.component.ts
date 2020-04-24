import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';
import { SqlServiceService } from '../sql-service.service';

@Component({
  selector: 'app-visitlist',
  templateUrl: './visitlist.component.html',
  styleUrls: ['./visitlist.component.css']
})
export class VisitlistComponent implements OnInit {
  visits:any;
  Data={
    chID:""
  }
  constructor(private http: HttpClient,private srv:SqlServiceService,private router:Router) { }

  ngOnInit(): void {
    this.Data.chID=this.srv.currentChId;
    const params = new HttpParams().set("chID",this.Data.chID);
    console.log(this.Data.chID);
    this.http.get("http://localhost:3000/visits",{params}).subscribe((result)=>{
      this.visits=result;
    });
  }

}
