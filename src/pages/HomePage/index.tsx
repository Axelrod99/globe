import React, { useRef } from "react";
import Layout from "../../components/Layout";
import Banner from "./Banner";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SectionSeven from "./sectionSeven";
import Header from "../../components/Layout/Header";

const HomePage = () => {
  const Gallery = useRef(null);
  const ministers = useRef(null);
  const schedule = useRef(null);
  const home = useRef(null);

  const handleGallery = () => {
    if (Gallery.current) {
      (
        Gallery.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMinisters = () => {
    if (ministers.current) {
      (
        ministers.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSchedule = () => {
    if (schedule.current) {
      (
        schedule.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHome = () => {
    if (home.current) {
      (
        home.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div ref={home}>
        <Header
          HomeClick={() => handleHome()}
          GalleryClick={() => handleGallery()}
          MinistersClick={() => handleMinisters()}
          ScheduleClick={() => handleSchedule()}
        />
      </div>
      <Banner />
      {/* <SectionOne /> */}
      <div ref={ministers}>
        <SectionTwo />
      </div>
      <div ref={Gallery}>
        <SectionThree />
      </div>
      <SectionFour />
      <div ref={schedule}>
        <SectionFive />
      </div>
      <SectionSix />
      <SectionSeven />
    </Layout>
  );
};

export default HomePage;
