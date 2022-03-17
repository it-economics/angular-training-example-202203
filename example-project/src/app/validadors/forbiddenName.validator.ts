import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
  return (formControl: AbstractControl) => {
    const forbidden = formControl.value === forbiddenName;
    return forbidden ? { forbidden: {value: formControl.value} } : null;
  }
}
