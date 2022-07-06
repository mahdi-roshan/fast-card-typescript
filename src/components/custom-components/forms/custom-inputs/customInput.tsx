import React from "react";
import { InputStyles } from './styles';

type CustomInputProps = {
  labalText?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id?: string;
  name: string;
  defaultValue?: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({
  labalText,
  labelFor,
  type,
  id,
  name,
  handleInput,
  defaultValue,
}: CustomInputProps) => {
  return (
    <>
      <label className={InputStyles.LabelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={InputStyles.InputStyle}
        defaultValue={defaultValue}
        onChange={(event) => handleInput(event)}
      />
    </>
  );
};

export default CustomInput;
