import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidateComponent } from './create-candidate.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateCandidateComponent', () => {
  let component: CreateCandidateComponent;
  let fixture: ComponentFixture<CreateCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCandidateComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CreateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
