import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: OfertasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasRoutingModule {}
