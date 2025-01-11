import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = []
  constructor(private breadcrumbService: DataService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => { this.breadcrumbs = breadcrumbs; });
  }
}
