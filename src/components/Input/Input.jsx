import React from "react";

import ErrorIcon from "components/Icons/ErrorIcon";
import {
  InputContainer,
  InputWrapper,
  MainInput
} from "components/Input/Styled";

import { Error, ErrorWrap, LoginLabel } from "../../pages/Login/Styled";

const Input = ({
                 placeholder,
                 register,
                 width,
                 height,
                 id,
                 value,
                 error,
                 type = "text",
                 onChange,
                 disabled,
                 ref
               }) => {
  return (
    <InputContainer>
      <LoginLabel>
        {placeholder}
        <InputWrapper width={width}>
          <MainInput
            ref={ref}
            placeholder={placeholder}
            width={width}
            height={height}
            id={id}
            value={value}
            type={type}
            onChange={onChange}
            disabled={disabled}
            {...register}
          />
        </InputWrapper>
      </LoginLabel>
      <ErrorWrap>
        {error?.isError && (
          <Error>
            <ErrorIcon />
            {error?.errorMessage}
          </Error>
        )}
      </ErrorWrap>
    </InputContainer>
  );
};

export default Input;
