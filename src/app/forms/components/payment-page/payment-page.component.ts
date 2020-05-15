import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';

import { RoutePath } from 'src/app/models/route-path.enum';
import { numberOnlyRegex } from 'src/app/shared/regexes.const';

const minExpiryDate = format(new Date(), 'yyyy-MM');

@Component({
  selector: 'afn-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit, OnDestroy {
  paymentPageForm = this.fb.group({
    cardNumber: [null, [Validators.required, Validators.pattern(numberOnlyRegex)]],
    expiryDate: [null, [Validators.required]],
    cvv: [null, [Validators.required, Validators.pattern(numberOnlyRegex)]]
  });

  minExpiryDate = minExpiryDate;
  submitted = false;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.subscription.add(
      this.paymentPageForm.valueChanges.subscribe(() => {
        this.submitted = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.paymentPageForm.markAllAsTouched();
    if (this.paymentPageForm.valid) {
      this.router.navigate([RoutePath.review]);
    }
  }
}
