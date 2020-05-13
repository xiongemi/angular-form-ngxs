import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import * as FormsSelectors from '../../store/forms.selectors';

@Component({
  selector: 'afn-forms-home',
  templateUrl: './forms-home.component.html',
  styleUrls: ['./forms-home.component.css']
})
export class FormsHomeComponent implements OnInit {
  isDeliveryFormValid$: Observable<boolean>;
  isPaymentEnabled$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isDeliveryFormValid$ = this.store.select(FormsSelectors.isDeliveryFormValid);
    this.isPaymentEnabled$ = this.store.select(FormsSelectors.isPaymentEnabled);
  }
}
