import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "./Arrow";
import man_img from "../assets/image/png/man_img.png";
const Liefern = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <Row className=" justify-content-between align-items-center flex-column-reverse flex-md-row">
            <Col
              data-aos="zoom-in-right"
              data-aos-offset="900"
              data-aos-duration="1000"
              md="6"
              lg="8"
            >
              <h2 className=" fw-normal fs_xl ff_PoiretOne text-light">
                Wir liefern Ergebnisse
              </h2>
              <p className=" comman_par">
                Wir sind vielleicht nicht der größte Player in der Branche, aber
                auf dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                gemeinsam mit Unternehmern wie dir Erfolgsgeschichten zu
                schreiben.
              </p>
              <p className=" comman_par">
                Wenn andere aufgeben, werden wir erst richtig warm. Wir sind der
                Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                erklärungsbedürftige Services und scheinbar aussichtslose Fälle.
                Wir sind das Spezialeinsatzkommando für Agenturen.
              </p>
              <p className=" comman_par">
                Unser Herz schlägt für den Underdog: David gegen Goliath -
                Marketing, Vertrieb, interne Prozesse: Unser Team gibt für dich
                110 Prozent - weil dein Erfolg unsere Motivation ist.
              </p>
              <div className=" text-sm-center text-md-start max_widht_btn">
                <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
                  Jetzt Erstgespräch vereinbaren{" "}
                  <span className=" ms-3">
                    {" "}
                    <Arrow />{" "}
                  </span>
                </button>
              </div>
            </Col>
            <Col
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="900"
              data-aos-duration="800"
              md="6"
              lg="4"
            >
              <img src={man_img} alt="man_img" className=" w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Liefern;
