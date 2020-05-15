import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { StateReset } from 'ngxs-reset-plugin';

import { addressFormValueToHTML } from 'src/app/shared/address-form/address-form-value.interface';
import { FormStateModel } from '../../models/from-state-model.interface';
import { ShippingMethod } from '../../models/shipping-method.interface';
import { shippingMethods } from '../../models/shipping-methods.const';
import { FormsState } from '../../store/forms.state';

@Component({
  selector: 'afn-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  formsValues: FormStateModel;
  addressFormValueToHTML = addressFormValueToHTML;
  shippingMethod: ShippingMethod;

  constructor(private store: Store) {}

  ngOnInit() {
    this.formsValues = this.store.selectSnapshot(FormsState);
    this.shippingMethod = shippingMethods.find((method) => method.id === this.formsValues?.shippingForm?.model?.method);
    this.store.dispatch(new StateReset(FormsState));
  }

  maskCardNumber(cardNumber: number): string {
    const cardNumberString = cardNumber.toString().split('');
    cardNumberString.splice(0, 12, '****-****-****-');
    return cardNumberString.join('');
  }
}
