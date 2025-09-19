interface IOrder {
  id: string;
  date: string;
  customer: {
    id: string;
    name: string;
    email: string;
  };
  status: string;
  total: number;
  currency: string;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress: {
    city: string;
    country: string;
  };
}

interface IOrdersResponse {
  orders: IOrder[];
  pagination: {
    page: number;
    limit: number;
    totalOrders: number;
  };
}
