import { useState } from "react";
import Counter from "../custom-components/forms/counter";
import CustomButton from "../custom-components/forms/customButton";
import CustomDatalist from "../custom-components/forms/customDatalist";
import CustomInput from "../custom-components/forms/customInput";
import CustomSelect from "../custom-components/forms/customSelect";
import CustomTextarea from "../custom-components/forms/customTextarea";

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
                labelStyle:
                  "text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold",
                labelFor: "name",
                type: "text",
                id: "name",
                name: "name",
                styles:
                  "bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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
                labelStyle:
                  "text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold",
                labelFor: "phone",
                type: "text",
                id: "phone",
                name: "phone",
                styles:
                  "bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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
                labelStyle:
                  "block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200",
                labelFor: "features",
                id: "features",
                styles:
                  "bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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
                labelStyle:
                  "text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold",
                labelFor: "state",
                type: "text",
                id: "state",
                list: "state",
                styles:
                  "bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                options: ["test1", "test2", "test3", "test4", "test5"],
              }}
            />
          </div>
          {/* city */}
          <div>
            <CustomDatalist
              {...{
                labalText: "شهر",
                labelStyle:
                  "text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold",
                labelFor: "city",
                type: "text",
                id: "city",
                list: "city",
                styles:
                  "bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                options: ["test1", "test2", "test3"],
              }}
            />
          </div>
          {/* address */}
          <div className="col-span-2 mb-2">
            <CustomTextarea
              {...{
                labalText: "نشانی",
                labelStyle:
                  "text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold",
                labelFor: "address",
                id: "address",
                styles:
                  "block p-2.5 w-full text-sm text-gray-900 bg-slate-300 dark:bg-slate-600 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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
