import React from "react";

type CustomButtonProps = {
  type?: 'submit';
  handleClick: (event: React.MouseEvent<HTMLElement>, id: number) => void;
  styles: string;
  textStyle: string;
  text: string;
};

const CustomButton = ({
  type = "submit",
  handleClick,
  styles,
  textStyle,
  text,
}: CustomButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={(event) => handleClick(event, 1)}
        className={styles}
      >
        <span className={textStyle}>{text}</span>
      </button>
    </>
  );
};

export default CustomButton;
