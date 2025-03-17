import React from "react";
import Layout from "../../components/Layout";
import Banner from "./banner";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFive from "../HomePage/sectionFive";

const About = () => {
  return (
    <Layout>
      <Banner />
      <SectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
      <SectionFive/>
    </Layout>
  );
};

export default About;
