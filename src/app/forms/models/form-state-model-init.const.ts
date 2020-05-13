import { initFormState } from 'src/app/models/form-state-init.const';
import { FormStateModel } from './from-state-model.interface';

export const initFormStateModel: FormStateModel = {
  deliveryForm: initFormState,
  shippingForm: initFormState,
  paymentForm: initFormState
};
