import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FivePage from "./FivePage/FivePage";
import { useLocation } from "react-router-dom";
import "./Home.scss";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { scroll } from "./../../Common/FullPage/FullPage";
const Home = () => {
  const path = useLocation();

  const [headerClass, setHeaderClass] = useState("");
  const [sloganClass, setSloganClass] = useState("");
  const [categoryClass, setCategoryClass] = useState("");
  const [storyClass, setStoryClass] = useState("");
  const [footerClass, setFooterClass] = useState("");

  useEffect(() => {
    scroll();
  });
  useEffect(() => {
    switch (path.hash) {
      case "#firstPage":
        gsap.fromTo(
          ".main-text",
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
        break;
      case "#secondPage":
        gsap.fromTo(
          ".second-main-text",
          { y: -200, opacity: 0 },
          { y: 0, opacity: 1, duration: 2 }
        );
        break;
      case "#thirdPage":
        break;
      case "#fourthPage":
        gsap.fromTo(
          ".story-list",
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
        break;
      case "#fifthPage":
        gsap.fromTo(
          ".text-box-heading",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 2 }
        );
        gsap.fromTo(
          ".text-box-second",
          { x: -200, opacity: 0 },

          { x: 0, opacity: 1, duration: 1, stagger: 0.7, delay: 2 }
        );
        gsap.fromTo(
          ".main-text-five",
          { x: -200, opacity: 0 },

          { x: 0, opacity: 1, duration: 2 }
        );
        break;
    }
  }, [path]);
  return (
    <div className="Home">
      <div className="page-home" id="fullpage">
        <div className="section">
          <FirstPage />
        </div>
        <div className="section">
          <SecondPage />
        </div>
        <div className="section">
          <ThirdPage />
        </div>
        <div className="section">
          <FourthPage />
        </div>
        <div className="section">
          <FivePage />
        </div>
      </div>
    </div>
  );
};

export default Home;
