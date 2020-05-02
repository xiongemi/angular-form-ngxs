export interface ShippingMethod {
  id: number;
  type: string;
  price: number;
  arrival: {
    min?: Date;
    max: Date;
  };
}
