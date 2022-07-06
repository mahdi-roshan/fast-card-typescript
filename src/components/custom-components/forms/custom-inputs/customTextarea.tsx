import { TextareaStyle } from './styles'

type CustomTextareaProps = {
  labalText?: string;
  labelFor?: string;
  id?: string;
  rows?: number;
};

const CustomTextarea = ({
  labalText,
  labelFor,
  rows,
  id,

}: CustomTextareaProps) => {
  return (
    <>
      <label className={TextareaStyle.LabelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <textarea id={id} rows={rows} className={TextareaStyle.InputStyle}></textarea>
    </>
  );
};

export default CustomTextarea;
