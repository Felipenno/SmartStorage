import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuLocalComponent } from '@shared/components/nav-menu-local/nav-menu-local.component';
import { NavMenuComponent } from '@shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-security-home',
  imports: [
    RouterOutlet, 
    NavMenuComponent,
    NavMenuLocalComponent
  ],
  templateUrl: './security-home.component.html',
  styleUrl: './security-home.component.scss'
})
export default class SecurityHomeComponent {
  menuOptions = [
    { title: 'Usuários', icon: 'people', route: 'user', tooltip: 'Manage users' },
    { title: 'Permissões', icon: 'lock', route: 'permission', tooltip: 'Manage permissions' },
    { title: 'Funcionalidades', icon: 'settings', route: 'functionality', tooltip: 'Manage functionalities' }
  ];
}
