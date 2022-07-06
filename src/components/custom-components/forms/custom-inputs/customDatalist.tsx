import { DataListStyle } from './styles'

type CustomDatalistProps = {
  labalText?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id: string;
  list: string;
  options: string[];
};

const CustomDatalist = ({
  labalText,
  labelFor,
  type,
  id,
  list,
  options,
}: CustomDatalistProps) => {
  return (
    <>
      <label className={DataListStyle.LabelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <input type={type} list={list} className={DataListStyle.InputStyle} />

      <datalist id={id}>
        {options.map((option) => (
          <option value={option} />
        ))}
      </datalist>
    </>
  );
};

export default CustomDatalist;
