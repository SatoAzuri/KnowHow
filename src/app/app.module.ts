import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { SigninComponent } from './components/signin/signin.component';
import { MatSelectModule } from '@angular/material/select';
import { MagazineComponent } from './components/magazine/magazine.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './components/teacher/teacher.component';

//import { Http } from '@angular/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    ChapterComponent,
    AssignmentComponent,
    HomepageComponent,
    SigninComponent,
    MagazineComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    HttpModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    CommonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'contact-us',
        component:ContactUsComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'chapter',
        component: ChapterComponent
      },
      {
        path: 'magazine/:id',
        component: MagazineComponent
      },
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'signin',
        component:SigninComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      }
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
