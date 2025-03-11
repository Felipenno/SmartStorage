import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import UserComponent from './user.component';

export const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '', component: LoginComponent, pathMatch: 'full'
            },
            {
                path: 'register', component: RegisterComponent, pathMatch: 'full'
            }
        ]
    }
];