import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from 'src/app/core/models/candidate';
import { linkedinPattern, phonePattern } from 'src/app/core/utils/Validators';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateFormComponent implements OnInit {
  candidateForm: FormGroup;

  @Input() candidate: Candidate | null = null;

  @Output() submit = new EventEmitter<Candidate>();
  @Output() back = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.candidateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(phonePattern)]],
      linkedIn: ['', [Validators.pattern(linkedinPattern)]],
      experience: ['', [Validators.required]],
      skills: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.reset();
  }

  get name() {
    return this.candidateForm.get('name');
  }

  getNameErrors() {
    if (this.name?.hasError('required')) {
      return 'Debe introducir un nombre.';
    }
    return this.name?.hasError('minlength')
      ? 'El nombre debe tener al menos 2 carácteres'
      : '';
  }

  get surname() {
    return this.candidateForm.get('surname');
  }

  getSurnameErrors() {
    if (this.name?.hasError('required')) {
      return 'Debe introducir los apellidos.';
    }
    return this.name?.hasError('minlength')
      ? 'Los apellidos debe tener al menos 2 carácteres'
      : '';
  }

  get email() {
    return this.candidateForm.get('email');
  }

  getEmailErrors() {
    if (this.email?.hasError('required')) {
      return 'Debe introducir un email.';
    }
    return this.email?.hasError('email')
      ? 'Debe introducir un email correcto'
      : '';
  }

  get phone() {
    return this.candidateForm.get('phone');
  }

  getPhoneErrors() {
    return this.phone?.hasError('pattern')
      ? 'Debe introducir un teléfono correcto, ej (+34555667788)'
      : '';
  }

  get linkedIn() {
    return this.candidateForm.get('linkedIn');
  }

  getLinkedinErrors() {
    return this.linkedIn?.hasError('pattern')
      ? 'Debe introducir un perfil de linkedin correcto'
      : '';
  }

  get experience() {
    return this.candidateForm.get('experience');
  }

  getExperienceErrors() {
    return this.experience?.hasError('required')
      ? 'Debe seleccionar la experiencia'
      : '';
  }

  get skills() {
    return this.candidateForm.get('skills') as FormArray;
  }

  onSubmit() {
    const savedCandidate: Candidate = Object.assign(
      {},
      this.candidate,
      this.candidateForm.value
    );
    this.submit.emit(savedCandidate);
  }

  goBack() {
    this.back.emit();
  }

  reset() {
    this.candidateForm.reset();
    this.skills.clear();
    if (this.candidate) {
      const skills = [];
      if (Array.isArray(this.candidate.skills)) {
        this.candidate.skills.forEach((skill, index) => {
          skills.push(skill);
          this.addSkill();
        });
      } else {
        this.addSkill();
        skills.push('');
      }
      this.candidateForm.setValue({
        name: this.candidate.name,
        surname: this.candidate.surname,
        email: this.candidate.email,
        phone: this.candidate.phone ? this.candidate.phone : '',
        linkedIn: this.candidate.linkedIn ? this.candidate.linkedIn : '',
        experience: this.candidate.experience,
        skills,
      });
    }
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
