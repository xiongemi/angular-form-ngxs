import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';

const minExpiryDate = format(new Date(), 'yyyy-MM');

@Component({
  selector: 'afn-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  paymentPageForm = this.fb.group({
    cardNumber: [null, [Validators.required]],
    expiryDate: [null, [Validators.required]],
    cvv: [null, [Validators.required]]
  });

  minExpiryDate = minExpiryDate;

  constructor(private fb: FormBuilder, private router: Router) {}
}
