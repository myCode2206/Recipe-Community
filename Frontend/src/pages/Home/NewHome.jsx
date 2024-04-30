import React, { useEffect, useState } from "react";

const NewHome = () => {
  const [x, setX] = useState(0);
  const [mx, setMx] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    const COMPONENT_SELECTOR = ".carousel__wrapper";
    const CONTENT_SELECTOR = ".carousel__content";

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      const content = component.querySelector(CONTENT_SELECTOR);

      const handleNextClick = (event) => {
        event.preventDefault();
        const newX = content.clientWidth / 2 + content.scrollLeft + 0;
        content.scrollLeft = newX;
        setX(newX);
      };

      const handlePrevClick = (event) => {
        event.preventDefault();
        const newX = content.clientWidth / 2 - content.scrollLeft + 0;
        content.scrollLeft = -newX;
        setX(-newX);
      };

      const mousemoveHandler = (e) => {
        const mx2 = e.pageX - content.offsetLeft;
        if (mx) {
          content.scrollLeft = content.sx + mx - mx2;
        }
        setMx(mx2);
      };

      const mousedownHandler = (e) => {
        content.sx = content.scrollLeft;
        const mxVal = e.pageX - content.offsetLeft;
        setMx(mxVal);
        content.classList.add("dragging");
      };

      const scrollHandler = () => {
        toggleArrows();
      };

      const toggleArrows = () => {
        const nextButton = component.querySelector(".arrow-next");
        const prevButton = component.querySelector(".arrow-prev");
        if (content.scrollLeft > maxScrollWidth - 10) {
          nextButton.classList.add("disabled");
        } else if (content.scrollLeft < 10) {
          prevButton.classList.add("disabled");
        } else {
          nextButton.classList.remove("disabled");
          prevButton.classList.remove("disabled");
        }
      };

      const mouseupHandler = () => {
        setMx(0);
        content.classList.remove("dragging");
      };

      const maxScrollWidthValue =
        content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
      setMaxScrollWidth(maxScrollWidthValue);

      component
        .querySelector(".arrow-next")
        .addEventListener("click", handleNextClick);
      component
        .querySelector(".arrow-prev")
        .addEventListener("click", handlePrevClick);
      content.addEventListener("mousemove", mousemoveHandler);
      content.addEventListener("mousedown", mousedownHandler);
      content.addEventListener("scroll", scrollHandler);
      content.addEventListener("mouseup", mouseupHandler);
      content.addEventListener("mouseleave", mouseupHandler);
    }

    // Cleanup function
    return () => {
      // Remove event listeners
    };
  }, [maxScrollWidth]);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        color: "#fff",
        fontFamily: '"Figtree", sans-serif',
        background:
          "linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(30, 30, 30, 1) 100%)",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        <div className="carousel" style={{ padding: "24px" }}>
          {/* Your carousel HTML structure goes here */}
        </div>
        <div className="disclaimer" style={{ color: "#fff" }}>
          {/* Disclaimer content */}
        </div>
      </div>
    </div>
  );
};

export default NewHome;
