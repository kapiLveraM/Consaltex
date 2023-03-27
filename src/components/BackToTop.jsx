import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 200 ? (
        <div
          className="back-to-top fs-3 ff_inter text-white"
          onClick={() => scrollToTop()}
        >
          <svg
            width="20"
            height="20"
            fill="white"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BackToTop;
