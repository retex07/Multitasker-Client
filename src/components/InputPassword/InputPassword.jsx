import React, { useState } from "react";

import PasswordIcon from "components/Icons/PasswordIcon";
import { InputContainer } from "components/Input/Styled";
import {
  InputWrapper,
  MainInputPassword,
} from "components/InputPassword/Styled";

import { Error, ErrorWrap, LoginLabel } from "../../pages/Login/Styled";
import ErrorIcon from "../Icons/ErrorIcon";
import { ShowButton } from "./Styled";

const InputPassword = ({
  placeholder,
  register,
  width,
  id,
  value,
  onChange,
  disabled,
  error,
  ref,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <InputContainer>
      <LoginLabel>
        {placeholder}
        <InputWrapper>
          <MainInputPassword
            ref={ref}
            placeholder={placeholder}
            width={width}
            id={id}
            value={value}
            type={isPasswordVisible ? "text" : "password"}
            onChange={onChange}
            disabled={disabled}
            {...register}
          />
          <ShowButton type="button" onClick={onClick}>
            <PasswordIcon />
          </ShowButton>
        </InputWrapper>
      </LoginLabel>
      <ErrorWrap>
        {error.isError && (
          <Error>
            <ErrorIcon />
            {error.errorMessage}
          </Error>
        )}
      </ErrorWrap>
    </InputContainer>
  );
};

export default InputPassword;
