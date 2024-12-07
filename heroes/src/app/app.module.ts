import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './dbz/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule, //Importas HeroesModule, que ya contiene ListComponent y HeroComponent
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente inicial de la app
})
export class AppModule {}
