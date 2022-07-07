import axios from "axios";

function fetchProductInfo(productId: any) {
  return axios.get(
    `http://shops2.dayanstage.ir/api/client/v1/products/fast-cart/get-product-by-id/${productId}`,
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

export { fetchProductInfo, fetchProvices, fetchCity };
