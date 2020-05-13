import { AppStateModel } from 'src/app/models/app-state-model.interface';
import { createSelector } from '@ngxs/store';

export const formState = (appState: AppStateModel) => appState.forms;

export const deliveryForm = (appState: AppStateModel) => formState(appState).deliveryForm;

export const shippingForm = (appState: AppStateModel) => formState(appState).shippingForm;

export const paymentForm = (appState: AppStateModel) => formState(appState).paymentForm;

export const isDeliveryFormValid = (appState: AppStateModel) => deliveryForm(appState).status === 'VALID';

export const isShippingFormValid = (appState: AppStateModel) => shippingForm(appState).status === 'VALID';

export const isPaymentFormValid = (appState: AppStateModel) => paymentForm(appState).status === 'VALID';

export const isPaymentEnabled = createSelector(
  [isDeliveryFormValid, isShippingFormValid],
  (deliveryFormValid, shippingFormValid) => deliveryFormValid && shippingFormValid
);
