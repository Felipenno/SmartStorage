import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    MatListModule,
    CommonModule,
    NavMenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
