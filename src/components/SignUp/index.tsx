import React from "react";
import axios from "axios";
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
import { Link } from "react-router-dom";

export const SignUp = () => {
  const createNewUser = (values: {}) => {
    axios
      .post("http://localhost:5000/api/auth/signUp", values)
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
          <Link to="/signIn">
            <Button>Sign In</Button>
          </Link>
          <FormWrapper>
            <MainWrapper>
              <FormTitle>Sign Up</FormTitle>
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
                <FormButton type="submit">Sign Up</FormButton>
              </StyledForm>
            </MainWrapper>
          </FormWrapper>
        </>
      )}
    </Formik>
  );
};
