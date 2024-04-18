import About from "./components/oraganisms/Home/About";
import Blog from "./components/oraganisms/Home/Blog";
import Contact from "./components/oraganisms/Home/Contact";
import Impact from "./components/oraganisms/Home/Impact";
import Innovation from "./components/oraganisms/Home/Innovation";
import InnovationSlider from "./components/oraganisms/Home/Innovation_Slider";
import Services from "./components/oraganisms/Home/Services";
import Team from "./components/oraganisms/Home/Team";
import AvailableOptions from "./components/oraganisms/Home/available_options";
import CaseStudySlider from "./components/oraganisms/Home/case_study_slider";
import JoinUs from "./components/oraganisms/Home/join_us";
import ShadesLayout from "./components/tamplates/shades_layout";

import { getClient } from "@faustwp/experimental-app-router";
import { HOME_QUERY } from "./utils/constants-query";

async function getData() {
  try {
    const client = await getClient();

    const { data } = await client.query({
      query: HOME_QUERY,
    });

    return data?.pageBy?.home;
  } catch (error) {
    console.log("error while getting data of Home Query", error);
    return null;
  }
}

export default async function Home() {
  const apiData = await getData();
  return (
    <>
      <Innovation />
      <ShadesLayout position={"top-left"} img={"/images/greenShade.png"}>
        <InnovationSlider />
        <JoinUs />
      </ShadesLayout>
      <ShadesLayout position={"center-right"} img={"/images/purpleShade.png"}>
        <About />
        <Services />
      </ShadesLayout>
      <Impact />
      <ShadesLayout position={"center-left"} img={"/images/yellowShade.png"}>
        <CaseStudySlider />
        <AvailableOptions />
      </ShadesLayout>
      <ShadesLayout position={"center-right"} img={"/images/pinkShade.png"}>
        <Team />
        <Blog apiData={apiData?.blog} />
      </ShadesLayout>
      <ShadesLayout position={"bottom-left"} img={"/images/greenShade.png"}>
        <JoinUs />
        <Contact />
      </ShadesLayout>
    </>
  );
}
