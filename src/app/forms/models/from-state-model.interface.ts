import { FormState } from 'src/app/models/form-state.interface';
import { DeliveryPageFormValue } from './delivery-page-form-value.interface';
import { PaymentPageFormValue } from './payment-page-form-value.interface';
import { ShippingPageFormValue } from './shipping-page-form-value.interface';

export interface FormStateModel {
  deliveryForm: FormState<DeliveryPageFormValue>;
  shippingForm: FormState<ShippingPageFormValue>;
  paymentForm: FormState<PaymentPageFormValue>;
}
