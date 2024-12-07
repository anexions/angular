import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/components/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, ContadorModule, HeroesModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
