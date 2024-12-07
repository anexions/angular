import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent, // Declaras solo el componente raíz aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule, // Importas HeroesModule, que ya contiene ListComponent y HeroComponent
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente inicial de la app
})
export class AppModule {}
