import { FormState } from 'src/app/models/forms-state.interface';
import { DeliveryPageFormValue } from './delivery-page-form-value.interface';
import { PaymentPageFormValue } from './payment-page-form-value.interface';
import { ShippingPageFormValue } from './shipping-page-form-value.interface';

export interface FormsStateModel {
  deliveryForm: FormState<DeliveryPageFormValue>;
  shippingForm: FormState<ShippingPageFormValue>;
  paymentForm: FormState<PaymentPageFormValue>;
}
