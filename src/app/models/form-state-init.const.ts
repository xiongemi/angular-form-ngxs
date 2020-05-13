import { FormState } from './form-state.interface';

export const initFormState: FormState<any> = {
  model: undefined,
  dirty: false,
  status: '',
  errors: null
};
