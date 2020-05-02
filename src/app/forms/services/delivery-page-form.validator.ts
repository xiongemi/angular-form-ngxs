import { FormGroup } from '@angular/forms';

import { DeliveryPageFormValue } from '../models/delivery-page-form-value.interface';

export function deliveryPageFromValidator(deliveryPageFrom: FormGroup): { [key: string]: any } | null {
  const formValue: DeliveryPageFormValue = deliveryPageFrom.value;
  return deliveryPageFromValueValidator(formValue);
}

export function deliveryPageFromValueValidator(deliveryPageFromValue: DeliveryPageFormValue): { [key: string]: any } | null {
  const errors = {};
  if (!deliveryPageFromValue.isShippingSame && !deliveryPageFromValue.shippingAddress) {
    errors['shippingAddress'] = true;
  }
  if (deliveryPageFromValue.createAccount) {
    if (!deliveryPageFromValue.account.password) {
      errors['password'] = true;
    }
    if (!deliveryPageFromValue.account.confirmPassword) {
      errors['confirmPassword'] = true;
    } else if (deliveryPageFromValue.account.password !== deliveryPageFromValue.account.confirmPassword) {
      errors['passwordMatch'] = true;
    }
  }
  return Object.keys(errors).length ? errors : null;
}
