import { Routes } from '@angular/router';
import { ManageProductsComponent } from './products/manage-products/manage-products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent, data: { breadCrumb: 'Home'} },
    { path: 'manage-products', component: ManageProductsComponent, data: { breadCrumb: 'Manage Products'} },
    { path: 'create-account', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];
