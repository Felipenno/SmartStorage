import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NavMenuLocalOptions } from '@shared/models/nav-menu-local-options';

@Component({
  selector: 'app-nav-menu-local',
  imports: [
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './nav-menu-local.component.html',
  styleUrl: './nav-menu-local.component.scss'
})
export class NavMenuLocalComponent {
  menuOptions = input.required<NavMenuLocalOptions[]>();
}
