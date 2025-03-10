import React from "react";
import Layout from "../../components/Layout";
import Banner from "./Banner";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SectionSeven from "./sectionSeven";

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </Layout>
  );
};

export default HomePage;
