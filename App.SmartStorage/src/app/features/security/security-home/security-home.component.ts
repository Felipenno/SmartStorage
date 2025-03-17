import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '@shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-security-home',
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './security-home.component.html',
  styleUrl: './security-home.component.scss'
})
export default class SecurityHomeComponent {

}
