import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    CandidateListComponent,
    CandidateCardComponent,
    CreateCandidateComponent,
    CandidateFormComponent,
    EditCandidateComponent,
    ConfirmationModalComponent,
  ],
  imports: [CommonModule, CandidatesRoutingModule, ShareModule],
})
export class CandidatesModule {}
