import { NgModule } from '@angular/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { DeliveryPageComponent } from './components/delivery-page/delivery-page.component';
import { FormsHomeComponent } from './components/forms-home/forms-home.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { ShippingPageComponent } from './components/shippping-page/shipping-page.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsState } from './store/forms.state';

@NgModule({
  declarations: [DeliveryPageComponent, FormsHomeComponent, ShippingPageComponent, PaymentPageComponent, ReviewPageComponent],
  imports: [FormsRoutingModule, SharedModule, NgxMaskModule.forChild(), NgxsModule.forFeature([FormsState]), NgxsFormPluginModule]
})
export class FormsModule {}
