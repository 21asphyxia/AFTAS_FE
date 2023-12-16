import { Component } from '@angular/core';
import { navItems } from './_nav';
import { ContainerComponent, SidebarBrandComponent, SidebarComponent, SidebarNavComponent, SidebarTogglerComponent } from '@coreui/angular';
import { NgScrollbar } from 'ngx-scrollbar';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        SidebarComponent,
        SidebarBrandComponent,
        NgScrollbar,
        SidebarNavComponent,
        SidebarTogglerComponent,
        ContainerComponent,
    ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  public navItems = navItems;
}
