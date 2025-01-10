import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { ModalDialogComponent } from './shared/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wikipi-ui';
  isMenuForSession = false;
  readonly dialog = inject(MatDialog);

  onSearch() {
  }

  onAbout() {
    const dialogRef = this.dialog.open(ModalDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
}
