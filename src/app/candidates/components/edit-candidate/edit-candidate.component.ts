import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, switchMap, take } from 'rxjs';
import { Candidate } from 'src/app/core/models/candidate';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss'],
})
export class EditCandidateComponent implements OnInit {
  candidate$!: Observable<Candidate>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidatesService: CandidatesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.candidate$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const selectedId = parseInt(params.get('id')!, 10);
        return this.candidatesService.getCandidate(selectedId);
      })
    );
  }

  onSubmit(candidate: Candidate) {
    this.candidatesService.update(candidate).pipe(take(1)).subscribe();
    this.router.navigate(['/']);
  }

  back() {
    this.location.back();
  }
}
