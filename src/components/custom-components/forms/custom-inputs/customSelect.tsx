import { SelectStyle } from "./styles";

type CustomSelectProps = {
  labalText?: string;
  labelFor?: string;
  id: string;
  options: {
    id: number;
    featureAttributesValues: string;
    productIdFk: number;
    lastFeatureIdFk: number;
    isActive: boolean;
    productAttributeValueGroupId: number;
  }[];
  handleInput: (event: any) => void;
};

const CustomSelect = ({
  labalText,
  labelFor,
  id,
  options,
  handleInput
}: CustomSelectProps) => {
  return (
    <>
      <label htmlFor={labelFor} className={SelectStyle.LabelStyle}>
        {labalText}
      </label>
      <select
        onChange={(event) => handleInput(event)}
        id={id}
        className={SelectStyle.InputStyle}
        name="test"
        required
      >
        <option defaultValue="">انتخاب کنید</option>
        {options.map((feature) => (
          feature.isActive ?
          <option key={feature.id} value={feature.featureAttributesValues}>
            {feature.featureAttributesValues}
          </option> : ''
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
