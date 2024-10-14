import React from "react";
import Head from "../../../components/Head";
import ForgotPasswordBody from "../../../components/auth/ForgotPasswordBody";
import checkLogin from "../../../api/checkLogin";

const ForgotPasswordPage = () => {
  checkLogin();
  return (
    <>
      <Head pageTitle="Forgot Password" />
      <ForgotPasswordBody />
    </>
  );
};

export default ForgotPasswordPage;
