import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule.forChild(userRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   UserService 
  ]
})
export class UserModule { }
