import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserTableViewComponent } from './user/user-table-view/user-table-view.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { PostService } from './post/post.service';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { animation } from '@angular/animations';




@NgModule({
  declarations: [
    AppComponent,
    UserTableViewComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
