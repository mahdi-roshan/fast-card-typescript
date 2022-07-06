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
      <select onChange={(e)=>{console.log(e.target.name)}} id={id} className={styles} name='test'>
        <option selected>Choose a country</option>
        {options.map((feature) => (
          <option value={feature}>{feature}</option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
