import { Routes } from "@angular/router";
import { OrderPickingComponent } from "./order-picking.component";
import { OrderPickingListComponent } from "./order-picking-list/order-picking-list.component";

export const orderPicking: Routes = [
    {
        path: '',
        component: OrderPickingComponent,
        children: [
            {
                path: '', component: OrderPickingListComponent, pathMatch: 'full'
            }
        ]
    }
];