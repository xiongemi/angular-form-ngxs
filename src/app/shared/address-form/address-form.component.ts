import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { nameRegex } from '../regexes.const';
import { AddressFormValue } from './address-form-value.interface';

@Component({
  selector: 'afn-address-form',
  templateUrl: './address-form.component.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AddressFormComponent), multi: true }]
})
export class AddressFormComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
  @Input() touched: boolean;

  addressForm = this.fb.group({
    firstName: [null, [Validators.required, Validators.pattern(nameRegex)]],
    lastName: [null, [Validators.required, Validators.pattern(nameRegex)]],
    addressLine1: [null, Validators.required],
    addressLine2: [null],
    city: [null, Validators.required],
    province: [null, Validators.required],
    country: [null, Validators.required],
    postalCode: [null, Validators.required]
  });

  private subscription = new Subscription();

  onChange: any = (_: AddressFormValue) => {};
  onTouch: any = () => {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription.add(
      this.addressForm.valueChanges.subscribe((value: AddressFormValue) => {
        this.onChange(value);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.addressForm.markAllAsTouched();
    }
  }

  writeValue(value: null | AddressFormValue): void {
    if (value) {
      this.addressForm.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: AddressFormValue) => {}): void {
    this.onTouch = fn;
  }
}
