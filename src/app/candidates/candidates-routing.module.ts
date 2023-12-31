import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { authenticationGuard } from '../core/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: CandidateListComponent,
  },
  {
    path: 'create',
    canActivate: [authenticationGuard],
    component: CreateCandidateComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [authenticationGuard],
    component: EditCandidateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule {}
