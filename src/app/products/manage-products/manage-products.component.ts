import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  standalone: false,
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

  constructor(private router: Router) {}
  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }
}
