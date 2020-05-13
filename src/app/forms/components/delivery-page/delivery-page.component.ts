import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RoutePath } from 'src/app/models/route-path.enum';
import { FormGroupErrorStateMatcher } from 'src/app/shared/form-group-error-state-matcher';
import { passwordRegex } from 'src/app/shared/regexes.const';
import { deliveryPageFromValidator } from '../../services/delivery-page-form.validator';

@Component({
  selector: 'afn-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.css']
})
export class DeliveryPageComponent implements OnInit, OnDestroy {
  deliveryPageForm = this.fb.group(
    {
      billingAddress: [null, Validators.required],
      isShippingSame: [true, Validators.required],
      shippingAddress: [null],
      createAccount: [true, Validators.required],
      account: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.pattern(passwordRegex)]],
        confirmPassword: ['']
      })
    },
    { validator: deliveryPageFromValidator }
  );

  passwordErrorStateMatcher = new FormGroupErrorStateMatcher(['password']);
  confirmPassowrdErrorStateMatcher = new FormGroupErrorStateMatcher(['confirmPassword', 'passwordMatch']);
  submitted = false;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.subscription.add(
      this.deliveryPageForm
        .get('isShippingSame')
        .valueChanges.pipe(filter(Boolean))
        .subscribe(() => {
          this.deliveryPageForm.get('shippingAddress').reset();
        })
    );

    this.subscription.add(
      this.deliveryPageForm
        .get('createAccount')
        .valueChanges.pipe(filter((createAccount) => !createAccount))
        .subscribe(() => {
          this.deliveryPageForm.get(['account', 'password']).reset();
          this.deliveryPageForm.get(['account', 'confirmPassword']).reset();
        })
    );

    this.subscription.add(
      this.deliveryPageForm.valueChanges.subscribe(() => {
        this.submitted = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.deliveryPageForm.markAllAsTouched();
    if (this.deliveryPageForm.valid) {
      this.router.navigate([RoutePath.shipping]);
    }
  }

  onReset() {
    this.deliveryPageForm.reset({
      billingAddress: {},
      isShippingSame: true,
      shippingAddress: {},
      createAccount: true,
      account: {}
    });
  }
}
