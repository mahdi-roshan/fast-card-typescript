import React from "react";
import { CounterStyle } from "./styles";

type CounterProps = {
  labalText?: string;
  type: string;
  labelFor?: string;
  value: number;
  id: string;
  name: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: any;
  incrementDecrement: boolean;
  handleIncDecQuantity: (type: 1 | 2) => void;
};

const Counter = ({
  labalText,
  labelFor,
  type,
  id,
  value,
  name,
  handleInput,
  setValue,
  incrementDecrement,
  handleIncDecQuantity,
}: CounterProps) => {
  const increment = (e: React.MouseEvent) => {
    e.preventDefault();
    if (incrementDecrement) {
      handleIncDecQuantity(1);
    } else {
      if (value < 10) {
        setValue(value + 1);
      }
    }
  };

  const decrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (incrementDecrement) {
      handleIncDecQuantity(2);
    } else {
      if (value > 0) {
        setValue(value - 1);
      }
    }
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
        <button className={CounterStyle.DecButtonStyle} onClick={decrement}>
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            −
          </span>
        </button>
        <input
          type={type}
          id={id}
          className={CounterStyle.InputStyle}
          name={name}
          value={value}
          onChange={handleInput}
          required
        ></input>
        <button className={CounterStyle.IncButtonStyle} onClick={increment}>
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
