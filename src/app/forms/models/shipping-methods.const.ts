import { add } from 'date-fns';
import { ShippingMethod } from './shipping-method.interface';

export const shippingMethods: ShippingMethod[] = [
  {
    id: 1,
    type: 'Standard Shipping',
    price: 5.99,
    arrival: {
      max: add(new Date(), { days: 4 })
    }
  },
  {
    id: 2,
    type: 'FREE Shipping',
    price: 0,
    arrival: {
      min: add(new Date(), { days: 5 }),
      max: add(new Date(), { days: 7 })
    }
  },
  {
    id: 3,
    type: 'Two-Day Shipping',
    price: 8.99,
    arrival: {
      max: add(new Date(), { days: 2 })
    }
  }
].sort((method1, method2) => method1.price - method2.price);
