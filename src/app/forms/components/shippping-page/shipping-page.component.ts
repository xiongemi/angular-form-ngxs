import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { shippingMethods } from '../../models/shipping-methods.const';

@Component({
  selector: 'afn-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.css']
})
export class ShippingPageComponent {
  shippingPageForm = this.fb.group({
    method: [1],
    isAGift: [null],
    giftOptions: this.fb.group({
      includeGiftRecipt: [null],
      name: [null],
      message: [null],
      wrap: [false]
    })
  });

  shippingMethods = shippingMethods.sort((method1, method2) => method1.price - method2.price);

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    this.router.navigate(['payment']);
  }
}
