import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import {
  fetchProductInfo,
  fetchProvices,
  fetchCity,
  addOrder,
} from "./../../services/fast-card-api/productInfo";

export const useFastCard = () => {
  const params = useParams();
  return useQuery(["product-info", params.productId], () =>
    fetchProductInfo(params.productId)
  );
};

export const useProvinces = () => {
  return useQuery("provinces", fetchProvices);
};

export const useCity = (provinceId: number) => {
  return useQuery(["city", provinceId], () => fetchCity(provinceId));
};

export const useAddOrder = (order: {
  name: string;
  address: string;
  phone: number | string;
  productId: number;
  quantity: number;
  feature: number | string;
  state: number | string;
  city: number | string;
}) => {
  return useQuery(
    ["add-order", order],
    () =>
      addOrder({
        name: order.name,
        address: order.address,
        phone: order.phone,
        productId: order.productId,
        count: order.quantity,
        featureId: order.feature,
      }),
    { enabled: false }
  );
};
