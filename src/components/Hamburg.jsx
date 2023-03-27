import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import logo from "../assets/image/svg/Logo.svg";
import Arrow from "./Arrow";
import Cubeprevui from "../assets/image/png/Cube(pink)_prev_ui.png";
import { Link, useLocation } from "react-router-dom";
const Hamburg = () => {
  const path = useLocation().pathname;
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="position-relative z_index_10">
      <img
        src={Cubeprevui}
        alt="Cubeprevui"
        className=" position-absolute Cubeprevui_setup d-none d-lg-inline-block"
      />
      <Nav className="py-3  ">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <li href="#" className="d-inline-bloack page-logo">
              <a href="#" className="">
                <img src={logo} alt="logo" />
              </a>
            </li>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-5 align-items-center">
              <Link to="/">
                <a
                  className={`d-inline-block ff_PoiretOne fs_sm fw-normal nav_links ${
                    path === "/" ? "opacity-100" : ""
                  }`}
                  href="#Benefits"
                >
                  Home
                </a>
              </Link>
              <Link to="/Kundenrezensionen">
                <a
                  className={`d-inline-block ff_PoiretOne fs_sm fw-normal nav_links ${
                    path === "/Kundenrezensionen" ? "opacity-100" : ""
                  } `}
                  href="#Privacy"
                >
                  Kundenrezensionen
                </a>
              </Link>
              <Link
                className={`d-inline-block ff_PoiretOne fs_sm fw-normal nav_links ${
                  path === "/Karriere" ? "opacity-100" : ""
                }`}
                to="/Karriere"
              >
                Karriere
              </Link>
            </ul>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex">
              <Link>
                <a
                  className="d-inline-block  ff_PoiretOne fs_sm fw-normal comman_btn text-light px-3 py-2"
                  href="#Features"
                >
                  Jetzt Erstgespräch vereinbaren
                  <span className=" ms-4">
                    <Arrow />
                  </span>
                </a>
              </Link>
            </ul>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn -close btn-close -white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block  ff_PoiretOne fs_lg fw-normal nav_links "
                    href="#Benefits"
                  >
                    Home
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block ff_PoiretOne fs_lg fw-normal nav_links"
                    href="#Privacy"
                  >
                    Kundenrezensionen
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block  ff_PoiretOne fs_lg fw-normal nav_links"
                    href="#Products"
                  >
                    Karriere
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block  ff_PoiretOne fs_lg fw-normal comman_btn text-light px-3 py-2"
                    href="#Features"
                  >
                    Jetzt Erstgespräch vereinbaren
                    <span className=" ms-4">
                      <Arrow />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default Hamburg;
