export interface ShippingPageFormValue {
  method: number;
  isAGift: boolean;
  giftOptions: {
    includeGiftRecipt: boolean;
    name: string;
    message: string;
    wrap: boolean;
  };
}
