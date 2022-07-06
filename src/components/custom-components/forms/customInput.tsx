import React from "react";

type CustomInputProps = {
  labalText?: string;
  labelStyle?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id?: string;
  name: string;
  styles: string;
  defaultValue?: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({
  labalText,
  labelStyle,
  labelFor,
  type,
  id,
  name,
  styles,
  handleInput,
  defaultValue,
}: CustomInputProps) => {
  return (
    <>
      <label className={labelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={styles}
        defaultValue={defaultValue}
        onChange={(event) => handleInput(event)}
      />
    </>
  );
};

export default CustomInput;
