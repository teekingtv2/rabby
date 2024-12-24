import React from "react";
import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeSectionFive from "../../components/home/HomeSectionFive";
import HomeSectionSix from "../../components/home/HomeSectionSix";
import HomeSectionSeven from "../../components/home/HomeSectionSeven";
import HomeSectionEight from "../../components/home/HomeSectionEight";

const HomePage = () => {
  return (
    <>
      <Head pageTitle={`Welcome to ${import.meta.env.VITE_APPNAME}`} />
      <HomeSectionOne />
      <RowTwoSection />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
    </>
  );
};

export default HomePage;
