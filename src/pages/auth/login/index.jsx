import React from "react";
import Head from "../../../components/Head";
import LoginBody from "../../../components/auth/LoginBody";
import checkLogin from "../../../api/checkLogin";

const LoginPage = () => {
  checkLogin();

  return (
    <>
      <Head pageTitle="Login to your account" />
      <LoginBody />
    </>
  );
};

export default LoginPage;
