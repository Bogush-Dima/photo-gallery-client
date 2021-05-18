import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { SERVER, AUTH, SIGN_IN, SIGN_UP } from "../../constants/paths";
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

export const Auth = (authMethod: any) => {
  const requestToServer = (values: {}) => {
    axios
      .post(`${SERVER}${AUTH}${authMethod}`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  const authMethodText = authMethod === SIGN_IN ? 'Sign In' : 'Sign Up'
  const toOtherMethodText = authMethod === SIGN_IN ? 'Sign Up' : 'Sign In'

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        requestToServer(values);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <>
          <Link to={authMethod === SIGN_IN ? SIGN_UP : SIGN_IN}>
            <Button>{authMethodText}</Button>
          </Link>
          <FormWrapper>
            <MainWrapper>
              <FormTitle>{toOtherMethodText}</FormTitle>
              <StyledForm onSubmit={handleSubmit}>
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
                <FormButton type="submit">{toOtherMethodText}</FormButton>
              </StyledForm>
            </MainWrapper>
          </FormWrapper>
        </>
      )}
    </Formik>
  );
};
