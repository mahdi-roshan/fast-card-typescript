import React from "react";

type CustomButtonProps = {
  type?: "submit";
  styles: string;
  textStyle: string;
  text: string;
  refetch: any;
};

const CustomButton = ({
  type = "submit",
  styles,
  textStyle,
  text,
  refetch,
}: CustomButtonProps) => {
  return (
    <>
      <button type={type} className={styles}>
        <span onClick={refetch} className={textStyle}>
          {text}
        </span>
      </button>
    </>
  );
};

export default CustomButton;
