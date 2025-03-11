import { Routes } from "@angular/router";
import SecurityHomeComponent from "./security-home.component";
import { SecurityUserListComponent } from "../User/security-user-list/security-user-list.component";
import { SecurityPermissionsListComponent } from "../permissions/security-permissions-list/security-permissions-list.component";
import { SecurityFunctionalityListComponent } from "../functionality/security-functionality-list/security-functionality-list.component";

export const securityRoutes: Routes = [
    {
        path: '',
        component: SecurityHomeComponent,
        children: [
            {
                path: '', component: SecurityUserListComponent, pathMatch: 'full'
            },
            {
                path: 'permission', component: SecurityPermissionsListComponent, pathMatch: 'full'
            },
            {
                path: 'functionality', component: SecurityFunctionalityListComponent, pathMatch: 'full'
            }
        ]
    }
];