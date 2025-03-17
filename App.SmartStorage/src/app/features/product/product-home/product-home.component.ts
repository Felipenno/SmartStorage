import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '@shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-product-home',
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export default class ProductHomeComponent {

}
