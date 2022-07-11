import axios from "axios";

function fetchProductInfo(productId: any) {
  return axios.get(
    `http://shops2.dayanstage.ir/api/client/v1/products/fast-cart/get-product-by-id/${productId}`
  );
}

function fetchProvices() {
  return axios.get(
    "http://shops2.dayanstage.ir/api/client/v1/location/provinces/"
  );
}

function fetchCity(provinceId: any) {
  return axios.get(
    `http://shops2.dayanstage.ir/api/client/v1/location/provinces/${provinceId}/cities`
  );
}

function addOrder(orderInf: {
  name: string;
  address: string;
  phone: number | string;
  productId: number;
  count: number;
  featureId: number | string;
}) {
  return axios.post(
    `https://dayanshop.com/api/client/v1/order/fast-cart/save-order`,
    {
      shopOrderStep1: {
        customerAddress: orderInf.address,
        customerFullName: orderInf.name,
        customerMobile: orderInf.phone,
        productId: orderInf.productId,
        rpostPrice: 0,
        utmSource: 0,
      },
      shopOrderStep2: {
        count: orderInf.count,
        discountCode: "",
        featureSelected: orderInf.featureId,
        freeSendingType: null,
        hasAddCountItem: false,
        isFreeSending: false,
        noAvailable: false,
        orderDetailId: 0,
        orderId: "0",
        orderIdNew: false,
        paymentType: 0,
        productAttributeValueGroupId: "53736",
      },
    }
  );
}

function getPaymentMethod(orderId: number) {
  return axios.get(
    `https://dayanshop.com/cart/getPaymentTypes?orderId=${orderId}`
  );
}

function orderCost(orderDetail: {
  cityId: string;
  featureId: number;
  paymentType: number;
  productCount: number;
  productId: number;
  stateId: string;
}) {
  return axios.post(
    `https://dayanshop.com/api/client/v1/order/fast-cart/post-cost`,
    [
      {
        cityId: orderDetail.cityId,
        customerFamily: "",
        customerName: "",
        featureId: orderDetail.featureId,
        paymentType: orderDetail.paymentType,
        productCount: orderDetail.productCount,
        productId: orderDetail.productId,
        stateId: orderDetail.stateId,
      },
    ]
  );
}

export { fetchProductInfo, fetchProvices, fetchCity, addOrder, orderCost , getPaymentMethod };
