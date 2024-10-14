import React from "react";
import Head from "../../../components/Head";
import RegisterBody from "../../../components/auth/RegisterBody";
import checkLogin from "../../../api/checkLogin";

const RegisterPage = () => {
  checkLogin();
  return (
    <>
      <Head pageTitle="Get onboarded" />
      <RegisterBody />
    </>
  );
};

export default RegisterPage;
