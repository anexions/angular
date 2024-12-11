import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa el archivo de rutas
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Configura las rutas aquí
    HeaderComponent // Importa el header si es standalone
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
