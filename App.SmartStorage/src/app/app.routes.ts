import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component')
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user/user.routes').then(m => m.userRoutes)
    },
    {
        path: 'security',
        loadChildren: () => import('./features/security/security-home/security-home.routes').then(m => m.securityRoutes)
    },
    {
        path: 'product',
        loadChildren: () => import('./features/product/product-home/product-home.routes').then(m => m.productRoutes)
    }
];
