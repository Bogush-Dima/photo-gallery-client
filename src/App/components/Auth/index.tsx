import React, {FC, FormEvent} from "react";
import { Props } from "./types";
import { SIGN_IN, SIGN_UP } from "../../constants/paths";
import {
  StyledForm,
  Button,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton,
} from "../../main-styled-components";
import { MainWrapper } from "./styled";
import { Link } from "react-router-dom";
import {requestToServer} from "../../../actions/requestToServer";

export const Auth: FC<Props> = ({ history, userFormik, authMethod }) => {
  const { handleChange, values } = userFormik;

  // TODO think about object name

  const generateVariables = () => {
    const formattingLinkToText = (link: string) => {
      let result: string = "";
      let intervalValue = link.slice(1);

      for (let i = 0; i < intervalValue.length; i++) {
        if (i === 0) {
          result += intervalValue[i].toUpperCase();
          intervalValue = intervalValue.slice(1);
        }

        if (intervalValue[i] === intervalValue[i].toUpperCase()) {
          result += intervalValue.replace(
            intervalValue[i],
            ` ${intervalValue[i]}`
          );
        }
      }
      return result;
    };

    switch (authMethod) {
      case SIGN_IN:
        return {
          linkTo: SIGN_UP,
          authMethodText: formattingLinkToText(SIGN_IN),
          toOtherMethodText: formattingLinkToText(SIGN_UP),
        };
      case SIGN_UP:
        return {
          linkTo: SIGN_IN,
          authMethodText: formattingLinkToText(SIGN_UP),
          toOtherMethodText: formattingLinkToText(SIGN_IN),
        };
      default:
        return {
          linkTo: "",
          authMethodText: "",
          toOtherMethodText: "",
        };
    }
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    requestToServer(authMethod, values, history)
  }

  const { linkTo, authMethodText, toOtherMethodText } = generateVariables();

  return (
    <>
      <Link to={linkTo}>
        <Button>{toOtherMethodText}</Button>
      </Link>
      <FormWrapper>
        <MainWrapper>
          <FormTitle>{authMethodText}</FormTitle>
          <StyledForm onSubmit={submitForm}>
            <FormInput
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email}
              required
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <FormButton type="submit">{authMethodText}</FormButton>
          </StyledForm>
        </MainWrapper>
      </FormWrapper>
    </>
  );
};
