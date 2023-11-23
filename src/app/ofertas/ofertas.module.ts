import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [OfertasComponent],
  imports: [CommonModule, OfertasRoutingModule, ShareModule],
})
export class OfertasModule {}
