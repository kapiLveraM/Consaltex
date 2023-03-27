import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card_Aworr from "../assets/image/png/Card_Arrow.png";
import cube_pinke from "../assets/image/png/Cubepink.png";
import VectorLine from "./VectorLine";
import Arrow from "./Arrow";
import blur_2 from "../assets/image/png/blur_2.png";
const DieNachsten = () => {
  return (
    <>
      <section className=" py-5 position-relative">
        <img
          src={cube_pinke}
          alt=" cube_pinke"
          className=" position-absolute cubePink d-none d-lg-inline-block"
        />
        <img
          src={blur_2}
          alt="blur_2"
          className=" position-absolute z_index_n_1 d-none d-lg-inline-block end-0"
        />
        <Container>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className=" comman_par text-center">
              {" "}
              <span>
                {" "}
                <VectorLine />{" "}
              </span>{" "}
              Die nächsten Schritte
            </p>
            <h2 className=" comman_heading text-center pb-4">
              So geht es für dich weiter!
            </h2>
          </div>
          <Row>
            <Col
              data-aos="zoom-out-right"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              xl="3"
              className=" pt-2"
            >
              <div className=" card_hover text-center px-3 py-4 d-inline-block position-relative">
                <img
                  src={Card_Aworr}
                  alt="Card_Aworr"
                  className=" position-absolute card_Aworr d-none d-md-inline-block "
                />
                <svg
                  className=" card_svg_hover"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_1_233)">
                    <circle
                      cx="37.6284"
                      cy="37.3354"
                      r="37.1611"
                      fill="#FCFFFE"
                      fill-opacity="0.12"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.5307 18.5737C35.6771 18.9485 34.1781 20.291 33.702 22.0029C33.4545 22.8924 33.4591 44.74 33.7068 45.1136C34.0157 45.5796 34.7798 45.8012 35.261 45.5645C35.3566 45.5174 36.5233 44.7258 37.8537 43.8053L40.2728 42.1315L47.7245 42.0945C55.1636 42.0575 55.1771 42.0572 55.6998 41.8927C57.247 41.4061 58.4138 40.3433 58.9883 38.8972L59.2041 38.3539V30.317V22.2802L59.0168 21.7617C58.4884 20.2987 57.3127 19.2045 55.6998 18.6748L55.1762 18.5029L46.5966 18.4891C39.7195 18.478 37.9206 18.4949 37.5307 18.5737ZM53.4442 24.5782C54.0383 24.8939 54.2124 25.5838 53.8389 26.1426C53.5097 26.6352 53.8573 26.6134 46.3346 26.6134H39.5313L39.2657 26.4468C38.5627 26.0055 38.5289 25.1321 39.1968 24.667C39.5832 24.398 39.2598 24.409 46.5161 24.4191C53.0311 24.4282 53.1678 24.4313 53.4442 24.5782ZM53.497 29.3613C54.237 29.7817 54.2059 30.8273 53.4414 31.2403C53.0071 31.4749 39.7876 31.4774 39.3548 31.2429C38.5443 30.804 38.499 29.8538 39.2657 29.3726L39.5313 29.206H46.3775C53.1882 29.206 53.2252 29.2068 53.497 29.3613ZM45.7089 34.0763C46.5962 34.4862 46.5728 35.6611 45.67 36.0283C45.1109 36.2557 39.6379 36.2133 39.2967 35.979C38.528 35.451 38.5532 34.4628 39.345 34.0817C39.7645 33.8798 45.2734 33.8752 45.7089 34.0763ZM24.4832 36.4332C22.8179 36.7698 21.2798 37.8895 20.5399 39.3039C18.9297 42.3821 20.9442 46.0577 24.604 46.719L25.1276 46.8137L24.7249 46.8664C21.561 47.2802 18.9906 49.391 18.2237 52.2053C17.9516 53.2035 17.9481 55.5703 18.2181 55.9183C18.6058 56.4181 18.2227 56.395 25.7611 56.3731C33.3718 56.351 32.7298 56.3969 33.1786 55.8429C33.4055 55.5628 33.415 53.4447 33.1936 52.4697C32.5521 49.6435 30.1904 47.5171 27.0611 46.9482L26.1749 46.7872L26.5844 46.742C29.6734 46.4015 31.9251 43.3785 31.2599 40.4649C30.6286 37.7003 27.4805 35.8273 24.4832 36.4332Z"
                    fill="#FCFFFE"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1_233"
                      x="-7.70816"
                      y="-8.00113"
                      width="90.6732"
                      height="90.6732"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.08772"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_233"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_233"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_226"
                      x1="38.6049"
                      y1="20.7723"
                      x2="38.6049"
                      y2="54.2229"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CD8AE" />
                      <stop offset="1" stop-color="#0CD845" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className=" fs_sm fw-semibold ff_Montserrat text_hover pt-4">
                  1. Terminanfrage
                </h2>
                <p className=" comman_par text-center">
                  Vereinbare online deinen Termin und beantworte einige Fragen,
                  damit wir uns optimal auf dich vorbereiten können.
                </p>
              </div>
            </Col>
            <Col
              data-aos="zoom-in-up"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              xl="3"
              className=" pt-2"
            >
              <div className=" card_hover text-center px-3 py-4 d-inline-block position-relative">
                <img
                  src={Card_Aworr}
                  alt="Card_Aworr"
                  className=" position-absolute card_Aworr d-none d-xl-inline-block"
                />
                <svg
                  className=" card_svg_hover"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_1_226)">
                    <circle
                      cx="37.6284"
                      cy="37.3354"
                      r="37.1611"
                      fill="#FCFFFE"
                      fill-opacity="0.12"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.3599 20.8102C36.3083 21.3178 32.1941 24.0081 30.5089 27.9057C30.2512 28.5017 29.8837 29.7574 29.9479 29.8219C29.9681 29.8421 30.2293 29.7842 30.5284 29.6932C40.2849 26.7279 50.6113 32.7178 51.3213 41.7542L51.3662 42.3258H52.9403C54.7265 42.3258 54.8452 42.2987 55.1136 41.8291C55.4443 41.2503 55.3783 41.1143 53.9623 39.4576C53.3158 38.7012 52.7869 38.0521 52.7869 38.015C52.7869 37.978 52.924 37.7791 53.0915 37.573C57.8562 31.7115 54.3738 23.3323 46.3123 21.2611C44.8517 20.8859 42.6251 20.6831 41.3599 20.8102ZM34.1 30.965C27.9365 31.6511 23.2101 35.4425 22.1073 40.5852C21.9002 41.5508 21.8986 43.364 22.1039 44.387C22.462 46.1715 23.225 47.8108 24.3507 49.2141L24.7154 49.6687L24.3085 50.1285C22.5255 52.1433 21.9914 52.7964 21.9512 53.0114C21.8637 53.4793 22.0711 53.9176 22.4698 54.1074C22.7387 54.2354 36.6919 54.2698 37.7788 54.1451C40.2238 53.8647 42.8702 52.7342 44.9144 51.097C48.7644 48.0136 50.274 43.5563 48.8828 39.3792C47.4459 35.0644 43.2966 31.9022 37.9626 31.0568C37.1893 30.9343 34.8712 30.8791 34.1 30.965ZM30.6124 40.59C31.7862 41.1661 32.0389 42.7604 31.1048 43.6974C30.1487 44.6566 28.5097 44.3597 27.967 43.1292C27.2267 41.4504 28.9653 39.7816 30.6124 40.59ZM36.5375 40.59C37.7114 41.1661 37.9641 42.7604 37.03 43.6974C36.0738 44.6566 34.4348 44.3597 33.8921 43.1292C33.1519 41.4504 34.8905 39.7816 36.5375 40.59ZM42.4627 40.59C43.6365 41.1661 43.8892 42.7604 42.9551 43.6974C41.9989 44.6566 40.36 44.3597 39.8173 43.1292C39.077 41.4504 40.8156 39.7816 42.4627 40.59Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1_226"
                      x="-7.70816"
                      y="-8.00113"
                      width="90.6732"
                      height="90.6732"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.08772"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_226"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_226"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_226"
                      x1="38.6049"
                      y1="20.7723"
                      x2="38.6049"
                      y2="54.2229"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CD8AE" />
                      <stop offset="1" stop-color="#0CD845" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className=" fs_sm fw-semibold ff_Montserrat text_hover pt-4">
                  2. Erstgespräch
                </h2>
                <p className=" comman_par text-center">
                  Im Telefonat ermitteln wir die Hürden, die dich von deinen
                  Wunschumsätzen fernhalten.
                </p>
              </div>
            </Col>
            <Col
              data-aos="zoom-in-up"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              xl="3"
              className=" pt-2"
            >
              <div className=" card_hover text-center px-3 py-4 d-inline-block position-relative">
                <img
                  src={Card_Aworr}
                  alt="Card_Aworr"
                  className=" position-absolute card_Aworr d-none d-md-inline-block"
                />
                <svg
                  className=" card_svg_hover"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_1_241)">
                    <circle
                      cx="37.6284"
                      cy="37.3354"
                      r="37.1611"
                      fill="#FCFFFE"
                      fill-opacity="0.12"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.788 19.4922C23.2388 20.9758 16.123 36.1893 23.6794 47.5178C29.9405 56.9043 43.2566 58.2145 51.2548 50.2309C60.5845 40.9182 57.0659 24.9673 44.6925 20.4818C42.3462 19.6313 39.1606 19.2324 36.788 19.4922ZM32.5547 26.7674C33.2002 27.1651 35.8439 31.6196 35.8439 32.3093C35.8439 32.6127 35.7599 32.7098 34.6339 33.7071C33.7028 34.532 33.7166 34.5002 33.9678 35.2398C34.9913 38.2532 37.7869 41.0576 40.7908 42.0843C41.509 42.3299 41.5159 42.3279 42.0467 41.7194C43.169 40.4325 43.4213 40.2023 43.7096 40.2023C44.078 40.2023 45.5068 40.9272 47.0527 41.8984C49.2034 43.2496 49.5295 43.574 49.2749 44.1096C48.9779 44.7343 46.7976 46.7127 45.2348 47.7754L44.4768 48.2907L44.0227 48.2417C42.6823 48.0968 40.6464 47.3497 38.9838 46.3924C33.3566 43.1528 28.3452 36.6863 27.8319 32.0023L27.7824 31.5513L28.2266 30.8749C29.1182 29.5173 31.037 27.3302 31.7551 26.8531C32.1495 26.591 32.2509 26.5801 32.5547 26.7674ZM41.2813 26.8263C45.7581 27.7503 49.0048 31.4467 49.3451 36.0074L49.3971 36.7053L48.6182 36.6838L47.8393 36.6622L47.7867 35.9482C47.4893 31.9089 44.1112 28.5202 40.0846 28.2218L39.3729 28.1691L39.3514 27.3877L39.3299 26.6063L40.0257 26.6586C40.4084 26.6873 40.9734 26.7628 41.2813 26.8263ZM40.7964 30.6825C43.3947 31.3104 45.4757 33.7926 45.4787 36.2676L45.4792 36.6998H44.73H43.9807L43.9794 36.4555C43.9677 34.2683 41.7593 32.0529 39.5789 32.0411L39.3354 32.0399V31.2882V30.5366L39.7662 30.5372C40.0032 30.5375 40.4668 30.6029 40.7964 30.6825Z"
                    fill="#FCFFFE"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1_241"
                      x="-7.70816"
                      y="-8.00113"
                      width="90.6732"
                      height="90.6732"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.08772"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_241"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_241"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_226"
                      x1="38.6049"
                      y1="20.7723"
                      x2="38.6049"
                      y2="54.2229"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CD8AE" />
                      <stop offset="1" stop-color="#0CD845" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 className=" fs_sm fw-semibold ff_Montserrat text_hover pt-4">
                  3. Strategieberatung
                </h2>
                <p className=" comman_par text-center">
                  Ein ausgewählter Strategieberater entwickelt in 60 Minuten mit
                  dir einen individuellen Plan, um deinen Markt erobern zu
                  können.
                </p>
              </div>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-offset="800"
              data-aos-duration="900"
              md="6"
              xl="3"
              className=" pt-2"
            >
              <div className=" card_hover text-center px-3 py-4 d-inline-block">
                <svg
                  className=" card_svg_hover"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_1_250)">
                    <circle
                      cx="37.6284"
                      cy="37.3354"
                      r="37.1611"
                      fill="#FCFFFE"
                      fill-opacity="0.12"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.9526 19.8597C35.5972 19.9846 35.3918 20.1668 35.2634 20.4711C35.1177 20.8165 35.1188 24.544 35.2647 24.8943C35.552 25.584 36.4816 25.7727 37.031 25.2528C37.3621 24.9395 37.3919 24.6969 37.3668 22.5181C37.3447 20.6043 37.3357 20.492 37.1879 20.2934C36.8795 19.8787 36.3887 19.7063 35.9526 19.8597ZM29.1973 22.3383C28.7549 22.6172 28.5639 23.1348 28.724 23.6214C28.85 24.0043 30.8975 26.0146 31.2632 26.1145C32.0712 26.3351 32.8307 25.5409 32.5869 24.7304C32.5276 24.5329 32.2055 24.1594 31.3987 23.3521L30.2919 22.2448L29.8627 22.2171C29.5274 22.1955 29.3819 22.222 29.1973 22.3383ZM42.2225 22.3331C41.6841 22.6818 39.9824 24.5252 39.9278 24.8188C39.7781 25.6245 40.5092 26.325 41.28 26.1145C41.6686 26.0084 43.7056 23.9917 43.8237 23.5962C44.0309 22.9026 43.5936 22.2636 42.8801 22.2176C42.5408 22.1957 42.3951 22.2213 42.2225 22.3331ZM26.9941 28.7212C26.1509 28.8192 25.3823 29.168 24.7157 29.7551C23.986 30.3978 24.0255 30.3872 22.189 30.4291C20.4051 30.4698 20.2512 30.5064 19.9051 30.9722L19.7495 31.1816V38.4011V45.6205L19.9051 45.83C20.273 46.325 20.3215 46.3336 22.8948 46.3583L25.227 46.3806L29.3838 50.305C33.7491 54.4264 33.949 54.599 34.628 54.8345C36.4104 55.4526 38.552 54.1747 38.828 52.3285C38.8684 52.0582 38.9067 52.0013 39.0708 51.9678C40.5122 51.6739 41.594 50.6395 41.7831 49.3744C41.8254 49.0915 41.8624 49.0353 42.0277 49.0015C43.4692 48.7076 44.551 47.6732 44.7401 46.4081C44.7824 46.1252 44.8193 46.069 44.9847 46.0352C46.1856 45.7903 46.9698 45.1977 47.4563 44.1675C47.6779 43.6981 47.6929 43.6145 47.6929 42.8505C47.6929 41.8696 47.4767 41.3052 46.844 40.634L46.4684 40.2356L44.8259 40.1974C42.6446 40.1467 41.5309 39.8903 39.873 39.0571L39.2236 38.7308L38.7641 39.0595C36.4126 40.7413 33.3885 40.7863 31.014 39.1748C30.263 38.6651 28.8768 37.2281 28.6023 36.6746C28.0208 35.5023 28.1227 34.1739 28.8708 33.175C29.0386 32.9511 30.0956 32.0246 31.5456 30.8306C32.8641 29.7449 33.9525 28.8315 33.964 28.8009C34.0191 28.6554 28.1392 28.5881 26.9941 28.7212ZM39.0724 28.7207C37.5525 28.8761 37.0648 29.1691 33.6178 31.9973C30.5459 34.5177 30.507 34.5553 30.4511 35.0528C30.4003 35.5047 30.5184 35.688 31.4407 36.5896C32.5739 37.6975 33.5398 38.1389 34.8301 38.1389C35.9568 38.1389 36.7062 37.8252 38.1356 36.7547L39.1495 35.9955L39.725 36.3919C41.4794 37.6003 42.8278 37.9744 45.682 38.0446L47.5151 38.0897L48.1488 38.7645C48.9058 39.5706 49.14 39.9002 49.4797 40.6378C50.6546 43.1887 49.6045 46.2502 47.0728 47.6551C46.6706 47.8784 46.5662 47.9813 46.3681 48.3502C46.2402 48.5883 46.0719 48.879 45.9942 48.9961L45.8529 49.2092L46.1076 49.1561C47.1953 48.9295 48.1873 48.4585 49.2899 47.6454C50.8602 46.4874 51.3029 46.373 54.2143 46.373C55.5721 46.373 56.5108 46.3419 56.716 46.29C57.1031 46.1922 57.4589 45.8295 57.5241 45.4661C57.5481 45.3327 57.558 42.0641 57.5462 38.2026C57.5249 31.1975 57.5245 31.1811 57.3693 30.9722C56.9874 30.4584 57.0759 30.4702 53.3112 30.4291C49.4508 30.387 49.7515 30.4333 48.6446 29.7112C47.1636 28.7452 46.9331 28.7036 42.9248 28.6814C41.1155 28.6714 39.3819 28.6891 39.0724 28.7207Z"
                    fill="#FCFFFE"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1_250"
                      x="-7.70816"
                      y="-8.00113"
                      width="90.6732"
                      height="90.6732"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.08772"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_250"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_250"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_226"
                      x1="38.6049"
                      y1="20.7723"
                      x2="38.6049"
                      y2="54.2229"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CD8AE" />
                      <stop offset="1" stop-color="#0CD845" />
                    </linearGradient>
                  </defs>
                </svg>

                <h2 className=" fs_sm fw-semibold ff_Montserrat text_hover pt-4">
                  3. Strategieberatung
                </h2>
                <p className=" comman_par text-center">
                  Ein ausgewählter Strategieberater entwickelt in 60 Minuten mit
                  dir einen individuellen Plan, um deinen Markt erobern zu
                  können.
                </p>
              </div>
            </Col>
            <div className=" text-center max_widht_btn mt-5">
              <button className="  comman_btn ff_PoiretOne fs_sm fw-normal text-light border-0 px-3 py-2 mt-3">
                Jetzt Erstgespräch vereinbaren{" "}
                <span className=" ms-3">
                  {" "}
                  <Arrow />{" "}
                </span>
              </button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DieNachsten;
