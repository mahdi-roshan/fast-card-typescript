import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import {
  fetchProductInfo,
  fetchProvices,
  fetchCity,
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

export const useCity = (provinceId: any) => {
  return useQuery(["city", provinceId], () => fetchCity(provinceId));
};
