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

const appRoutes: Routes=[
  {path:'',component:AboutProgrammComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'enter',component:EnterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutProgrammComponent,
    RegistrationComponent,
    EnterComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
