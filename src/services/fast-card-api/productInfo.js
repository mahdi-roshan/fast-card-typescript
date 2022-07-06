import axios from "axios";

function fetchProductInfo(productId) {
  return axios.get(
    `http://shops2.dayanstage.ir/api/client/v1/products/fast-cart/get-product-by-id/${productId}`,{
        headers:{
            "Referer":"http://shops2.dayanstage.ir/",
        }
    }
  );
}

export { fetchProductInfo };
