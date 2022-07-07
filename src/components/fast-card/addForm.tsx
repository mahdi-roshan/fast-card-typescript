import { useState } from "react";
import { useProvinces, useCity } from "../../hooks/fast-card-hooks/useFastCard";

import Counter from "../custom-components/forms/custom-inputs/customCounter";
import CustomButton from "../custom-components/forms/customButton";
import CustomDatalist from "../custom-components/forms/custom-inputs/customDatalist";
import CustomInput from "../custom-components/forms/custom-inputs/customInput";
import CustomSelect from "../custom-components/forms/custom-inputs/customSelect";
import CustomTextarea from "../custom-components/forms/custom-inputs/customTextarea";

const AddFrom = (props: any) => {
  const { feature } = props;

  const [stateId, setStateId] = useState(0);
  const [info, setInfo] = useState({
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

  const handleInput = async (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    if (e.target.name === "state") {
      let provinceId = provinceData?.data.data.filter((item: any) => {
        return e.target.value === item.text.trim();
      });
      setStateId(provinceId[0].value);
    }

    // setInfo((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value,
    //   };
    // });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e, 1);
  };

  return (
    <>
      {provincLoading ? (
        ""
      ) : (
        // <form>
        <>
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
                  labelFor: "features",
                  id: "features",
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
                  id: "quantity",
                  name: "qunatity",
                  handleInput,
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
              ُ
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
                handleClick,
              }}
            />
          </div>
        </>
      )}
      {/* </form> */}
    </>
  );
};

export default AddFrom;
