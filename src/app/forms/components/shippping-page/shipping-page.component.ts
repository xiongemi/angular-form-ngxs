import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RoutePath } from 'src/app/models/route-path.enum';
import { shippingMethods } from '../../models/shipping-methods.const';

@Component({
  selector: 'afn-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.css']
})
export class ShippingPageComponent {
  shippingPageForm = this.fb.group({
    method: [1, Validators.required],
    isAGift: [null],
    giftOptions: this.fb.group({
      includeGiftRecipt: [false],
      name: [null],
      message: [null],
      wrap: [false]
    })
  });

  shippingMethods = shippingMethods;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    if (this.shippingPageForm.valid) {
      this.router.navigate([RoutePath.payment]);
    }
  }
}
