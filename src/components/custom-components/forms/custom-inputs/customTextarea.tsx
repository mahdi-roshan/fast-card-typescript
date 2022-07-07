import { TextareaStyle } from "./styles";

type CustomTextareaProps = {
  labalText?: string;
  labelFor?: string;
  id?: string;
  name?: string;
  rows?: number;
  handleInput: (event: any) => void;
};

const CustomTextarea = ({
  labalText,
  labelFor,
  rows,
  id,
  name,
  handleInput,
}: CustomTextareaProps) => {
  return (
    <>
      <label className={TextareaStyle.LabelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <textarea
        id={id}
        rows={rows}
        name={name}
        className={TextareaStyle.InputStyle}
        onChange={(event) => handleInput(event)}
      ></textarea>
    </>
  );
};

export default CustomTextarea;
