import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  group={
    Num:""
  };
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  registerGroup(){
    this.http.post("http://localhost:3000/addgroup",this.group).subscribe((response)=>{
      this.router.navigate(['/groups']);
  });
  }
}
