import { SelectStyle } from './styles';

type CustomSelectProps = {
  labalText?: string;
  labelFor?: string;
  id: string;
  options: string[];
};

const CustomSelect = ({
  labalText,
  labelFor,
  id,
  options,
}: CustomSelectProps) => {
  return (
    <>
      <label htmlFor={labelFor} className={SelectStyle.LabelStyle}>
        {labalText}
      </label>
      <select onChange={(e) => { console.log(e.target.name) }} id={id} className={SelectStyle.InputStyle} name='test'>
        <option selected>Choose a country</option>
        {options.map((feature) => (
          <option value={feature}>{feature}</option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
