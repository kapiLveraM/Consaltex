import React from "react";
import Hamburg from "../components/Hamburg";
import WieTestosteron from "../components/WieTestosteron";
import WirArbeiten from "../components/WirArbeiten";
import Zusammenarbeit from "../components/Zusammenarbeit";
import Consaltex from "../components/Consaltex";
import Liefern from "../components/Liefern";
import DieNachsten from "../components/DieNachsten";
import Videos from "../components/Videos";
import Accordion from "../components/Accordion";
import NochFragen from "../components/NochFragen";
import Footer from "../components/Footer";
import DasSagen from "../components/DasSagen";
import TopNav from "../components/TopNav";
const HomePage = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <div className=" min-vh-100 d-flex flex-column bg_img_hero ">
          <TopNav  />
          <Hamburg />
          <WieTestosteron />
        </div>
        <WirArbeiten />
        <Zusammenarbeit />
        <DasSagen />
        <Consaltex />
        <Liefern />
        <DieNachsten />
        <Videos />
        <Accordion />
        <NochFragen />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
