import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListComponent } from './candidate-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CandidateListComponent', () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
