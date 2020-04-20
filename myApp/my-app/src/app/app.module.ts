import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutProgrammComponent } from './about-programm/about-programm.component';
import { from } from 'rxjs';

const appRoutes: Routes=[
  {path:'',component:AboutProgrammComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutProgrammComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
