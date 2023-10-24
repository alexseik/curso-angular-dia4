import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Candidate } from 'src/app/models/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
})
export class CreateCandidateComponent {
  constructor(
    private location: Location,
    private service: CandidatesService,
    private router: Router
  ) {}
  onSubmit(candidate: Candidate) {
    this.service.save(candidate);
    this.router.navigate(['/']);
  }
  back() {
    this.location.back();
  }
}
