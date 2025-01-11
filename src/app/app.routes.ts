import { Routes } from '@angular/router';
import { ManageProductsComponent } from './products/manage-products/manage-products.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'manage-products', component: ManageProductsComponent, data: { breadCrumb: 'Manage Products' } },
    { path: 'add-product', component: AddProductComponent, data: { breadCrumb: "Add Product"}},
    { path: 'create-account', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];
