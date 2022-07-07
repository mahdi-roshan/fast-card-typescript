import { DataListStyle } from "./styles";

type CustomDatalistProps = {
  labalText?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id: string;
  list: string;
  name: string;
  options: {
    text: string;
    value: number;
    longValue: any;
  }[];
  handleInput: (event: any) => void;
};

const CustomDatalist = ({
  labalText,
  labelFor,
  type,
  id,
  list,
  name,
  options,
  handleInput,
}: CustomDatalistProps) => {
  return (
    <>
      <label className={DataListStyle.LabelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <input
        onChange={(event) => handleInput(event)}
        type={type}
        list={list}
        name={name}
        className={DataListStyle.InputStyle}
      />

      <datalist id={id}>
        {options.map((option) => (
          <option
            className="font-yekan"
            key={option.value}
            value={option.text.trim()}
          />
        ))}
      </datalist>
    </>
  );
};

export default CustomDatalist;
