import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../../../validadors/forbiddenName.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  nameValue: string = '';
  submitted: boolean = false;

  nameForm: FormGroup = this.formBuilder.group({
    firstname: this.formBuilder.control('', [
      Validators.required,
      forbiddenNameValidator('Max'),
    ]),
    lastname: this.formBuilder.control('', [
      Validators.required,
      forbiddenNameValidator('Mustermann'),
    ]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nameForm.valueChanges.subscribe((formValue) => {
      this.nameValue = formValue.firstname + ' ' + formValue.lastname;
    });
  }

  isNameRequired(nameFormControl: AbstractControl | undefined): boolean {
    return nameFormControl?.errors ? nameFormControl.errors['required'] : null;
  }

  isNamePristine(
    nameFormControl: AbstractControl | undefined
  ): boolean | undefined {
    return nameFormControl?.pristine;
  }

  isNameForbidden(nameFormControl: AbstractControl | undefined): boolean {
    return nameFormControl?.errors ? nameFormControl.errors['forbidden'] : null;
  }

  onSubmit() {
    this.submitted = true;
  }
}
