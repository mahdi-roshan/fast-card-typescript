import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

import {
  fetchProductInfo,
  fetchProvices,
  fetchCity,
  addOrder,
  orderCost,
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

export const useAddOrder = () => {
  return useMutation(addOrder);
};

export const useOrderCost = (orderDetail: {
  cityId: string;
  featureId: number;
  paymentType: number;
  productCount: number;
  productId: number;
  stateId: string;
}) => {
  return useQuery(
    ["post-cost", orderDetail.productId],
    () => orderCost(orderDetail),
    {
      enabled: !!orderDetail.cityId,
    }
  );
};
// export const useAddOrder = (order: {
//   name: string;
//   address: string;
//   phone: number | string;
//   productId: number;
//   quantity: number;
//   feature: number | string;
//   state: number | string;
//   city: number | string;
// }) => {
//   return useQuery(
//     ["add-order", order],
//     () =>
//       addOrder({
//         name: order.name,
//         address: order.address,
//         phone: order.phone,
//         productId: order.productId,
//         count: order.quantity,
//         featureId: order.feature,
//       }),
//     { enabled: false }
//   );
// };
