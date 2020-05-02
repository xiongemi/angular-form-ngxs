import { DeliveryPageFormValue } from './delivery-page-form-value.interface';

export const mockDeliveryPageFormValue: DeliveryPageFormValue = {
  billingAddress: {
    firstName: 'Joe',
    lastName: 'Doe',
    addressLine1: 'address line 1',
    city: 'city',
    province: 'province',
    country: 'country',
    postalCode: '12345'
  },
  isShippingSame: true,
  createAccount: true,
  account: {
    email: 'joe@gmail.com',
    password: 'Password123.',
    confirmPassword: 'Password123.'
  }
};
