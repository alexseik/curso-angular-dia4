import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Candidate } from 'src/app/core/models/candidate';
import { CandidatesService } from 'src/app/core/services/candidates.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

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
    const obs = this.service.save(candidate);
    obs.pipe(take(1)).subscribe();
    this.router.navigate(['/']);
  }
  back() {
    this.location.back();
  }
}
