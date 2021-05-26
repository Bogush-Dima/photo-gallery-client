import React, { FC, FormEvent, useContext } from "react";
import { Props } from "./types";
import {
  StyledForm,
  Button,
  FormWrapper,
  FormTitle,
  FormInput,
} from "../../main-styled-components";
import { MainWrapper } from "./styled";
import { requestToServer } from "../../../actions/requestToServer";
import { UserContext } from "../../../utils/contexts/user";
import { LoaderContext } from "../../../utils/contexts/loader";
import { Header } from "../Header";

export const Auth: FC<Props> = ({ history, userFormik, authMethod }) => {
  const { handleChange, values } = userFormik;
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoaderContext);

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

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestToServer(authMethod, values, history, setUser, setIsLoading);
  };

  const authMethodText = formattingLinkToText(authMethod);

  return (
    <>
      <Header />
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
            <Button type="submit">{authMethodText}</Button>
          </StyledForm>
        </MainWrapper>
      </FormWrapper>
    </>
  );
};
