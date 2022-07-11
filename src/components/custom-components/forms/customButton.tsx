import React from "react";

type CustomButtonProps = {
  type?: "submit";
  styles: string;
  textStyle: string;
  text: string;
  // refetch: any;
};

const CustomButton = ({
  type = "submit",
  styles,
  textStyle,
  text,
  // refetch,
}: CustomButtonProps) => {
  return (
    <>
      <button type={type} className={styles}>
        <span className={textStyle}>
          {text}
        </span>
      </button>
    </>
  );
};

export default CustomButton;
