import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ModalDialogComponent } from './shared/components/modal-dialog/modal-dialog.component';
import { filter } from 'rxjs/operators';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'wikipi-ui';
  isMenuForSession = false;

  readonly dialog = inject(MatDialog);

  constructor(private router: Router, private dataService: DataService) { }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadCrumbs = this.createBreadcrumbs(this.router.routerState.root);
      this.dataService.setBreadcrumbs(breadCrumbs);
    })
  }

  onSearch() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onAbout() {
    const dialogRef = this.dialog.open(ModalDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  manageProducts() {
    this.router.navigate(['/manage-products']);
  }

  signUp() {
    this.router.navigate(['/create-account']);
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      const label = child.snapshot.data['breadCrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
