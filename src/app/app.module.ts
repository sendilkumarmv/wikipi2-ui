import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { WhensessionDirective } from './shared/directives/whensession.directive';
import { ModalDialogComponent  } from './shared/components/modal-dialog/modal-dialog.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    WhensessionDirective,
    ModalDialogComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatBadgeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }