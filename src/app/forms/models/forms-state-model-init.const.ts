import { initFormState } from 'src/app/models/forms-state-init.const';
import { FormsStateModel } from './froms-state-model.interface';

export const initFormsStateModel: FormsStateModel = {
  deliveryForm: initFormState,
  shippingForm: initFormState,
  paymentForm: initFormState
};
