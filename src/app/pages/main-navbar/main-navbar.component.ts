// src/app/pages/main-navbar/main-navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {
  isSidebarOpen = true; // Sidebar is open by default

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
