import React from "react";
import Initiativbewerbung from "../components/Initiativbewerbung";
import WirSuchen from "../components/WirSuchen";
import Hamburg from "../components/Hamburg";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
const Karriere = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column bg_img_hero">
        <TopNav img_none={"d-none"} />
        <div className=" pb-5">
          <Hamburg />
          <Initiativbewerbung />
          <WirSuchen />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Karriere;
