import React from "react";
import UnderCard from "../components/UnderCard";
import SitNec from "../components/SitNec";
import Hamburg from "../components/Hamburg";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
const Kundenrezensionen = () => {
  return (
    <>
      <TopNav img_none={ "d-none" } />
      <Hamburg />
      <SitNec />
      <UnderCard />
      <Footer />
    </>
  );
};

export default Kundenrezensionen;
