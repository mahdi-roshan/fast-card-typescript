type CustomTextareaProps = {
  labalText?: string;
  labelStyle?: string;
  labelFor?: string;
  id?: string;
  styles: string;
  rows?: number;
};

const CustomTextarea = ({
  labalText,
  labelStyle,
  labelFor,
  rows,
  id,
  styles,
}: CustomTextareaProps) => {
  return (
    <>
      <label className={labelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <textarea id={id} rows={rows} className={styles}></textarea>
    </>
  );
};

export default CustomTextarea;
