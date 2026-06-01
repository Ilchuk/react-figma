export type Product = {
  uid: string;
  sku: string;
  name: string;
  url_key: string;
  stock_status: string;

  small_image?: {
    url: string;
    label?: string;
  };

  price_range?: {
    minimum_price?: {
      final_price?: {
        value: number;
        currency: string;
      };
    };
  };
};