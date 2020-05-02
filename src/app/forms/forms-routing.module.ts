import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryPageComponent } from './components/delivery-page/delivery-page.component';
import { FormsHomeComponent } from './components/forms-home/forms-home.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ShippingPageComponent } from './components/shippping-page/shipping-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormsHomeComponent,
    children: [
      { path: '', redirectTo: 'delivery' },
      { path: 'delivery', component: DeliveryPageComponent },
      { path: 'shipping', component: ShippingPageComponent },
      { path: 'payment', component: PaymentPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
