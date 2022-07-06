type CustomDatalistProps = {
  labalText?: string;
  labelStyle?: string;
  labelFor?: string;
  type: "text" | "email" | "password";
  id: string;
  list: string;
  styles: string;
  options: string[];
};

const CustomDatalist = ({
  labalText,
  labelStyle,
  labelFor,
  type,
  id,
  list,
  styles,
  options,
}: CustomDatalistProps) => {
  return (
    <>
      <label className={labelStyle} htmlFor={labelFor}>
        {labalText}
      </label>
      <input type={type} list={list} className={styles} />

      <datalist id={id}>
        {options.map((option) => (
          <option value={option} />
        ))}
      </datalist>
    </>
  );
};

export default CustomDatalist;
