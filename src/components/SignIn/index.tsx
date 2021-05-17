import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Formik } from "formik";
import {
  StyledForm,
  Button,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton
} from "../../main-styles-components";
import { MainWrapper } from "./styled";

export const SignIn = () => {
  const createNewUser = (values: {}) => {
    axios
      .post("http://localhost:5000/api/auth/signIn", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        createNewUser(values);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <>
          <Link to='/signUp'>
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
