import { ValidationErrors } from '@angular/forms';

export interface FormState<T> {
  model: T;
  dirty: boolean;
  status: string;
  errors: ValidationErrors | null;
}
