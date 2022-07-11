import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useProvinces,
  useCity,
  useAddOrder,
} from "../../hooks/fast-card-hooks/useFastCard";

import { ValidatorPhone } from "./../../custom-functions/validate-phone-number/validator";

import Counter from "../custom-components/forms/custom-inputs/customCounter";
import CustomButton from "../custom-components/forms/customButton";
import CustomDatalist from "../custom-components/forms/custom-inputs/customDatalist";
import CustomInput from "../custom-components/forms/custom-inputs/customInput";
import CustomSelect from "../custom-components/forms/custom-inputs/customSelect";
import CustomTextarea from "../custom-components/forms/custom-inputs/customTextarea";
import { saveOrderRes } from "../../types/fastCard/fastCardTypes";

type InfoState = {
  name: string;
  address: string;
  phone: number | string;
  quantity: number;
  feature: number | string;
  state: number | string;
  city: number | string;
};

type AddFormProps = {
  productId: number;
  feature: {
    featureAttributesValues: string;
    id: number;
    isActive: boolean;
    lastFeatureIdFk: number;
    productAttributeValueGroupId: number;
    productIdFk: number;
  }[];
};

const AddFrom = ({ productId, feature }: AddFormProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // fetch city state base on stateId
  const [stateId, setStateId] = useState(0);
  const [info, setInfo] = useState<InfoState>({
    name: "",
    phone: "",
    feature: "",
    quantity: 1,
    state: "",
    city: "",
    address: "",
  });

  const { data: provinceData, isLoading: provincLoading } = useProvinces();
  const { data: cityData } = useCity(stateId);
  const { mutate } = useAddOrder();

  const handleInput = async (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;

    // we need stateId so filter state list then compare and fetchout Id from list
    if (e.target.name === "state") {
      let provinceId = provinceData?.data.data.filter(
        (item: { longValue: null; text: string; value: number }) => {
          return e.target.value === item.text.trim();
        }
      );
      // fetch city list base On stateId
      setStateId(provinceId[0].value);
    }

    setInfo(() => {
      let temp: any = { ...info };
      temp[name] = value;
      return temp;
    });
  };

  // increment & decrement qunatity in parent component
  // according <--incrementDecrement--> key for custom counter component
  const handleIncDecQuantity = (type: 1 | 2) => {
    if (type === 1) {
      if (info.quantity < 10) {
        setInfo((prevState) => {
          return {
            ...prevState,
            quantity: +info.quantity + 1,
          };
        });
      }
    } else if (info.quantity > 1) {
      setInfo((prevState) => {
        return {
          ...prevState,
          quantity: +info.quantity - 1,
        };
      });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ValidatorPhone(info.phone)) {
      toast.error("فرمت شماره همراه اشتباه است", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // set stateId and cityId
      let provinceId = provinceData?.data.data.filter(
        (item: { longValue: null; text: string; value: number }) => {
          return info.state === item.text.trim();
        }
      );
      let cityId = cityData?.data.data.filter(
        (item: { longValue: null; text: string; value: number }) => {
          return info.city === item.text;
        }
      );
      setInfo((prevState) => {
        return {
          ...prevState,
          state: provinceId[0].value,
          city: cityId[0].value,
        };
      });

      mutate(
        {
          name: info.name,
          address: info.address,
          phone: info.phone,
          productId: productId,
          count: info.quantity,
          featureId: info.feature,
        },
        {
          onSuccess: async (
            data,
            variables: {
              name: string;
              address: string;
              phone: number | string;
              productId: number;
              count: number;
              featureId: number | string;
            }
          ) => {
            queryClient.setQueryData(["order-info", variables.productId], {
              variables,
              data,
            });
            navigate(`/invoice/${variables.productId}`);
          },
          onError: async (error: any) => {
            console.log(error);
          },
        }
      );
    }
  };

  return (
    <>
      {provincLoading ? (
        ""
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* name */}
            <div>
              <CustomInput
                {...{
                  labalText: "نام و نام خانوادگی",
                  type: "text",
                  labelFor: "name",
                  id: "name",
                  name: "name",
                  defaultValue: "",
                  handleInput,
                }}
              />
            </div>
            {/* phone */}
            <div>
              <CustomInput
                {...{
                  labalText: "شماره همراه",
                  type: "text",
                  labelFor: "phone",
                  id: "phone",
                  name: "phone",
                  defaultValue: "",
                  handleInput,
                }}
              />
            </div>
            {/* feature */}
            <div>
              <CustomSelect
                {...{
                  labalText: "ویژگی",
                  labelFor: "feature",
                  id: "feature",
                  name: "feature",
                  options: feature,
                  handleInput,
                }}
              />
            </div>
            {/* quantity */}
            <div className="flex justify-center">
              <Counter
                {...{
                  labalText: "تعداد",
                  type: "number",
                  labelFor: "quantity",
                  value: info.quantity,
                  id: "quantity",
                  name: "qunatity",
                  handleInput,
                  setValue: setInfo,
                  incrementDecrement: true,
                  handleIncDecQuantity,
                }}
              />
            </div>
            {/* state */}
            <div>
              <CustomDatalist
                {...{
                  labalText: "استان",
                  type: "text",
                  labelFor: "state",
                  id: "state",
                  list: "state",
                  name: "state",
                  options: provinceData?.data.data,
                  handleInput,
                }}
              />
            </div>
            {/* city */}
            <div>
              {cityData?.data.data ? (
                <CustomDatalist
                  {...{
                    labalText: "شهر",
                    type: "text",
                    labelFor: "city",
                    id: "city",
                    list: "city",
                    name: "city",
                    options: cityData?.data.data,
                    handleInput,
                  }}
                />
              ) : (
                ""
              )}
            </div>
            {/* address */}
            <div className="col-span-2 mb-2">
              <CustomTextarea
                {...{
                  labalText: "نشانی",
                  labelFor: "address",
                  id: "address",
                  name: "address",
                  rows: 4,
                  handleInput,
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <CustomButton
              {...{
                type: "submit",
                styles:
                  "w-full text-center transition ease-in duration-300 text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 py-3",
                textStyle: "text-center font-bold text-lg",
                text: "ادامه خرید محصول",
              }}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default AddFrom;
