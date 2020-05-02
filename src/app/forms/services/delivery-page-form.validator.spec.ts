import { mockDeliveryPageFormValue } from '../models/delivery-page-form-value.mock';
import { deliveryPageFromValueValidator } from './delivery-page-form.validator';

describe('Delivery Page Form Validator', () => {
  it('should return null if form is valid', () => {
    const actual = deliveryPageFromValueValidator(mockDeliveryPageFormValue);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  it('should return shippingAddress if shipping address is not same and shipping address is missing', () => {
    const invalidForm = {
      billingAddress: {
        firstName: 'Joe',
        lastName: 'Doe',
        addressLine1: 'address line 1',
        city: 'city',
        province: 'province',
        country: 'country',
        postalCode: '12345'
      },
      isShippingSame: false,
      createAccount: true,
      account: {
        email: 'joe@gmail.com',
        password: 'Password123.',
        confirmPassword: 'Password123.'
      }
    };
    const actual = deliveryPageFromValueValidator(invalidForm);
    const expected = { shippingAddress: true };
    expect(actual).toEqual(expected);
  });
});
