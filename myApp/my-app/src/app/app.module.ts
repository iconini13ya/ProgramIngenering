import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutProgrammComponent } from './about-programm/about-programm.component';
import { from } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { EnterComponent } from './enter/enter.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SqlServiceService } from './sql-service.service';
import { TeacherregistrationComponent } from './teacherregistration/teacherregistration.component';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { ChlistComponent } from './chlist/chlist.component';
import { AddchComponent } from './addch/addch.component';
import { VisitlistComponent } from './visitlist/visitlist.component';
import { AddvisitComponent } from './addvisit/addvisit.component';

const appRoutes: Routes=[
  {path:'',component:AboutProgrammComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'enter',component:EnterComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'teacherregistration',component:TeacherregistrationComponent},
  {path:'groups',component:GroupslistComponent},
  {path:'addgroup',component:AddgroupComponent},
  {path:'chlist',component:ChlistComponent},
  {path:'addch',component:AddchComponent},
  {path:'visits',component:VisitlistComponent},
  {path:'addvisit',component:AddvisitComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutProgrammComponent,
    RegistrationComponent,
    EnterComponent,
    TeacherComponent,
    TeacherregistrationComponent,
    GroupslistComponent,
    AddgroupComponent,
    ChlistComponent,
    AddchComponent,
    VisitlistComponent,
    AddvisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SqlServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
