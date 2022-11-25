import React from "react";

import { MainButton } from "components/Button/Styled";

const Button = ({ children, disabled, kind, width, type, onClick, mt }) => {
  return (
    <MainButton
      mt={mt}
      kind={kind}
      width={width}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MainButton>
  );
};

export default Button;
