import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RoutePath } from 'src/app/models/route-path.enum';
import * as FormsSelectors from '../store/forms.selectors';

@Injectable({
  providedIn: 'root'
})
export class CanActivateForms implements CanActivate {
  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (route.url[0].path === RoutePath.payment) {
      return this.store.select(FormsSelectors.isPaymentEnabled);
    }
    if (route.url[0].path === RoutePath.shipping) {
      return this.store.select(FormsSelectors.isDeliveryFormValid);
    }
    return true;
  }
}
