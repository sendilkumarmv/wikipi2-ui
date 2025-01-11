import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private breadcrumbsSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]); 
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();
  
  constructor() {
    
   }

  setBreadcrumbs(breadcrumbs: Array<{ label: string, url: string }>) {
    let home: Array<{ label: string, url: string }> = [{ label: 'Home', url: '/'}];
    home.push(...breadcrumbs);
    this.breadcrumbsSubject.next(home);
  }
}
