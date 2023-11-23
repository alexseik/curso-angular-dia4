import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidates/components/candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './candidates/components/create-candidate/create-candidate.component';
import { EditCandidateComponent } from './candidates/components/edit-candidate/edit-candidate.component';
import { authenticationGuard } from './core/authentication.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ofertas',
    loadChildren: () =>
      import('./ofertas/ofertas.module').then((mod) => mod.OfertasModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./candidates/candidates.module').then(
        (mod) => mod.CandidatesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
