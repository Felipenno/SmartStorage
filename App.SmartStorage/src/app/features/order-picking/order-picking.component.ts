import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '@shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-order-picking',
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './order-picking.component.html',
  styleUrl: './order-picking.component.scss'
})
export class OrderPickingComponent {

}
