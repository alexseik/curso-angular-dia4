import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditCandidateComponent } from './edit-candidate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/core/models/candidate';
import { HttpClient } from '@angular/common/http';

describe('EditCandidateComponent', () => {
  let component: EditCandidateComponent;
  let fixture: ComponentFixture<EditCandidateComponent>;

  const candidateServiceMock = {
    api: '',
    http: null as unknown as HttpClient,
    getCandidates: function (): Observable<Candidate[]> {
      throw new Error('Function not implemented.');
    },
    getCandidate: function (id: string | number): Observable<Candidate> {
      throw new Error('Function not implemented.');
    },
    save: function (candidate: Candidate): Observable<Candidate> {
      throw new Error('Function not implemented.');
    },
    update: function (candidate: Candidate): Observable<Candidate> {
      throw new Error('Function not implemented.');
    },
    remove: function (id: string | number): Observable<Object> {
      throw new Error('Function not implemented.');
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCandidateComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CandidatesService,
          useValue: candidateServiceMock,
        },
      ],
    });
    fixture = TestBed.createComponent(EditCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
