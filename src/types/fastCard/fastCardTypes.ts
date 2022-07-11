export type saveOrderRes = {
  data: {
    data: {
      discount: number;
      discountCode: null;
      hasAddCountItem: boolean;
      isProductSpecial: boolean;
      mainOrderId: number;
      newOrder: boolean;
      orderId: string;
      orderItemId: number;
      orderItemPrice: number;
      orderItemsStock: {
        available: number;
        featureId: number;
        isFreeSend: boolean;
        productId: number;
      }[];
      priceType: number;
    };
    exception: null;
    message: null;
    returnCode: null;
    status: boolean;
    statusCode: number;
    token: string;
  };
  isSuccess: boolean;
  message: string;
  serverMessage: string;
  statusCode: number;
};
