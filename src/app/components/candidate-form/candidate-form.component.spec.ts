import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CandidateFormComponent } from './candidate-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { findEl } from 'src/app/utils/testing';
let loader: HarnessLoader;

describe('CandidateFormComponent', () => {
  let component: CandidateFormComponent;
  let fixture: ComponentFixture<CandidateFormComponent>;
  let testBed: TestBed;

  beforeEach(() => {
    testBed = TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CandidateFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CandidateFormComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    fixture.detectChanges();
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(4);
  });

  describe('submit', () => {
    const candidate = {
      name: 'Julio',
      surname: 'Ródenas',
      email: 'julio@email.com',
      phone: '786565434',
      linkedIn: '',
      experience: Experience.Senior,
      previousProjects: [],
      skills: [],
    };

    let submitButton: MatButtonHarness;
    beforeEach(async () => {
      component.candidate = candidate;
      component.reset();
      submitButton = await loader.getHarness(
        MatButtonHarness.with({ text: 'Guardar' })
      );
    });
    it('successful submission', async () => {
      fixture.detectChanges();
      component.submit.asObservable().subscribe((value) => {
        expect(value).toEqual(candidate);
      });
      expect(await submitButton.isDisabled()).toBe(false);
      await submitButton.click();
    });
    it('do not submit the invalid form', fakeAsync(async () => {
      const emailInput = await loader.getHarness(
        MatInputHarness.with({ selector: '[type="email"]' })
      );
      await emailInput.setValue('asdfasdf');
      fixture.detectChanges();
      expect(await submitButton.isDisabled()).toBe(true);
    }));
  });

  describe('required fields', () => {
    it('display error messages', async () => {
      const emailInput = await loader.getHarness(
        MatInputHarness.with({ selector: '[type="email"]' })
      );
      await emailInput.setValue('asdfasdf');
      const error = findEl(fixture, 'candidate-email-field-error');
      expect(error).toBeDefined();
    });
  });
});
