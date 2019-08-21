import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './LandingPage/sidebar/sidebar.component';
import { HeaderComponent } from './LandingPage/header/header.component';
import { AboutMeComponent } from './LandingPage/about-me/about-me.component';
import { SkillsComponent } from './LandingPage/skills/skills.component';
import { ProjectsComponent } from './LandingPage/projects/projects.component';
import { BigoComponent } from './BigO/bigo/bigo.component';
import { HomeComponent } from './LandingPage/home/home.component';
import { TitleComponent } from './title/title.component';
import { BigoFormComponent } from './BigO/bigo-form/bigo-form.component';
import { BigoStoriesComponent } from './BigO/bigo-stories/bigo-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    BigoComponent,
    HomeComponent,
    TitleComponent,
    BigoFormComponent,
    BigoStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
