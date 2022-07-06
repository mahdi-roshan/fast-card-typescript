import { useState } from "react";
import Counter from "../custom-components/forms/counter";
import CustomButton from "../custom-components/forms/customButton";
import CustomDatalist from "../custom-components/forms/custom-inputs/customDatalist";
import CustomInput from "../custom-components/forms/custom-inputs/customInput";
import CustomSelect from "../custom-components/forms/custom-inputs/customSelect";
import CustomTextarea from "../custom-components/forms/custom-inputs/customTextarea";

type AddFormProps = {};

const AddFrom = (props: AddFormProps) => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    feature: "",
    quantity: 1,
    state: "",
    city: "",
    address: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(e, 1);
  };

  return (
    <>
      <form>
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
                options: ["United States", "Canada", "France"],
              }}
            />
          </div>
          {/* quantity */}
          <div className="flex justify-center">
            <Counter />
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
                options: ["test1", "test2", "test3", "test4", "test5"],
              }}
            />
          </div>
          {/* city */}
          <div>
            <CustomDatalist
              {...{
                labalText: "شهر",
                type: "text",
                labelFor: "city",
                id: "city",
                list: "city",
                options: ["test1", "test2", "test3"],
              }}
            />
          </div>
          {/* address */}
          <div className="col-span-2 mb-2">
            <CustomTextarea
              {...{
                labalText: "نشانی",
                labelFor: "address",
                id: "address",
                rows: 4,
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
              handleClick,
            }}
          />
        </div>
      </form>
    </>
  );
};

export default AddFrom;
