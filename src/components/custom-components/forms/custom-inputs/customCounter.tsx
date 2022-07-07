import { useState } from "react";
import { CounterStyle } from "./styles";

type CounterProps = {
  labalText?: string;
  type: string;
  labelFor?: string;
  quantity: number;
  id: string;
  name: string;
  handleInput: (event: any) => void;
};

const Counter = ({
  labalText,
  labelFor,
  type,
  id,
  quantity,
  name,
  handleInput,
}: CounterProps) => {
  // const [quantity, setQuantity] = useState(1);

  const increment = (e: any) => {
    quantity + 1
  };

  const decrement = (e: any) => {
    quantity - 1
  };

  return (
    <div className="custom-number-input h-10 w-full">
      <label
        htmlFor={labelFor}
        className="w-full text-gray-800 dark:text-gray-200 text-sm font-semibold"
      >
        {labalText}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          className={CounterStyle.DecButtonStyle}
          onClick={(e) => decrement(e)}
        >
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            −
          </span>
        </button>
        <input
          type={type}
          id={id}
          className={CounterStyle.InputStyle}
          name={name}
          value={quantity}
          onChange={handleInput}
        ></input>
        <button
          className={CounterStyle.IncButtonStyle}
          onClick={(e) => increment(e)}
        >
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
