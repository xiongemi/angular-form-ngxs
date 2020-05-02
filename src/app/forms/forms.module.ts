import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DeliveryPageComponent } from './components/delivery-page/delivery-page.component';
import { FormsHomeComponent } from './components/forms-home/forms-home.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ShippingPageComponent } from './components/shippping-page/shipping-page.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  declarations: [DeliveryPageComponent, FormsHomeComponent, ShippingPageComponent, PaymentPageComponent],
  imports: [FormsRoutingModule, SharedModule]
})
export class FormsModule {}
