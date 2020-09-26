import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.components";
import "./Body.styles.scss";
import CagtegoryDemo from "../CategoryDemo/CategoryDemo.components";
const Body = () => {
  return (
    <div>
      <FeaturedProducts title="Kitchen Items" />
      <CagtegoryDemo />
    </div>
  );
};

export default Body;
