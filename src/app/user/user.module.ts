import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';

const userRoutes: Routes = [
  { path: '', component: CreateAccountComponent, data: { breadCrumb: 'Create Account'} },
  { path: 'create-account', component: CreateAccountComponent, data: { breadCrumb: 'Create Account'}}
];

@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
