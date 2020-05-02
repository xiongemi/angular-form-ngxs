import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class FormGroupErrorStateMatcher implements ErrorStateMatcher {
  errors: string[];

  constructor(errors: string[]) {
    this.errors = errors;
  }

  isErrorState(control: FormControl | null, formDirective: FormGroupDirective | NgForm | null): boolean {
    const formGroupHasError = this.errors.reduce((total, error) => total || formDirective.form.hasError(error), false);
    return control.touched && (control.invalid || formGroupHasError);
  }
}
