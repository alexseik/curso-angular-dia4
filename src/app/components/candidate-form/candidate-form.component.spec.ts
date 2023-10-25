import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormComponent } from './candidate-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CandidateFormComponent', () => {
  let component: CandidateFormComponent;
  let fixture: ComponentFixture<CandidateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CandidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
