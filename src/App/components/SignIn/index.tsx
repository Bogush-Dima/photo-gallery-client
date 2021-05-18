import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {requestToServer} from "../../../actions/requestToServer";
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

export const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        requestToServer(SIGN_IN, values);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <>
          <Link to={SIGN_UP}>
            <Button>Sign Up</Button>
          </Link>
          <FormWrapper>
            <MainWrapper>
              <FormTitle>Sign In</FormTitle>
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
                <FormButton type="submit">Sign In</FormButton>
              </StyledForm>
            </MainWrapper>
          </FormWrapper>
        </>
      )}
    </Formik>
  );
};
