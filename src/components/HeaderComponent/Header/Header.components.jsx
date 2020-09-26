import React from "react";
import Navbar from "../NavBar/Navbar.components";
import TopBar from "../TopBar/TopBar.components";
import Slider from "../Slider/Slider.components";
import CatergoryBar from "../CatergoryBar/CatergoryBar.components";
const Header = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <CatergoryBar />
      <Slider />
    </div>
  );
};

export default Header;
