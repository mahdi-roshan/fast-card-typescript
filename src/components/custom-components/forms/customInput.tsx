type CustomInputProps = {
  labalText?: string;
  labelStyle?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id?: string;
  styles: string;
  defaultValue?: string;
};

const CustomInput = ({
  labalText,
  labelStyle,
  labelFor,
  type,
  id,
  styles,
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
        className={styles}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default CustomInput;
