import React from "react";
import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeSectionFive from "../../components/home/HomeSectionFive";

const HomePage = () => {
  return (
    <>
      <Head pageTitle="Welcome to Elder Intelligence" />
      <HomeSectionOne />
      <RowTwoSection />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </>
  );
};

export default HomePage;
