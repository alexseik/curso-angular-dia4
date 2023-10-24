import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardComponent } from './candidate-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Experience } from 'src/app/models/experience';

describe('CandidateCardComponent', () => {
  let component: CandidateCardComponent;
  let fixture: ComponentFixture<CandidateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CandidateCardComponent);
    component = fixture.componentInstance;
    component.candidate = {
      id: 0,
      email: 'candidate@email.com',
      phone: '+34634434312',
      experience: Experience.Junior,
      name: 'Carlos',
      previousProjects: [
        {
          name: 'BBVA',
          technology: ['ReactJS'],
          description: 'A description',
          experience: 1,
        },
      ],
      surname: 'Ruiz Marco',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
