import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ArticleList } from './components/article-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { Register } from './components/register.component';

import { ArticleService } from './services/article.service';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleList,
    SidePanel,
    NavBar,
    Register
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ArticleService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
