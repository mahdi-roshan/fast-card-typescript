import { TextareaStyle } from "./styles";

type CustomTextareaProps = {
  labalText?: string;
  labelFor?: string;
  id?: string;
  name?: string;
  rows?: number;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
        required
      ></textarea>
    </>
  );
};

export default CustomTextarea;
