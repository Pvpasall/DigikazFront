import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth.guard';

import { PostViewComponent } from "./post/post-view/post-view.component";
import { UserTableViewComponent } from "./user/user-table-view/user-table-view.component";
import { LoginFormComponent } from './auth/login-form/LoginFormComponent';
import { PropertiesViewComponent } from './properties/properties-view/properties-view.component';
import { PropertiesCreateComponent } from './properties/properties-create/properties-create.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: []
  },
  {
    path: 'users',
    component: UserTableViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    component: PostViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'properties',
    component: PropertiesViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-property',
    component: PropertiesCreateComponent,
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}