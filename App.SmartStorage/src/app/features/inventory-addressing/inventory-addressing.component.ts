import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '@shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-inventory-addressing',
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './inventory-addressing.component.html',
  styleUrl: './inventory-addressing.component.scss'
})
export class InventoryAddressingComponent {

}
