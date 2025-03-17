import React from "react";
import Layout from "../../components/Layout";
import Banner from "./banner";
import SectionOne from "./sectionOne";
import AnnualImages from "./annualImages";

const Gallery = () => {
  return (
    <Layout>
      <Banner />
      {/* <SectionOne /> */}
      <AnnualImages/>
    </Layout>
  );
};

export default Gallery;
