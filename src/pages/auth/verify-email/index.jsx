import React from "react";
import Head from "../../../components/Head";
import VerifyEmailBody from "../../../components/auth/VerifyEmailBody";
import checkLogin from "../../../api/checkLogin";

const VerifyEmailPage = () => {
  checkLogin();
  return (
    <>
      <Head pageTitle="Verify Account" />
      <VerifyEmailBody />
    </>
  );
};

export default VerifyEmailPage;
