import { Routes } from "@angular/router";
import { InventoryAddressingListComponent } from "./inventory-addressing-list/inventory-addressing-list.component";
import { InventoryAddressingMapComponent } from "./inventory-addressing-map/inventory-addressing-map.component";
import { InventoryAddressingComponent } from "./inventory-addressing.component";

export const inventoryAddressing: Routes = [
    {
        path: '',
        component: InventoryAddressingComponent,
        children: [
            {
                path: '', component: InventoryAddressingListComponent, pathMatch: 'full'
            },
            {
                path: 'map', component: InventoryAddressingMapComponent, pathMatch: 'full'
            }
        ]
    }
];