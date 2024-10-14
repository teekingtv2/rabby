import React from "react";
import Head from "../../../components/Head";
import ResetPasswordBody from "../../../components/auth/ResetPasswordBody";
import checkLogin from "../../../api/checkLogin";

const ResetPasswordPage = () => {
  checkLogin();
  return (
    <>
      <Head pageTitle="Reset Password" />
      <ResetPasswordBody />
    </>
  );
};

export default ResetPasswordPage;
