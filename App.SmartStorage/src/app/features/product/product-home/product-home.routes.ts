import { Routes } from '@angular/router';
import ProductHomeComponent from './product-home.component';
import { ProductListComponent } from '../product-list/product-list.component';

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductHomeComponent,
        children: [
            {
                path: '', component: ProductListComponent, pathMatch: 'full'
            }
        ]
    }
];