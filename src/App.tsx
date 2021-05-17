import React, { useState } from "react";
import axios from "axios";

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post("/api/auth/register_login", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
        <button type='submit'>Sumbit</button>
    </form>
  );
};
