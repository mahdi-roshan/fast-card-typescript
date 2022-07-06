import React from "react";

type CustomSelectProps = {
  labalText?: string;
  labelStyle?: string;
  labelFor?: string;
  id: string;
  styles: string;
  options: string[];
};

const CustomSelect = ({
  labalText,
  labelStyle,
  labelFor,
  id,
  styles,
  options,
}: CustomSelectProps) => {
  return (
    <>
      <label htmlFor={labelFor} className={labelStyle}>
        {labalText}
      </label>
      <select id={id} className={styles}>
        <option selected>Choose a country</option>
        {options.map((feature) => (
          <option value={feature}>{feature}</option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
