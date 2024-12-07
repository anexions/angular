import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Siempre necesario para módulos secundarios
import { HeroComponent } from './hero/components/hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroComponent, // Declarar HeroComponent aquí para poder usarse en este modulo
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent // Exportar HeroComponent para usarlo en otros módulos
  ],
  imports: [
    CommonModule, // Importar CommonModule para soporte básico de Angular
  ],
  providers: [],
})
export class HeroesModule {}
