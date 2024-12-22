import React from "react";
import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";

const HomePage = () => {
  return (
    <>
      <Head pageTitle={`Welcome to ${import.meta.env.VITE_APPNAME}`} />
      <HomeSectionOne />
      <RowTwoSection />
    </>
  );
};

export default HomePage;
